import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '@app/core/store';
import * as fromGithub from '../../github/store/github.reducer';

import { GithubEffects } from './github.effects';

export interface GithubState {
  github: fromGithub.State;
}

export interface State extends fromRoot.State {
  github: GithubState;
}

export const reducers = {
  github: fromGithub.reducer,
};

export const effects = [GithubEffects];


// Dashboard root
export const selectGithubState = createFeatureSelector<GithubState>('github');

// Github
export const selectGithubGithubState = createSelector(
  selectGithubState,
  (state: GithubState) => state.github
);

export const getGithubUser = createSelector(
  selectGithubGithubState,
  fromGithub.getUser
);

export const getGithubStatus = createSelector(
  selectGithubGithubState,
  fromGithub.getStatus
);
