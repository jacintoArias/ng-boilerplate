import { SessionActions, SessionActionTypes } from '../actions';
import { Tokens } from '../../models';

export interface SessionState {
  tokens: Tokens;
}

export const initialState: SessionState = {
  tokens: null,
};

export function reducer(
  state = initialState,
  action: SessionActions
): SessionState {
  switch (action.type) {
    case SessionActionTypes.LoginSucess:
      return {
        ...state,
        tokens: action.payload,
      };

    case SessionActionTypes.Logout:
      return initialState;

    default:
      return state;
  }
}

export const getTokens = (state: SessionState) => state.tokens;
