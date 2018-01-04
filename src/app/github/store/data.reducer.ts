import { GithubActions, GithubActionTypes } from './github.actions';
import { GithubUser } from '../models/github-user.model';

export interface State {
  user: GithubUser;
}

const initialState: State = {
  user: null,
};

export function reducer(state = initialState, action: GithubActions): State {
  switch (action.type) {

    case GithubActionTypes.LoadUser:
    case GithubActionTypes.LoadUserError:
    case GithubActionTypes.RemoveUser:
      return initialState;

    case GithubActionTypes.LoadUserSuccess:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}

export const getUser = (state: State) => state.user;