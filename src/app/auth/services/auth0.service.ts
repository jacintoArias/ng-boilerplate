import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/observable/bindNodeCallback';

import * as auth0 from 'auth0-js';

import { User } from '../models';
import { Tokens } from '../models';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Auth0Service {
  constructor(private http: HttpClient) {}

  readonly auth0Authorizer = new auth0.WebAuth({
    clientID: environment.auth0.clientID,
    domain: environment.auth0.domain,
    responseType: 'token id_token',
    audience: environment.auth0.audience,
    redirectUri: environment.auth0.redirectUri,
    scope: 'openid profile email',
  });

  private static payload2user(payload): User {
    const props = [
      'sub',
      'email',
      'email_verified',
      'name',
      'nickname',
      'picture',
    ];
    const rename = {
      sub: 'id',
    };
    return Object.assign(
      {},
      ...props.map(k => ({ [rename[k] || k]: payload[k] || null }))
    );
  }

  public login(): void {
    this.auth0Authorizer.authorize();
  }

  public handleAuthentication(): Observable<{ tokens: Tokens; profile: User }> {
    return Observable.bindNodeCallback(cb =>
      this.auth0Authorizer.parseHash(cb)
    )().pipe(
      map(({ idToken, accessToken, idTokenPayload }) => ({
        tokens: { idToken, accessToken },
        profile: Auth0Service.payload2user(idTokenPayload),
      }))
    );
  }

  public getUser(): Observable<User> {
    return this.http
      .get(`https://${environment.auth0.domain}/userinfo`)
      .pipe(map(res => Auth0Service.payload2user(res)));
  }
}
