import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromSession from '../reducers/session.reducer';
import { Tokens } from '@app/auth/models';

export const getAuthSessionState = createSelector(
  fromFeature.getAuthState,
  (state: fromFeature.AuthState) => state.session
);

export const getAuthSessionTokens = createSelector(
  getAuthSessionState,
  fromSession.getTokens
);

export const getAuthSessionAccessToken = createSelector(
  getAuthSessionTokens,
  (tokens: Tokens) => tokens.accessToken
);

export const getAuthSessionIdToken = createSelector(
  getAuthSessionTokens,
  (tokens: Tokens) => tokens.idToken
);
