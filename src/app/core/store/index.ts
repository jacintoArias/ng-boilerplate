import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '@env/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { localStorageSync } from 'ngrx-store-localstorage';

import * as fromUser from './user.reducer';

export interface State {
  user: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
  user: fromUser.reducer,
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
  return localStorageSync({keys: ['user', 'auth'], rehydrate: true})(reducer);
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze, localStorageSyncReducer]
  : [localStorageSyncReducer];

export const effects = [];


export const selectUserState = createFeatureSelector<fromUser.State>('user');

export const getProfile = createSelector(
  selectUserState,
  fromUser.getProfile
);
