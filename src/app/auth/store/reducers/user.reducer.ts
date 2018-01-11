import { UserActions, UserActionTypes } from '../actions';
import { User } from '../../models';

export interface State {
  profile: User;
}

const initialState: State = {
  profile: null,
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {

    case UserActionTypes.ProfileLoad:
      return {
        ...state,
        profile: action.payload,
      };

    case UserActionTypes.ProfileRemove:
      return initialState;

    default:
      return state;
  }
}

export const getProfile = (state: State) => state.profile;
