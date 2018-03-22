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
    return this.checkLoaded().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  preload() {
    this.store.dispatch(new fromAuth.LoadUser());
  }

  checkLoaded(): Observable<boolean> {
    return this.store.pipe(
      select(fromAuth.getUserLoaded),
      // TODO: Load a single location
      tap(loaded => {
        if (!loaded) {
          this.preload();
        }
      }),
      // Wait for Locations to be loaded
      filter(loaded => loaded),
      take(1)
    );
  }
}
