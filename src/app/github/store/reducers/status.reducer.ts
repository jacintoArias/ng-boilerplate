import { GithubActions, GithubUserActionTypes } from '../actions';
import { GithubUserStatus } from '../../models';

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

    case GithubUserActionTypes.UserSelect:
      return {
        ...state,
        user: {
          user: action.payload,
          userValid: true,
          userLoading: true,
        }
      };

    case GithubUserActionTypes.UserLoad:
      return {
        ...state,
        user: Object.assign( {},
          state.user,
          { userLoading: true },
        )
      };

    case GithubUserActionTypes.UserLoadSuccess:
      return {
        ...state,
        user: Object.assign( {},
          state.user,
          { userValid: true,
            userLoading: false, },
        )
      };

    case GithubUserActionTypes.UserLoadError:
      return {
        ...state,
        user: Object.assign( {},
          state.user,
          { userValid: false,
            userLoading: false, },
        ),
      };

    case GithubUserActionTypes.UserRemove:
      return {
        ...state,
        user: initialUserState,
      };

    default:
      return state;
  }
}

