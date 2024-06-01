import { ThemeApp } from "@components/wrappers/context";
import { IUserGit } from "@services/types";
import { useContext } from "react";

interface IPropGitProfile {
  user: IUserGit | undefined;
  loading: boolean;
}

export const GitProfile = ({ user, loading }: IPropGitProfile) => {
  const { themeApp } = useContext(ThemeApp);
  return (
    <div className={`${themeApp === "dark" ? "bg-slate-900" : "bg-[#2c4efa3f]"} shadow rounded-md p-1 md:p-6 w-full md:w-4/5 xl:w-7/12`}>
      <div className={`${loading ? 'animate-pulse' : ''} flex justify-around`}>
        {user?.avatar_url ? (
          <div className="flex justify-center items-center p-1">
            <img
              src={user?.avatar_url || "/image/default-avatar.jpg"}
              alt="Imagem do perfil"
              className="rounded-full size-24 md:size-32"
            />
          </div>
        ) : (
          (loading ? (
            <div className="flex justify-center items-center p-1">
              <div className="h-24 w-24 md:h-32 md:w-32">
                <svg className="h-24 w-24 md:h-32 md:w-32 text-gray-200 dark:text-gray-600 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </div>
            </div>

          ) : (
            <div className="flex justify-center items-center p-1">
              <img
                src={"/image/default-avatar.jpg"}
                alt="Imagem do perfil"
                className="rounded-full size-32"
              />
            </div>

          ))
        )}
        <div className="space-y-4 py-1 md:w-2/4">
          <div className='grid items-center grid-cols-4 gap-4'>
            <p className="text-sky-200 col-span-2 text-xs md:text-base">Usuário:</p>
            {user?.login ? (
              <div className="text-center col-span-2 break-all text-xs md:text-base">{user?.login}</div>
            ) : (
              <div className='h-3 bg-slate-600 rounded col-span-2'></div>
            )}
          </div>
          <div className='grid items-center grid-cols-3 gap-4'>
            <p className="text-sky-200 col-span-2 text-xs md:text-base">Repos públicos:</p>
            {user?.public_repos ? (
              <div className="text-xs md:text-base">{user?.public_repos}</div>
            ) : (
              <div className='h-3 bg-slate-600 rounded col-span-1'></div>
            )}
          </div>
          <div className='grid items-center grid-cols-3 gap-4'>
            <p className="text-sky-200 col-span-2 text-xs md:text-base">Seguidores:</p>
            {user?.followers ? (
              <div className="text-xs md:text-base">{user?.followers}</div>
            ) : (
              <div className='h-3 bg-slate-600 rounded col-span-1'></div>
            )}
          </div>
          <div className='grid items-center grid-cols-3 gap-4'>
            <p className="text-sky-200 col-span-2 text-xs md:text-base">Seguindo:</p>
            {user?.following ? (
              <div className="text-xs md:text-base">{user?.following}</div>
            ) : (
              <div className='h-3 bg-slate-600 rounded col-span-1'></div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}