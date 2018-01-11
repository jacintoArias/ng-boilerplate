import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Effect, Actions } from '@ngrx/effects';
import { tap, map, switchMap, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Auth0Service } from 'app/auth/services/auth0.service';
import * as Auth from 'app/auth/store/actions/auth.actions';
import { ProfileLoad, ProfileRemove } from 'app/core/store/actions/user.actions';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private auth0Service: Auth0Service,
    private router: Router
  ) {}

  @Effect({ dispatch: false })
  login$ = this.actions$
    .ofType(Auth.AuthActionTypes.Login)
    .pipe(
      tap(() => this.auth0Service.login())
    );

  @Effect()
  loginHandle$ = this.actions$
    .ofType(Auth.AuthActionTypes.LoginHandle)
    .pipe(
      switchMap((action: Auth.LoginHandle) => this.auth0Service.handleAuthentication()),
      mergeMap((res) => [
        new Auth.LoginSuccess(res.tokens),
        new ProfileLoad(res.profile),
      ]),
      catchError( (err) => of(new Auth.Logout())),
    );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$
    .ofType(Auth.AuthActionTypes.LoginSucess)
    .pipe(
      tap(() => this.router.navigate(['/']))
    );

  @Effect({ dispatch: false })
  logout$ = this.actions$
    .ofType(Auth.AuthActionTypes.Logout)
    .pipe(
      map(() => new ProfileRemove()),
      tap(() => this.auth0Service.login())
    );
}
