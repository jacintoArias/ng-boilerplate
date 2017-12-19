
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';

import * as auth0 from 'auth0-js';

import { Profile, Tokens } from '../models/auth';

@Injectable()
export class Auth0Service {

  auth0 = new auth0.WebAuth({
    clientID: environment.auth0.clientID,
    domain: environment.auth0.domain,
    responseType: 'token id_token',
    audience: environment.auth0.audience,
    redirectUri: environment.auth0.redirectUri,
    scope: 'openid profile'
  });

  constructor(
    private router: Router,
  ) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): Promise<{ tokens: Tokens, profile: Profile }> {
    return new Promise( (resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err || !((authResult && authResult.accessToken && authResult.idToken)) ) {
          reject(err);
        } else {
          const { idToken, accessToken, idTokenPayload } = authResult;
          resolve({ tokens: { idToken, accessToken }, profile: this.payload2profile(idTokenPayload) });
        }
      });
    });
  }



  private payload2profile(payload): Profile {
    const { name, nick } = payload;
    return { name, nick };
  }
}
