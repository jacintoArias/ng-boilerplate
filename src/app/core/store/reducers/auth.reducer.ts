import { AuthActions, AuthActionTypes } from '../actions/auth.actions';

import { Profile, Tokens } from '../../models/auth';


export interface State {
  tokens: Tokens;
  profile: Profile;
}

const initialState: State = {
  tokens: null,
  profile: null,
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {

    case AuthActionTypes.LoginSucess:
      const { tokens, profile } = action.payload;
      return {
        ...state,
        tokens: tokens,
        profile: profile,
      };

    case AuthActionTypes.Logout:
      return initialState;

    default:
      return state;
  }
}

export const getTokens = (state: State) => state.tokens;
export const getProfile = (state: State) => state.profile;
