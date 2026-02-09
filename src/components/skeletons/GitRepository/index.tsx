import { IRepoGit } from "@services/types";
import { useCallback, useEffect, useRef } from "react";

interface IPropGitProfile {
  repository: IRepoGit[] | undefined;
  loading: boolean;
}

export const GitRepository = ({ repository, loading }: IPropGitProfile) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const items: number[] = [0, 1, 2, 3];

  const handleMouseEnter = useCallback(() => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        console.warn('Audio play prevented:', error);
      });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (audioRef.current) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      }, 500);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="w-full gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-4">
        {loading ? (
          <>
            {items.map((item) => (
              <div key={item} className="rounded-lg border border-border bg-card text-card-foreground shadow-sm p-6 flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-5 bg-muted rounded w-1/3 animate-pulse"></div>
                  <div className="h-4 bg-muted rounded w-1/6 animate-pulse"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>
                </div>
                <div className="flex justify-between pt-4">
                  <div className="h-8 bg-muted rounded w-1/4 animate-pulse"></div>
                  <div className="h-8 bg-muted rounded w-1/4 animate-pulse"></div>
                  <div className="h-8 bg-muted rounded w-1/4 animate-pulse"></div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {repository?.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="group relative flex flex-col justify-between rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/50 p-6"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
                      {repo.name}
                    </h3>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {repo.language || 'N/A'}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]">
                    {repo.description || 'Sem descrição definida.'}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1" title="Watchers">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                    <span>{repo.watchers}</span>
                  </div>

                  <div className="flex items-center gap-1" title="Stars">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <span>{repo.stargazers_count}</span>
                  </div>

                  <div className="flex items-center gap-1" title="Forks">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-git-fork"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"/><path d="M12 12v3"/></svg>
                    <span>{repo.forks}</span>
                  </div>
                </div>
                <audio ref={audioRef} src="/audio/efeito-repo1.wav" />
              </a>
            ))}
          </>
        )}
      </div>
    </>
  );
};
