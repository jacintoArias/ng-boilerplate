import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Effect, Actions } from '@ngrx/effects';
import { tap, map, switchMap, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Auth0Service } from 'app/auth/services/auth0.service';
import * as sessionActions from '../actions/session.actions';
import * as userActions from '../actions/user.actions';

@Injectable()
export class SessionEffects {
  constructor(
    private actions$: Actions,
    private auth0Service: Auth0Service,
    private router: Router
  ) {}

  @Effect({ dispatch: false })
  login$ = this.actions$
    .ofType(sessionActions.SessionActionTypes.Login)
    .pipe(tap(() => this.auth0Service.login()));

  @Effect()
  loginHandle$ = this.actions$
    .ofType(sessionActions.SessionActionTypes.LoginHandle)
    .pipe(
      switchMap((action: sessionActions.LoginHandle) =>
        this.auth0Service.handleAuthentication()
      ),
      mergeMap(res => [
        new sessionActions.LoginSuccess(res.tokens),
        new userActions.LoadUserSuccess(res.profile),
      ]),
      catchError(err => of(new sessionActions.Logout()))
    );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$
    .ofType(sessionActions.SessionActionTypes.LoginSucess)
    .pipe(tap(() => this.router.navigate(['/'])));

  @Effect({ dispatch: false })
  logout$ = this.actions$.ofType(sessionActions.SessionActionTypes.Logout).pipe(
    // map(() => new userActions.ProfileRemove()),
    tap(() => this.auth0Service.login())
  );
}
