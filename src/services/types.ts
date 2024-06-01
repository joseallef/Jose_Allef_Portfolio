export interface IRepositories {
  name: string
  owner: {
    avatar_url: string
  }
  html_url: string
  message: string
  forks: string
  watchers: string
  description: string
  fork: boolean
}

export interface IResponseRepository {
  name: string
  avatar: string
  url: string
  forks: string
  watchers: string
  description: string
}

export interface IUserGitHub {
  user?: string
}
export interface IGitException {
  message: string
  documentation_url: string
}

export interface IRepoGit {
  name: string
  html_url: string
  forks: boolean
  watchers: string
  description: string
  stargazers_count: number
  owner: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
  }
}

export interface IUserGit {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: false
  name: string
  company: string
  blog: string
  location: string
  email: string | null
  hireable: string | null
  bio: string
  twitter_username: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: Date
  updated_at: Date
}
