export interface Tokens {
  idToken: string;
  accessToken: string;
}

export function genTokensMock(): Tokens {
  return {
    idToken: 'idTokenStub',
    accessToken: 'accessTokenStub',
  };
}
