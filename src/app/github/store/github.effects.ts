import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Effect, Actions } from '@ngrx/effects';
import { tap, map, switchMap, catchError, mergeMap, take, withLatestFrom, filter } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Action, Store } from '@ngrx/store';

import { GithubActionTypes, LoadUser, LoadUserError, LoadUserSuccess } from './github.actions';
import { GithubApiService } from '../services/github-api.service';
import { GithubUser, GithubStatus } from '../models/github-user.model';
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
  selectUser$: Observable<Action> = this.actions$
    .ofType(GithubActionTypes.SelectUser)
    .pipe(
      map(() => new LoadUser())
    );

  @Effect()
  loadUser$: Observable<Action> = this.actions$
    .ofType(GithubActionTypes.LoadUser)
    .pipe(
      withLatestFrom(this.store.select(fromGithub.selectGithubStatus)),
      map(([action, status]) => status),
      filter(status => status.userSelected !== ''),
      switchMap((status: GithubStatus) => {
        return this.githubApi
          .getUser(status.userSelected)
          .pipe(
            take(1),
            map((user: GithubUser) => new LoadUserSuccess(user)),
            catchError(err => of(new LoadUserError(err))),
          );
      }),
    );
}
