export interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface GithubUserStatus {
  user: string;
  userValid: boolean;
  userLoading: boolean;
}

export function getGithubUserStatusInit(): GithubUserStatus {
  return {
    user: '',
    userValid: true,
    userLoading: false,
  };
}

export function genGithubUserMock(): GithubUser {
  return {
    login: 'mock',
    id: 1234,
    avatar_url: 'http://github.com',
    gravatar_id: '',
    url: 'http://github.com',
    html_url: 'http://github.com',
    followers_url: 'http://github.com',
    following_url: 'http://github.com',
    gists_url: 'http://github.com',
    starred_url: 'http://github.com',
    subscriptions_url: 'http://github.com',
    organizations_url: 'http://github.com',
    repos_url: 'http://github.com',
    events_url: 'http://github.com',
    received_events_url: 'http://github.com',
    type: 'user',
    site_admin: false,
    name: 'Mock McMock',
    company: 'Mockers SL',
    blog: '',
    location: '',
    email: 'mock@example.com',
    hireable: false,
    bio: '',
    public_repos: 3,
    public_gists: 4,
    followers: 5,
    following: 8,
    created_at: '',
    updated_at: '',
  };
}
