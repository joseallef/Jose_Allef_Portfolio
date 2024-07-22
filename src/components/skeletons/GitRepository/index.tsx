import { ThemeApp } from "@components/wrappers/context";
import { IRepoGit } from "@services/types";
import { useCallback, useContext, useEffect, useRef } from "react";

interface IPropGitProfile {
  repository: IRepoGit[] | undefined;
  loading: boolean;
}

export const GitRepository = ({ repository, loading }: IPropGitProfile) => {
  const { themeApp } = useContext(ThemeApp);

  const audioRef = useRef<HTMLAudioElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const items: number[] = [0, 1, 2, 3];

  const handleMouseEnter = useCallback(() => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
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
      <div className={`${loading ? 'animate-pulse ' : ''} w-full gap-5 md:gap-1 grid text-center md:grid-cols-2 lg:w-full lg:mb-0 lg:grid-cols-2`}>
        {loading ? (
          <>
            {items.map((item) => (
              <div key={item}
                className={`rounded-md md:m-3 p-2 md:p-4 ${themeApp === "dark" ? "bg-slate-900" : "bg-[#2c4efa3f]"} flex flex-col justify-between space-y-4 scale-100 hover:scale-105 delay-0 duration-300 ease-in-out`}>
                <div className="text-center  shadow shadow-blue-500/40">
                  <div className="flex items-center justify-center p-1">
                    <div className='w-32 h-4 bg-gray-300 rounded-full dark:bg-gray-600'></div>
                  </div>
                </div>

                <div className="text-center shadow shadow-blue-500/40 p-2">
                  <div className="flex items-center justify-center">
                    <div className='w-full h-4 bg-gray-300 rounded-full dark:bg-gray-600'></div>
                  </div>

                  <div className="flex items-center justify-center mt-2">
                    <div className='w-full h-4 bg-gray-300 rounded-full dark:bg-gray-600'></div>
                  </div>
                </div>

                <div className="shadow shadow-blue-500/40 flex justify-around justify-items-center p-2">
                  <div className="flex flex-col text-center justify-center justify-items-center">
                    <div className="flex text-center justify-center justify-items-center mb-1">
                      <img
                        src="/image/icon-visivel.png"
                        alt="Watchs Github"
                        className="w-5 invert"
                      />
                    </div>
                    <div className="flex justify-center justify-items-center">
                      <div className="w-10 h-3 bg-gray-300 rounded-full dark:bg-gray-600"></div>
                    </div>

                    <div className="flex justify-center justify-items-center">
                      <div>Watchers</div>
                    </div>
                  </div>

                  <div className="flex flex-col text-center justify-center justify-items-center">
                    <div className="flex text-center justify-center justify-items-center mb-1">
                      <img
                        src="/image/star.svg"
                        alt="Stars Github"
                        className="w-4"
                      />
                    </div>
                    <div className="flex justify-center justify-items-center">
                      <div className="w-10 h-3 bg-gray-300 rounded-full dark:bg-gray-600"></div>
                    </div>

                    <div className="flex justify-center justify-items-center">
                      <div>Stars</div>
                    </div>
                  </div>

                  <div className="flex flex-col text-center justify-center justify-items-center">
                    <div className="flex text-center justify-center justify-items-center mb-1">
                      <img
                        src="/image/icon-fork-black.svg"
                        alt="Forks Github"
                        className="w-4"
                      />
                    </div>

                    <div className="flex justify-center justify-items-center">
                      <div className="w-10 h-3 bg-gray-300 rounded-full dark:bg-gray-600"></div>
                    </div>

                    <div className="flex justify-center justify-items-center">
                      <div>Forks</div>
                    </div>
                  </div>

                  <div className="flex flex-col text-center justify-center">
                    <div className="shadow shadow-blue-500/55 p-1 flex flex-col text-center justify-center justify-items-center h-8">
                      <a
                        href="#"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <h2 className={`text-2xl font-semibold`}>
                          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                          </span>
                        </h2>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {Array.isArray(repository) && repository.map((repo) => (
              <div
                key={repo?.name}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`rounded-md md:m-3 p-2 md:p-4 ${themeApp === "dark" ? "bg-slate-900" : "bg-[#2c4efa3f]"} flex flex-col justify-between space-y-4 scale-100 hover:scale-105 delay-0 duration-300 ease-in-out`}>
                <div className="text-center border border-sky-800 rounded-md">
                  <div className="flex items-center justify-center p-1 break-all">
                    <p className="text-sm md:text-lg">{repo?.name ?? ''}</p>
                  </div>
                </div>

                <div className="text-center border border-sky-800 rounded-md p-2">
                  <div className="flex items-center justify-center">
                    <p className="text-xs md:text-base">{repo?.description ?? 'Não há descrição'}</p>
                  </div>
                </div>

                <div className="border border-sky-800 rounded-md flex justify-around justify-items-center p-2">
                  <div className="flex flex-col text-center justify-center justify-items-center">
                    <div className="flex text-center justify-center justify-items-center mb-1">
                      <img
                        src="/image/icon-visivel.png"
                        alt="Watchs Github"
                        className="w-5 invert"
                      />
                    </div>
                    <div className="flex justify-center justify-items-center">
                      <div className="text-xs md:text-base">{repo?.watchers}</div>
                    </div>

                    <div className="flex justify-center justify-items-center">
                      <div className="text-sky-200 text-xs md:text-base">Watchers</div>
                    </div>
                  </div>

                  <div className="flex flex-col text-center justify-center justify-items-center">
                    <div className="flex text-center justify-center justify-items-center mb-1">
                      <img
                        src="/image/star.svg"
                        alt="Stars Github"
                        className="w-4"
                      />
                    </div>
                    <div className="flex justify-center justify-items-center">
                      <div className="text-xs md:text-base">{repo?.stargazers_count}</div>
                    </div>

                    <div className="flex justify-center justify-items-center">
                      <div className="text-sky-200 text-xs md:text-base">Stars</div>
                    </div>
                  </div>

                  <div className="flex flex-col text-center justify-center justify-items-center">
                    <div className="flex text-center justify-center justify-items-center mb-1">
                      <img
                        src="/image/icon-fork-black.svg"
                        alt="Forks Github"
                        className="w-4"
                      />
                    </div>

                    <div className="flex justify-center justify-items-center">
                      <div className="text-xs md:text-base">{repo?.forks}</div>
                    </div>

                    <div className="flex justify-center justify-items-center">
                      <div className="text-sky-200 text-xs md:text-base">Forks</div>
                    </div>
                  </div>

                  <div className="flex flex-col text-center justify-center">
                    <div className="border border-sky-800 rounded-sm flex flex-col text-center justify-center justify-items-center h-8 transition-all duration-300 scale-90 hover:scale-110">
                      <a
                        href={repo?.html_url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="px-3"
                      >
                        <h2 className={`text-2xl font-semibold`}>
                          <span className="inline-block transition-transform group-hover:translate-x-3 motion-reduce:transform-none">
                            -&gt;
                          </span>
                        </h2>
                      </a>
                    </div>
                  </div>
                </div>
                <audio ref={audioRef} src="/audio/efeito-repo1.wav" />
              </div>
            ))}

          </>
        )}
      </div>

      {Array.isArray(repository) && repository.length === 0 && !loading && (
        <div className={`w-4/5 lg:w-2/4 p-5 text-center rounded-sm ${themeApp === "dark" ? "bg-slate-900" : "bg-[#2c4efa3f]"}`}>
          <p>Nenhum resultado encontrado!</p>
        </div>
      )}
    </>
  )
}
