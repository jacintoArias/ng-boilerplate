import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Effect, Actions } from '@ngrx/effects';
import { tap, map, switchMap, catchError, mergeMap, take, withLatestFrom, filter } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Action, Store } from '@ngrx/store';

import { GithubActionTypes, UserLoad, UserLoadError, UserLoadSuccess } from './github.actions';
import { GithubApiService } from '../services/github-api.service';
import { GithubUser, GithubUserStatus } from '../models/github-user.model';
import * as fromGithub from './';

@Injectable()
export class GithubEffects {

  constructor(
    private actions$: Actions,
    private router: Router,
    private githubApi: GithubApiService,
    private store: Store<fromGithub.GithubState>,
  ) {}

  @Effect()
  userSelect$: Observable<Action> = this.actions$
    .ofType(GithubActionTypes.UserSelect)
    .pipe(
      map(() => new UserLoad())
    );

  @Effect()
  userLoad$: Observable<Action> = this.actions$
    .ofType(GithubActionTypes.UserLoad)
    .pipe(
      withLatestFrom(this.store.select(fromGithub.selectGithubUserStatus)),
      map(([action, status]) => status),
      filter(status => status.user !== ''),
      switchMap((status: GithubUserStatus) => {
        return this.githubApi
          .getUser(status.user)
          .pipe(
            take(1),
            map((user: GithubUser) => new UserLoadSuccess(user)),
            catchError(err => of(new UserLoadError(err))),
          );
      }),
    );
}
