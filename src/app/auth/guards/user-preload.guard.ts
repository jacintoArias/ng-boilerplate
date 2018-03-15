import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as fromAuth from '@app/auth/store';

@Injectable()
export class UserPreloadGuard implements CanActivate {
  constructor(private store: Store<fromAuth.State>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.pipe(
      select(fromAuth.getAuthUserLoaded),
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromAuth.LoadUser());
        }
      }),
      take(1)
    );
  }
}
