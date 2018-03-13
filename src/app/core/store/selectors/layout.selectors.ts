import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromLayout from '../reducers/layout.reducer';

export const getLayoutState = createFeatureSelector<fromLayout.LayoutState>(
  'layout'
);

export const getLayoutSidenav = createSelector(
  getLayoutState,
  fromLayout.getSidenav
);
