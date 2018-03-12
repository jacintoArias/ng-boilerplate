import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromGithubService from '../reducers/github-service.reducer';

export const getGithubService = createSelector(
  fromFeature.getGithubState,
  (state: fromFeature.GithubState) => state.service
);

export const getGithubServiceUsername = createSelector(
  getGithubService,
  fromGithubService.getUsername
);

export const getGithubServiceUsernameValid = createSelector(
  getGithubService,
  fromGithubService.getUsernameValid
);

export const getGithubServiceUsernameChecked = createSelector(
  getGithubService,
  fromGithubService.getUsernameChecked
);
