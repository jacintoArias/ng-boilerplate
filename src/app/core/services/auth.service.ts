import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { catchError, map, take, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { JwtHelperService } from '@auth0/angular-jwt';

import * as fromRoot from '../store/';
import * as Auth from '../store/actions/auth.actions';

import { Auth0Service } from './auth0.service';

@Injectable()
export class AuthService {

  constructor(
    private jwt: JwtHelperService,
    private auth0Service: Auth0Service,
    private store: Store<fromRoot.State>
  ) {
  }

  public login() {
    this.store.dispatch(new Auth.Login());
  }

  public logout() {
    this.store.dispatch(new Auth.Logout());
  }

  public handleAuthentication() {
    this.store.dispatch(new Auth.LoginHandle());
  }

  public isAuthenticated() {
    return this.store
      .select(fromRoot.getTokens)
      .pipe(
        map(tokens => !this.jwt.isTokenExpired(tokens.idToken)),
        catchError(err => {
          this.store.dispatch(new Auth.Login());
          return of(false);
        }),
        take(1),
      );
  }
}
