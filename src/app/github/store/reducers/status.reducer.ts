import { GithubActions, GithubActionTypes } from '../actions/github.actions';
import { GithubUserStatus } from 'app/github/index';

export interface State {
  user: GithubUserStatus;
}

const initialUserState: GithubUserStatus = {
  user: '',
  userValid: true,
  userLoading: false,
};

const initialState: State = {
  user: initialUserState,
};

export function reducer(state = initialState, action: GithubActions): State {
  switch (action.type) {

    case GithubActionTypes.UserSelect:
      return {
        ...state,
        user: {
          user: action.payload,
          userValid: true,
          userLoading: true,
        }
      };

    case GithubActionTypes.UserLoad:
      return {
        ...state,
        user: Object.assign( {},
          state.user,
          { userLoading: true },
        )
      };

    case GithubActionTypes.UserLoadSuccess:
      return {
        ...state,
        user: Object.assign( {},
          state.user,
          { userValid: true,
            userLoading: false, },
        )
      };

    case GithubActionTypes.UserLoadError:
      return {
        ...state,
        user: Object.assign( {},
          state.user,
          { userValid: false,
            userLoading: false, },
        ),
      };

    case GithubActionTypes.UserRemove:
      return {
        ...state,
        user: initialUserState,
      };

    default:
      return state;
  }
}

