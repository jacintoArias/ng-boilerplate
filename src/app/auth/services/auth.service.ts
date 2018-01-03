import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { catchError, map, take } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { JwtHelperService } from '@auth0/angular-jwt';

import * as fromAuth from '../store';
import * as Auth from '../store/auth.actions';

import { Auth0Service } from './auth0.service';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {

  constructor(
    private store: Store<fromAuth.State>,
    private jwt: JwtHelperService,
    private auth0Service: Auth0Service,
    private tokenService: TokenService,
  ) {
  }

  public isAuthenticated(): Observable<boolean> {
    return this.tokenService.getTokens()
      .pipe(
        map(tokens => !this.jwt.isTokenExpired(tokens.idToken)),
        catchError(err => {
          this.store.dispatch(new Auth.Login());
          return of(false);
        }),
        take(1),
      );
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

}
