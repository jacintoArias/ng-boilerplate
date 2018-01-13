import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/observable/bindNodeCallback';

import * as auth0 from 'auth0-js';

import { User } from '../models';
import { Tokens } from '../models';

import { environment } from '@env/environment';
import { Store } from '@ngrx/store';
import * as fromAuth from '../store';
@Injectable()
export class Auth0Service {

  constructor(
    private http: HttpClient,
    private store: Store<fromAuth.State>,
  ) {
  }

  readonly auth0Authorizer= new auth0.WebAuth({
    clientID: environment.auth0.clientID,
    domain: environment.auth0.domain,
    responseType: 'token id_token',
    audience: environment.auth0.audience,
    redirectUri: environment.auth0.redirectUri,
    scope: 'openid profile email'
  });

  private static payload2profile(payload): User {
    const props = [
      'sub',
      'email',
      'email_verified',
      'name',
      'nickname',
      'picture',
      'https://myapp.example.com/github_user'
    ];
    const rename = {
      sub: 'id',
      'https://myapp.example.com/github_user': 'github_user',
    };
    return Object.assign({}, ...props.map(k => ({[rename[k] || k]: payload[k]})));
  }

  public login(): void {
    this.auth0Authorizer.authorize();
  }

  public handleAuthentication(): Observable<{ tokens: Tokens, profile: User }> {
    return Observable.bindNodeCallback((
      callback: (err: Error, res: { idToken, accessToken, idTokenPayload }) => void) =>
        this.auth0Authorizer.parseHash(callback)
    )().pipe(
        map( ({ idToken, accessToken, idTokenPayload }) =>
          ({ tokens: { idToken, accessToken }, profile: Auth0Service.payload2profile(idTokenPayload) })
        ),
      );
    }


  }
}
