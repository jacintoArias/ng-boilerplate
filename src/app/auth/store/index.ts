import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '@app/core/store';
import * as fromAuth from './reducers/auth.reducer';
import * as fromUser from './reducers/user.reducer';

export interface AuthState {
  status: fromAuth.State;
  user: fromUser.State;
}

export interface State extends fromRoot.State {
  auth: AuthState;
}

export const reducers = {
  status: fromAuth.reducer,
  user: fromUser.reducer
};


export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => state.status
);

export const getTokens = createSelector(
  selectAuthStatusState,
  fromAuth.getTokens
);

export const selectAuthUserState = createSelector(
  selectAuthState,
  (state: AuthState) => state.user
);

export const getProfile = createSelector(
  selectAuthUserState,
  fromUser.getProfile
);
