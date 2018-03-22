import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromUser from '../reducers/user.reducer';

export const getUserState = createSelector(
  fromFeature.getAuthState,
  (state: fromFeature.AuthState) => state.user
);

export const getUserProfile = createSelector(
  getUserState,
  fromUser.getUserProfile
);

export const getUserLoaded = createSelector(
  getUserState,
  fromUser.getUserLoaded
);

export const getUserLoading = createSelector(
  getUserState,
  fromUser.getUserLoading
);
