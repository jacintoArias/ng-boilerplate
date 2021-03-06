import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { tap, map, switchMap, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Auth0Service } from 'app/auth/services/auth0.service';
import * as sessionActions from '../actions/session.actions';
import * as userActions from '../actions/user.actions';
import * as fromRoot from '@app/core/store';

@Injectable()
export class SessionEffects {
  constructor(
    private actions$: Actions,
    private auth0Service: Auth0Service,
    private router: Router
  ) {}

  @Effect({ dispatch: false })
  login$ = this.actions$.pipe(
    ofType(sessionActions.SessionActionTypes.Login),
    tap(() => this.auth0Service.login())
  );

  @Effect()
  loginHandle$ = this.actions$.pipe(
    ofType(sessionActions.SessionActionTypes.LoginHandle),
    switchMap((action: sessionActions.LoginHandle) =>
      this.auth0Service.handleAuthentication()
    ),
    mergeMap(res => [
      new sessionActions.LoginSuccess(res.tokens),
      new userActions.UserLoadSuccess(res.profile),
    ]),
    catchError(err => of(new sessionActions.Logout()))
  );

  @Effect()
  loginSuccess$ = this.actions$.pipe(
    ofType(sessionActions.SessionActionTypes.LoginSucess),
    map(() => new fromRoot.Go({ path: ['/'] }))
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType(sessionActions.SessionActionTypes.Logout),
    tap(() => this.auth0Service.login())
  );
}
