import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '@app/core/store';
import * as fromData from './reducers/data.reducer';
import * as fromStatus from './reducers/status.reducer';

export interface GithubState {
  data: fromData.State;
  status: fromStatus.State;
}

export interface State extends fromRoot.State {
  github: GithubState;
}

export const reducers = {
  data: fromData.reducer,
  status: fromStatus.reducer,
};

// Github root
export const selectGithubState = createFeatureSelector<GithubState>('github');

// Data
export const selectGithubData = createSelector(
  selectGithubState,
  (state: GithubState) => state.data
);

export const getGithubUser = createSelector(
  selectGithubData,
  fromData.getUser
);

// Status
export const selectGithubUserStatus = createSelector(
  selectGithubState,
  (state: GithubState) => state.status.user
);

