import { Injectable } from '@angular/core';

import { Action, Store, select } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import {
  map,
  switchMap,
  catchError,
  take,
  withLatestFrom,
  filter,
} from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

// Must import separatelly to avoid circular deps
import * as fromFeature from '../reducers/';
import * as fromActions from '../actions';
import * as fromSelectors from '../selectors';

import { GithubApiService } from '../../services';
import { GithubProfile } from '../../models';

@Injectable()
export class GithubDataEffects {
  constructor(
    private actions$: Actions,
    private githubApiService: GithubApiService,
    private store: Store<fromFeature.GithubState>
  ) {}

  @Effect()
  userLoad$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.GithubDataActionTypes.LoadData),
    withLatestFrom(this.store.pipe(select(fromSelectors.getGithubService))),
    map(([action, githubUserService]) => githubUserService),
    filter(
      githubUserService =>
        githubUserService.usernameValid || !githubUserService.usernameChecked
    ),
    switchMap(status => {
      return this.githubApiService
        .getUser(status.username)
        .pipe(
          take(1),
          map((user: GithubProfile) => new fromActions.LoadDataSuccess(user)),
          catchError(err => of(new fromActions.LoadDataError(err)))
        );
    })
  );

  @Effect()
  loadDataSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.GithubDataActionTypes.LoadDataSuccess),
    map(() => new fromActions.ValidateUsername(true))
  );

  @Effect()
  loadDataError$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.GithubDataActionTypes.LoadDataError),
    map(() => new fromActions.ValidateUsername(false))
  );
}
