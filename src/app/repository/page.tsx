'use client'

import { WrapperMain } from '@components/commons/Main';
import { GitProfile } from '@components/skeletons/GitProfile';
import { GitRepository } from '@components/skeletons/GitRepository';
import { ThemeApp } from '@components/wrappers/context';
import { service } from '@services/index';
import { IRepoGit, IUserGit } from '@services/types';
import { useToast } from 'hooks/Toast';
import { ChangeEvent, useCallback, useContext, useEffect, useState } from 'react';
import { handleErrors } from './../../hooks/Toast/handleErros';
interface IUser {
  nameRepo: string;
}

export default function RepositoryGit() {
  const { showToast } = useToast();
  const { themeApp } = useContext(ThemeApp);

  const [repo, setRepo] = useState<IRepoGit[]>([]);
  const [user, setUser] = useState<IUserGit>();
  const [loading, setLoading] = useState<boolean>(true);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [nameRepository, setNameRepository] = useState<IUser>({
    nameRepo: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNameRepository((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const readEndFindRepoGit = useCallback(async ({ nameRepo }: IUser) => {
    setLoading(true);
    try {
      const response = await service.repositoryGitHub({ user: nameRepo });
      const { gitRepositories, gitUser } = response;
      setRepo(gitRepositories);
      setUser(gitUser);
    } catch (err) {
      setRepo([]);
      setUser({} as IUserGit)
      showToast(handleErrors(err));
    }
    setLoading(false);
  }, [showToast]);

  const handleFindRepoGit = useCallback(async () => {
    if (!nameRepository.nameRepo) {
      setIsValid(true);
      return;
    }
    setIsValid(false);
    await readEndFindRepoGit({ nameRepo: nameRepository.nameRepo });
  }, [nameRepository, readEndFindRepoGit]);

  useEffect(() => {
    (async () => {
      await readEndFindRepoGit({ nameRepo: 'joseallef' });
    })();
  }, [readEndFindRepoGit]);

  return (
    <>
      <WrapperMain>
        <div className="flex justify-center items-center mt-9 flex-wrap w-full">
          <div className="flex justify-center items-center w-full flex-col">
            <GitProfile user={user} loading={loading} />
          </div>

          <div className="block w-full my-4">
            <div className="flex justify-center items-center flex-wrap">
              <input
                type="text"
                name="nameRepo"
                placeholder="Usuário do repositório"
                className={`p-2 w-60 h-11 rounded-s-sm border ${isValid ? "border-red-600" : "border-0"} ${themeApp === "dark" ? "bg-slate-700 text-cyan-600" : "bg-slate-500 text-cyan-400"}`}
                value={nameRepository.nameRepo}
                onChange={handleChange}
              />

              <button
                type="submit"
                className={`rounded ${themeApp === "dark" ? "bg-slate-900" : "bg-[#2c4efa3f]"} w-36 h-11`}
                onClick={handleFindRepoGit}
              >
                Pesquisar
              </button>
            </div>
          </div>

          <div className="border-b-2 border-cyan-300 border-spacing-1 w-full"></div>

          <div className="text-center w-full my-3">
            <h1 className='text-sky-100 font-bold text-base md:text-2xl'>Repositórios</h1>
          </div>

          <GitRepository repository={repo} loading={loading} />

        </div>
      </WrapperMain>
    </>
  );
}
