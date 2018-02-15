import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from 'app/core/store/reducers/index';
import * as fromGithubData from './github-data.reducer';
import * as fromGithubService from './github-service.reducer';

export interface GithubState {
  data: fromGithubData.GithubDataState;
  service: fromGithubService.GithubServiceState;
}

export interface State extends fromRoot.State {
  github: GithubState;
}

export const reducers = {
  data: fromGithubData.reducer,
  service: fromGithubService.reducer,
};

export const getGithubState = createFeatureSelector<GithubState>('github');
