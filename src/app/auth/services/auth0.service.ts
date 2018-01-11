import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/observable/bindNodeCallback';

import * as auth0 from 'auth0-js';

import { User } from '@app/core/';
import { Tokens } from '../models/tokens';

import { environment } from '@env/environment';

@Injectable()
export class Auth0Service {

  constructor(
    private router: Router,
  ) {}

  auth0 = new auth0.WebAuth({
    clientID: environment.auth0.clientID,
    domain: environment.auth0.domain,
    responseType: 'token id_token',
    audience: environment.auth0.audience,
    redirectUri: environment.auth0.redirectUri,
    scope: 'openid profile email'
  });

  private static payload2profile(payload): User {

    // Add custom claims and getters
    const {
      email,
      email_verified,
      name,
      nickname,
      picture,
    } = payload;

    return {
      email,
      email_verified,
      name,
      nickname,
      picture,
    };
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): Observable<{ tokens: Tokens, profile: User }> {
    return Observable.bindNodeCallback((
      callback: (error: Error, authResult: {idToken, accessToken, idTokenPayload}) => void) =>
        this.auth0.parseHash(callback)
    )().pipe(
        map(authResult => {
            const { idToken, accessToken, idTokenPayload } = authResult;
            return { tokens: { idToken, accessToken }, profile: Auth0Service.payload2profile(idTokenPayload) };
        }),
      );
  }

}
