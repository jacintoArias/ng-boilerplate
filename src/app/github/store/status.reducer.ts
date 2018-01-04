import {GithubActions, GithubActionTypes} from './github.actions';
import { GithubStatus } from '@app/github';

export interface State extends GithubStatus {
}

const initialState: State = {
  userIsValid: true,
  userSelected: '',
};

export function reducer(state = initialState, action: GithubActions): State {
  switch (action.type) {

    case GithubActionTypes.SelectUser:
      return {
        ...state,
        userIsValid: true,
        userSelected: action.payload,
      };

    case GithubActionTypes.LoadUserError:
      return {
        ...state,
        userIsValid: false,
      };

    case GithubActionTypes.RemoveUser:
      return initialState;

    default:
      return state;
  }
}

