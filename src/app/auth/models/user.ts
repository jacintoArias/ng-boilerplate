export interface User {
  sub: string;
  email: string;
  email_verified: boolean;
  name?: string;
  nickname?: string;
  picture?: string;
  github_user?: string;
}

export function generateMockUser(): User {
  return {
    sub: 'auth0|abc1234',
    email: 'mock@example.com',
    email_verified: false,
    name: 'mock',
    nickname: 'mock',
    picture: 'http://www.gravatar.com/avatar',
    github_user: '',
  };
}
