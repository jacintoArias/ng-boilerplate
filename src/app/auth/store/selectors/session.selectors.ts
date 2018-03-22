import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromSession from '../reducers/session.reducer';
import { Tokens } from '@app/auth/models';

export const getSessionState = createSelector(
  fromFeature.getAuthState,
  (state: fromFeature.AuthState) => state.session
);

export const getSessionTokens = createSelector(
  getSessionState,
  fromSession.getTokens
);

export const getSessionAccessToken = createSelector(
  getSessionTokens,
  (tokens: Tokens) => (tokens ? tokens.accessToken : '')
);

export const getSessionIdToken = createSelector(
  getSessionTokens,
  (tokens: Tokens) => (tokens ? tokens.idToken : '')
);
