import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '@app/core/store';
import * as fromLayout from './layout.reducer';
import * as fromGithub from './github.reducer';

import { GithubEffects } from './github.effects';

export interface DashboardState {
  layout: fromLayout.State;
  github: fromGithub.State;
}

export interface State extends fromRoot.State {
  dashboard: DashboardState;
}

export const reducers = {
  layout: fromLayout.reducer,
  github: fromGithub.reducer,
};

export const effects = [GithubEffects];


// Dashboard root
export const selectDashboardState = createFeatureSelector<DashboardState>('dashboard');

// Layout
export const selectDashboardLayoutState = createSelector(
  selectDashboardState,
  (state: DashboardState) => state.layout
);

export const getSidenav = createSelector(
  selectDashboardLayoutState,
  fromLayout.getSidenav
);

// Github
export const selectDashboardGithubState = createSelector(
  selectDashboardState,
  (state: DashboardState) => state.github
);

export const getGithubUser = createSelector(
  selectDashboardGithubState,
  fromGithub.getUser
);

export const getGithubStatus = createSelector(
  selectDashboardGithubState,
  fromGithub.getStatus
);
