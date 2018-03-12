import { GithubDataAction, GithubDataActionTypes } from '../actions';
import { GithubProfile } from '../../models';

export interface GithubDataState {
  profile: GithubProfile;
  loaded: boolean;
  loading: boolean;
}

const initialState: GithubDataState = {
  profile: null,
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: GithubDataAction
): GithubDataState {
  switch (action.type) {
    case GithubDataActionTypes.LoadData:
      return {
        ...state,
        profile: null,
        loading: true,
        loaded: false,
      };

    case GithubDataActionTypes.LoadDataSuccess:
      return {
        ...state,
        profile: action.payload,
        loaded: true,
        loading: false,
      };
  }
  return state;
}

export const getProfile = (state: GithubDataState) => state.profile;
export const getLoaded = (state: GithubDataState) => state.loaded;
export const getLoading = (state: GithubDataState) => state.loading;
