import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Effect, Actions } from '@ngrx/effects';
import { tap, map, switchMap, catchError, mergeMap, take} from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Action } from '@ngrx/store';

import { GithubActionTypes, LoadUser, LoadUserError, LoadUserSuccess } from './github.actions';
import { GithubApiService } from 'app/dashboard/services/github-api.service';
import { GithubUser } from 'app/dashboard/models/github-user.model';

@Injectable()
export class GithubEffects {

  constructor(
    private actions$: Actions,
    private router: Router,
    private githubApi: GithubApiService,
  ) {}

  @Effect()
  loadUser$: Observable<Action> = this.actions$
    .ofType(GithubActionTypes.LoadUser)
    .pipe(
      switchMap((action: LoadUser) => {
        return this.githubApi
          .getUser(action.payload)
          .pipe(
            take(1),
            map((user: GithubUser) => new LoadUserSuccess(user)),
            catchError(err => of(new LoadUserError(err))),
          );
      }),
    );
}
