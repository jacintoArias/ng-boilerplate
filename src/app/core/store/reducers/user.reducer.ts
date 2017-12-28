import { Openid } from '@app/core';
import { UserActions, UserActionTypes } from '../actions/user.actions';

export interface State {
  profile: Openid;
}

const initialState: State = {
  profile: null,
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {

    case UserActionTypes.LoadProfile:
      return {
        ...state,
        profile: action.payload,
      };

    case UserActionTypes.Logout:
      return initialState;

    default:
      return state;
  }
}

export const getProfile = (state: State) => state.profile;
