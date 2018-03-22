import { UserActions, UserActionTypes } from '../actions';
import { User } from '../../models';

export interface State {
  profile: User;
  loaded: boolean;
  loading: boolean;
}

const initialState: State = {
  profile: null,
  loaded: false,
  loading: false,
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {
    case UserActionTypes.UserLoad:
      return {
        ...state,
        loaded: false,
        loading: true,
      };

    case UserActionTypes.UserLoadSuccess:
      return {
        ...state,
        profile: action.payload,
        loaded: true,
        loading: false,
      };

    case UserActionTypes.UserLoadFail:
      return initialState;

    default:
      return state;
  }
}

export const getUserProfile = (state: State) => state.profile;
export const getUserLoaded = (state: State) => state.loaded;
export const getUserLoading = (state: State) => state.loading;
