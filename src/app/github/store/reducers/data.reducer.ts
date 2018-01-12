import { GithubActions, GithubUserActionTypes } from '../actions';
import { GithubUser } from '../../models';

export interface State {
  user: GithubUser;
}

const initialState: State = {
  user: null,
};

export function reducer(state = initialState, action: GithubActions): State {
  switch (action.type) {

    case GithubUserActionTypes.UserLoad:
    case GithubUserActionTypes.UserLoadError:
    case GithubUserActionTypes.UserRemove:
      return {
        ...state,
        user: initialState.user,
      };

    case GithubUserActionTypes.UserLoadSuccess:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}

export const getUser = (state: State) => state.user;
