import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromAuth from './reducers/auth.reducer';
import { AuthEffects } from './effects/auth.effects';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface State {
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['auth'], rehydrate: true})(reducer);
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze, localStorageSyncReducer]
  : [localStorageSyncReducer];

export const effects = [AuthEffects];


export const selectAuthState = createFeatureSelector<fromAuth.State>('auth');

export const getTokens = createSelector(
  selectAuthState,
  fromAuth.getTokens
);

export const getProfile = createSelector(
  selectAuthState,
  fromAuth.getProfile
);
