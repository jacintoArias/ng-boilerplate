import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/observable/bindNodeCallback';

import * as auth0 from 'auth0-js';

import { Openid } from '@app/core/';
import { Tokens } from '../models/tokens';

import { environment } from '@env/environment';

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

  public handleAuthentication(): Observable<{ tokens: Tokens, profile: Openid }> {
    return Observable.bindNodeCallback((
      callback: (error: Error, authResult: {idToken, accessToken, idTokenPayload}) => void) =>
        this.auth0.parseHash(callback)
    )().pipe(
        map(authResult => {
            const { idToken, accessToken, idTokenPayload } = authResult;
            return { tokens: { idToken, accessToken }, profile: this.payload2profile(idTokenPayload) };
        }),
      );
    //   this.auth0.parseHash((err, authResult) => {
    //     if (err || !((authResult && authResult.accessToken && authResult.idToken)) ) {
    //       reject(err);
    //     } else {
    //       const { idToken, accessToken, idTokenPayload } = authResult;
    //       resolve({ tokens: { idToken, accessToken }, profile: this.payload2profile(idTokenPayload) });
    //     }
    //   });
    // });
  }

  private payload2profile(payload): Openid {
    const { name, nick } = payload;
    return { name, nick };
  }
}
