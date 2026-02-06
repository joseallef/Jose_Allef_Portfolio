import { IRepoGit, IUserGit, IUserGitHub } from '@services/types';

export const repositoryGitHub = async ({ user }: IUserGitHub) => {
  // eslint-disable-next-line no-useless-catch
  try {
    // Agora chama nossa API interna protegida em vez do GitHub diretamente
    const response = await fetch(`/api/github?username=${user}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Failed to fetch data: ${response.status}`);
    }

    const data = await response.json();

    return {
      gitUser: data.gitUser as IUserGit,
      gitRepositories: data.gitRepositories as IRepoGit[]
    };
  } catch (error) {
    throw error;
  }
};
