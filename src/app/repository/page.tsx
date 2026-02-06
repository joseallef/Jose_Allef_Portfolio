'use client'

import { WrapperMain } from '@components/commons/Main';
import { GitProfile } from '@components/skeletons/GitProfile';
import { GitRepository } from '@components/skeletons/GitRepository';
import { service } from '@services/index';
import { IRepoGit, IUserGit } from '@services/types';
import { useToast } from 'hooks/Toast';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { handleErrors } from './../../hooks/Toast/handleErros';
interface IUser {
  nameRepo: string;
}

export default function RepositoryGit() {
  const { showToast } = useToast();

  const [repo, setRepo] = useState<IRepoGit[]>([]);
  const [user, setUser] = useState<IUserGit>();
  const [loading, setLoading] = useState<boolean>(true);
  const [nameRepository, setNameRepository] = useState<IUser>({
    nameRepo: '',
  });
  const [searchError, setSearchError] = useState<string>('');
  const [filterTerm, setFilterTerm] = useState<string>('');
  const [filterError, setFilterError] = useState<string>('');
  const initialLoadRef = useRef(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNameRepository((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    validateUsername(value);
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
    const name = nameRepository.nameRepo.trim();

    if (name.length === 0) {
      setSearchError('Informe um usuário do GitHub');
      return;
    }

    if (name.length < 3) {
      setSearchError('Mínimo de 3 caracteres');
      return;
    }

    const usernameRegex = /^[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d])){2,38}$/;
    if (!usernameRegex.test(name)) {
      setSearchError('Use letras, números e hífen (sem hífen no início/fim)');
      return;
    }

    setSearchError('');
    await readEndFindRepoGit({ nameRepo: name });
  }, [nameRepository, readEndFindRepoGit]);

  const validateUsername = (value: string) => {
    const v = value.trim();
    if (v.length === 0) {
      setSearchError('Informe um usuário do GitHub');
      return;
    }
    if (v.length < 3) {
      setSearchError('Mínimo de 3 caracteres');
      return;
    }
    const usernameRegex = /^[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d])){2,38}$/;
    if (!usernameRegex.test(v)) {
      setSearchError('Use letras, números e hífen (sem hífen no início/fim)');
      return;
    }
    setSearchError('');
  };

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFilterTerm(val);
    if (val && val.trim().length < 2) {
      setFilterError('Digite pelo menos 2 caracteres');
    } else {
      setFilterError('');
    }
  };

  const filteredRepo = (filterTerm ? repo.filter(r => r.name?.toLowerCase().includes(filterTerm.toLowerCase())) : repo);

  useEffect(() => {
    if (!initialLoadRef.current) {
      initialLoadRef.current = true;
      (async () => {
        await readEndFindRepoGit({ nameRepo: 'joseallef' });
      })();
    }
  }, [readEndFindRepoGit]);

  return (
    <WrapperMain>
      <div className="container max-w-6xl py-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Explorar Repositórios</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Pesquise por usuários do GitHub e explore seus projetos e estatísticas.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {/* Profile Section */}
          <div className="w-full flex justify-center">
            <GitProfile user={user} loading={loading} />
          </div>

          {/* Search Section */}
          <div className="w-full max-w-md mx-auto">
            <div className="space-y-2">
              <div className="flex w-full items-center space-x-2">
                <div className="relative w-full">
                  <input
                    type="text"
                    name="nameRepo"
                    placeholder="Usuário do GitHub..."
                    className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${searchError ? 'border-destructive focus-visible:ring-destructive' : 'border-input focus-visible:ring-ring'}`}
                    value={nameRepository.nameRepo}
                    onChange={handleChange}
                    onKeyDown={(e) => e.key === 'Enter' && handleFindRepoGit()}
                    aria-invalid={!!searchError}
                    aria-describedby="search-error"
                  />
                  {nameRepository.nameRepo && (
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      onClick={() => {
                        setNameRepository({ nameRepo: '' });
                        setSearchError('');
                      }}
                      aria-label="Limpar busca"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                  )}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  onClick={handleFindRepoGit}
                  disabled={loading}
                >
                  {loading ? (
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4"/></svg>
                  ) : 'Pesquisar'}
                </button>
              </div>
              <p id="search-error" className={`text-xs ${searchError ? 'text-destructive' : 'text-muted-foreground'}`}>
                {searchError ? searchError : 'Pressione Enter ou clique em Pesquisar'}
              </p>
            </div>
          </div>

          <div className="border-b border-border w-full"></div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold tracking-tight">Repositórios Públicos</h2>
              {filteredRepo.length > 0 && (
                <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
                  {filteredRepo.length} encontrados
                </span>
              )}
            </div>
            <div className="w-full max-w-md">
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Filtrar por nome do repositório..."
                  className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${filterError ? 'border-destructive focus-visible:ring-destructive' : 'border-input focus-visible:ring-ring'}`}
                  value={filterTerm}
                  onChange={handleFilterChange}
                  aria-invalid={!!filterError}
                  aria-describedby="filter-error"
                />
                <p id="filter-error" className={`text-xs ${filterError ? 'text-destructive' : 'text-muted-foreground'}`}>
                  {filterError ? filterError : (filterTerm ? `Filtrando por "${filterTerm}"` : 'Dica: digite para filtrar pelos nomes')}
                </p>
              </div>
            </div>

            {(!loading && filteredRepo.length === 0) && (
              <div className="p-4 rounded-md border border-border bg-card text-card-foreground">
                <p className="text-sm text-muted-foreground">Nenhum repositório encontrado para os critérios informados.</p>
              </div>
            )}
            <GitRepository repository={filteredRepo} loading={loading} />
          </div>
        </div>
      </div>
    </WrapperMain>
  );
}
