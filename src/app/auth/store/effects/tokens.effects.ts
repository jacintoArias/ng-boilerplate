import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Effect, Actions } from '@ngrx/effects';
import { tap, map, switchMap, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Auth0Service } from 'app/auth/services/auth0.service';
import * as tokensActions from '../actions/tokens.actions';
import { ProfileLoad, ProfileRemove } from 'app/core/store/actions/user.actions';

@Injectable()
export class TokensEffects {

  constructor(
    private actions$: Actions,
    private auth0Service: Auth0Service,
    private router: Router
  ) {}

  @Effect({ dispatch: false })
  login$ = this.actions$
    .ofType(tokensActions.TokensActionTypes.Login)
    .pipe(
      tap(() => this.auth0Service.login())
    );

  @Effect()
  loginHandle$ = this.actions$
    .ofType(tokensActions.TokensActionTypes.LoginHandle)
    .pipe(
      switchMap((action: tokensActions.LoginHandle) => this.auth0Service.handleAuthentication()),
      mergeMap((res) => [
        new tokensActions.LoginSuccess(res.tokens),
        new ProfileLoad(res.profile),
      ]),
      catchError( (err) => of(new tokensActions.Logout())),
    );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$
    .ofType(tokensActions.TokensActionTypes.LoginSucess)
    .pipe(
      tap(() => this.router.navigate(['/']))
    );

  @Effect({ dispatch: false })
  logout$ = this.actions$
    .ofType(tokensActions.TokensActionTypes.Logout)
    .pipe(
      map(() => new ProfileRemove()),
      tap(() => this.auth0Service.login())
    );
}
