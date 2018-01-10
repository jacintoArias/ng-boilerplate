import { AuthActions, AuthActionTypes } from '../actions/auth.actions';
import { Tokens } from 'app/auth/models/tokens';

export interface State {
  tokens: Tokens;
}

export const initialState: State = {
  tokens: null,
};

export function reducer(
  state = initialState,
  action: AuthActions
): State {
  switch (action.type) {

    case AuthActionTypes.LoginSucess:
      return {
        ...state,
        tokens: action.payload,
      };

    case AuthActionTypes.Logout:
      return initialState;

    default:
      return state;
  }
}

export const getTokens = (state: State) => state.tokens;
