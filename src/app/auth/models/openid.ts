export interface Openid {
  'email': string;
  'email_verified': boolean;
  'name': string;
  'nickname': string;
  'picture': string;
}

export function generateMockOpenId(): Openid {
  return {
    email: 'mock@example.com',
    email_verified: false,
    name: 'mock',
    nickname: 'mock',
    picture: 'http://www.gravatar.com/avatar',
  };
}
