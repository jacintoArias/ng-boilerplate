import {GithubActions, GithubActionTypes} from './github.actions';
import { GithubStatus, GithubUser } from '../models/github-user.model';

export interface State {
  user: GithubUser;
  status: GithubStatus;
}

const initialState: State = {
  user: null,
  status: {
    userIsValid: true,
  }
};

export function reducer(state = initialState, action: GithubActions): State {
  switch (action.type) {

    case GithubActionTypes.LoadUser:
      return initialState;

    case GithubActionTypes.LoadUserSuccess:
      return {
        ...state,
        user: action.payload,
      };

    case GithubActionTypes.LoadUserError:
      return {
        ...initialState,
        status: {
          ...state.status,
          userIsValid: false,
        }
      };

    case GithubActionTypes.RemoveUser:
      return initialState;

    default:
      return state;
  }
}

export const getUser = (state: State) => state.user;
export const getStatus = (state: State) => state.status;
