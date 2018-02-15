import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

import * as fromAuth from '../store';
import { Tokens } from '../models';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<fromAuth.State>,
    private jwt: JwtHelperService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select(fromAuth.getTokens).pipe(
      map(
        (tokens: Tokens) => tokens && !this.jwt.isTokenExpired(tokens.idToken)
      ),
      tap(authed => {
        if (!authed) {
          this.store.dispatch(new fromAuth.Logout());
        }
      })
    );
  }
}
