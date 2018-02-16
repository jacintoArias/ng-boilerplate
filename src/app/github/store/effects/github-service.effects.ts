import { Injectable } from '@angular/core';

import { Action, Store } from '@ngrx/store';
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
export class GithubServiceEffects {
  constructor(
    private actions$: Actions,
    private githubApiService: GithubApiService,
    private store: Store<fromFeature.GithubState>
  ) {}

  @Effect()
  userSelect$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.GithubServiceActionTypes.SetUsername),
    map(() => new fromActions.LoadData())
  );
}
