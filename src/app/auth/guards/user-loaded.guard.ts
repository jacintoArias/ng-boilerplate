import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as fromAuth from '@app/auth/store';

@Injectable()
export class UserLoadedGuard implements CanActivate {
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
    return this.store.select(fromAuth.getAuthUserLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromAuth.LoadUser());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
