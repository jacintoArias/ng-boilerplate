import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { tap, map, switchMap } from 'rxjs/operators';
import { Auth0Service } from '../../services/auth0.service';
import {
  AuthActionTypes,
  LoginHandle,
  LoginSuccess,
  Logout,
} from '../actions/auth.actions';
import { Profile } from '../../models/auth';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private auth0Service: Auth0Service,
    private router: Router
  ) {}

  @Effect({ dispatch: false })
  login$ = this.actions$
    .ofType(AuthActionTypes.Login)
    .pipe(
      tap(() => this.auth0Service.login())
    )

  @Effect()
  loginHandle$ = this.actions$
    .ofType(AuthActionTypes.LoginHandle)
    .pipe(
      switchMap((action: LoginHandle) =>
        this.auth0Service.handleAuthentication()
          .then( (res) => new LoginSuccess(res))
          .catch( (err) => new Logout())
        )
    )

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$
    .ofType(AuthActionTypes.LoginSucess)
    .pipe(
      tap(() => this.router.navigate(['/']))
    )

  @Effect({ dispatch: false })
  logout$ = this.actions$
    .ofType(AuthActionTypes.Logout)
    .pipe(
      tap(() => this.auth0Service.login())
    )
}
