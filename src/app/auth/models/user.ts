export interface User {
  'email': string;
  'email_verified': boolean;
  'name': string;
  'nickname': string;
  'picture': string;
}

export function generateMockOpenId(): User {
  return {
    email: 'mock@example.com',
    email_verified: false,
    name: 'mock',
    nickname: 'mock',
    picture: 'http://www.gravatar.com/avatar',
  };
}
