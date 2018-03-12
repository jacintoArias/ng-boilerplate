import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromLayout from '../reducers/layout.reducer';

export const getAuthUserState = createSelector(
  fromFeature.getDashboardState,
  (state: fromFeature.DashboardState) => state.layout
);

export const getDashboardLayoutState = createSelector(
  fromFeature.getDashboardState,
  (state: fromFeature.DashboardState) => state.layout
);

export const getDashboardLayoutSidenav = createSelector(
  getDashboardLayoutState,
  fromLayout.getSidenav
);
