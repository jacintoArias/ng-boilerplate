import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from 'app/core/store/reducers/index';
import * as fromAuth from './session.reducer';
import * as fromUser from './user.reducer';

export interface AuthState {
  session: fromAuth.SessionState;
  user: fromUser.State;
}

export interface State extends fromRoot.State {
  auth: AuthState;
}

export const reducers = {
  session: fromAuth.reducer,
  user: fromUser.reducer,
};

export const getAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthUserState = createSelector(
  getAuthState,
  (state: AuthState) => state.user
);

export const getUserProfile = createSelector(
  selectAuthUserState,
  fromUser.getUserProfile
);

export const getUserLoading = createSelector(
  selectAuthUserState,
  fromUser.getUserLoading
);

export const getUserLoaded = createSelector(
  selectAuthUserState,
  fromUser.getUserLoaded
);
