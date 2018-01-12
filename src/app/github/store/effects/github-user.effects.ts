import { Injectable } from '@angular/core';

import { Action, Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { map, switchMap, catchError, take, withLatestFrom, filter } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as fromActions from '../actions';
import { GithubApiService } from '../../services';
import { GithubUser, GithubUserStatus } from '../../models';
import * as fromGithub from '../reducers/';

@Injectable()
export class GithubUserEffects {

  constructor(
    private actions$: Actions,
    private githubApi: GithubApiService,
    private store: Store<fromGithub.GithubState>,
  ) {}

  @Effect()
  userSelect$: Observable<Action> = this.actions$
    .ofType(fromActions.GithubUserActionTypes.UserSelect)
    .pipe(
      map(() => new fromActions.UserLoad())
    );

  @Effect()
  userLoad$: Observable<Action> = this.actions$
    .ofType(fromActions.GithubUserActionTypes.UserLoad)
    .pipe(
      withLatestFrom(this.store.select(fromGithub.selectGithubUserStatus)),
      map(([action, status]) => status),
      filter(status => status.user !== ''),
      switchMap((status: GithubUserStatus) => {
        return this.githubApi
          .getUser(status.user)
          .pipe(
            take(1),
            map((user: GithubUser) => new fromActions.UserLoadSuccess(user)),
            catchError(err => of(new fromActions.UserLoadError(err))),
          );
      }),
    );
}
