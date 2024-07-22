import { IRepoGit, IUserGit, IUserGitHub } from '@services/types';

export const repositoryGitHub = async ({ user }: IUserGitHub) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const [userDataResponse, userRepositoriesResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${user}`, { cache: 'force-cache' }),
      fetch(`https://api.github.com/users/${user}/repos`, { cache: 'force-cache' })
    ]);

    if (!userDataResponse.ok) {
      throw new Error(`Failed to fetch user data: ${userDataResponse.status} ${userDataResponse.statusText}`);
    }

    if (!userRepositoriesResponse.ok) {
      throw new Error(`Failed to fetch user repositories: ${userRepositoriesResponse.status} ${userRepositoriesResponse.statusText}`);
    }
    const userData: IUserGit = await userDataResponse.json();
    const userRepositories: IRepoGit[] = await userRepositoriesResponse.json();

    return {
      gitUser: userData,
      gitRepositories: userRepositories
    };
  } catch (error) {
    throw error;
  }
};
