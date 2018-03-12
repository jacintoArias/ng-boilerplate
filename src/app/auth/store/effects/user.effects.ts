import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Auth0Service } from 'app/auth/services/auth0.service';
import * as userActions from '../actions/user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private auth0Service: Auth0Service) {}

  @Effect()
  loadUser$ = this.actions$.pipe(
    ofType(userActions.UserActionTypes.LoadUser),
    switchMap(() =>
      this.auth0Service
        .getUser()
        .pipe(
          map(user => new userActions.LoadUserSuccess(user)),
          catchError((err: Error) => of(new userActions.LoadUserFail(err)))
        )
    )
  );
}
