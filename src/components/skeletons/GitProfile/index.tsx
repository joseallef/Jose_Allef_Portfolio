import { IUserGit } from "@services/types";

interface IPropGitProfile {
  user: IUserGit | undefined;
  loading: boolean;
}

export const GitProfile = ({ user, loading }: IPropGitProfile) => {
  return (
    <div className="rounded-lg border border-border bg-card text-card-foreground shadow-sm p-6 w-full max-w-2xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="shrink-0">
          {loading ? (
            <div className="h-32 w-32 rounded-full bg-muted animate-pulse" />
          ) : (
            <img
              src={user?.avatar_url || "/image/default-avatar.jpg"}
              alt="Avatar"
              className="h-32 w-32 rounded-full object-cover border-2 border-primary/20"
            />
          )}
        </div>
        
        <div className="flex-1 w-full space-y-4">
          {loading ? (
            <div className="space-y-3">
              <div className="h-6 bg-muted rounded w-3/4 animate-pulse" />
              <div className="grid grid-cols-2 gap-4">
                <div className="h-4 bg-muted rounded animate-pulse" />
                <div className="h-4 bg-muted rounded animate-pulse" />
                <div className="h-4 bg-muted rounded animate-pulse" />
                <div className="h-4 bg-muted rounded animate-pulse" />
              </div>
            </div>
          ) : (
            <>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">{user?.name || user?.login}</h2>
                <a 
                  href={user?.html_url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  @{user?.login}
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center sm:text-left">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">{user?.public_repos}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Repositórios</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">{user?.followers}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Seguidores</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">{user?.following}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Seguindo</span>
                </div>
              </div>
              
              {user?.bio && (
                <p className="text-muted-foreground text-sm mt-2">
                  {user.bio}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}