import {GithubActions, GithubActionTypes} from './github.actions';
import { GithubStatus } from '@app/github';

export interface State extends GithubStatus {
}

const initialState: State = {
  userIsValid: true,
};

export function reducer(state = initialState, action: GithubActions): State {
  switch (action.type) {

    case GithubActionTypes.LoadUser:
    case GithubActionTypes.LoadUserSuccess:
      return {
        userIsValid: true,
      };

    case GithubActionTypes.LoadUserError:
      return {
          userIsValid: false,
      };

    case GithubActionTypes.RemoveUser:
      return initialState;

    default:
      return state;
  }
}

