import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '@app/core/store';
import * as fromLayout from './reducers/layout.reducer';

export interface DashboardState {
  layout: fromLayout.State;
}

export interface State extends fromRoot.State {
  dashboard: DashboardState;
}

export const reducers = {
  layout: fromLayout.reducer,
};

export const effects = [];


export const selectDashboardState = createFeatureSelector<DashboardState>('dashboard');

export const selectDashboardLayoutState = createSelector(
  selectDashboardState,
  (state: DashboardState) => state.layout
);

export const getSidenav = createSelector(
  selectDashboardLayoutState,
  fromLayout.getSidenav
);