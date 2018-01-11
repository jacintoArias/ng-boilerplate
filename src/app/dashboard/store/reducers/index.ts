import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '@app/core/store/reducers/index';
import * as fromLayout from './layout.reducer';


export interface DashboardState {
  layout: fromLayout.State;
}

export interface State extends fromRoot.State {
  dashboard: DashboardState;
}

export const reducers = {
  layout: fromLayout.reducer,
};

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

