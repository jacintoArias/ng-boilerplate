import { TokensActions, TokensActionTypes } from '../actions/tokens.actions';
import { Tokens } from 'app/auth/models/tokens';

export interface State {
  tokens: Tokens;
}

export const initialState: State = {
  tokens: null,
};

export function reducer(
  state = initialState,
  action: TokensActions
): State {
  switch (action.type) {

    case TokensActionTypes.LoginSucess:
      return {
        ...state,
        tokens: action.payload,
      };

    case TokensActionTypes.Logout:
      return initialState;

    default:
      return state;
  }
}

export const getTokens = (state: State) => state.tokens;
