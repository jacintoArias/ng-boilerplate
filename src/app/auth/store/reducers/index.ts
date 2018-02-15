import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from 'app/core/store/reducers/index';
import * as fromAuth from './tokens.reducer';
import * as fromUser from './user.reducer';

export interface AuthState {
  tokens: fromAuth.State;
  user: fromUser.State;
}

export interface State extends fromRoot.State {
  auth: AuthState;
}

export const reducers = {
  tokens: fromAuth.reducer,
  user: fromUser.reducer,
};

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthTokensState = createSelector(
  selectAuthState,
  (state: AuthState) => state.tokens
);

export const getTokens = createSelector(
  selectAuthTokensState,
  fromAuth.getTokens
);

export const selectAuthUserState = createSelector(
  selectAuthState,
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
