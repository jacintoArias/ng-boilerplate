import * as fromGithubService from '../actions/github-service.actions';

export interface GithubServiceState {
  username: string;
  usernameValid: boolean;
  usernameChecked: boolean;
}

const initialState: GithubServiceState = {
  username: '',
  usernameValid: false,
  usernameChecked: true,
};

export function reducer(
  state = initialState,
  action: fromGithubService.GithubServiceAction
): GithubServiceState {
  switch (action.type) {
    case fromGithubService.GithubServiceActionTypes.SetUsername: {
      const username = action.payload;
      if (username === '') {
        return initialState;
      } else {
        return {
          ...state,
          username: action.payload,
          usernameValid: true,
          usernameChecked: false,
        };
      }
    }

    case fromGithubService.GithubServiceActionTypes.ValidateUsername:
      return {
        ...state,
        usernameValid: action.payload,
        usernameChecked: true,
      };
  }
  return state;
}

export const getUsername = (state: GithubServiceState) => state.username;
export const getUsernameValid = (state: GithubServiceState) =>
  state.usernameValid;
export const getUsernameChecked = (state: GithubServiceState) =>
  state.usernameChecked;
