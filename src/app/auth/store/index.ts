import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '@app/core/store';
import * as fromAuth from './reducers/auth.reducer';
import { AuthEffects } from './effects/auth.effects';

export interface AuthState {
  status: fromAuth.State;
}

export interface State extends fromRoot.State {
  auth: AuthState;
}

export const reducers = {
  status: fromAuth.reducer,
};

export const effects = [AuthEffects];


export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => state.status
);

export const getTokens = createSelector(
  selectAuthStatusState,
  fromAuth.getTokens
);
