import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromGithubdata from '../reducers/github-data.reducer';

export const getGithubData = createSelector(
  fromFeature.getGithubState,
  (state: fromFeature.GithubState) => state.data
);

export const getGithubDataProfile = createSelector(
  getGithubData,
  fromGithubdata.getProfile
);
