import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromUser from '../reducers/user.reducer';

export const getAuthUserState = createSelector(
  fromFeature.getAuthState,
  (state: fromFeature.AuthState) => state.user
);

export const getAuthUserProfile = createSelector(
  getAuthUserState,
  fromUser.getUserProfile
);

export const getAuthUserLoaded = createSelector(
  getAuthUserState,
  fromUser.getUserLoaded
);

export const getAuthUserLoading = createSelector(
  getAuthUserState,
  fromUser.getUserLoading
);
