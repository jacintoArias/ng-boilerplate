import { Action } from '@ngrx/store';
import { GithubProfile } from '../../models';

export enum GithubServiceActionTypes {
  SetUsername = '[Github] SetUsername',
  ValidateUsername = '[Github] ValidateUsername',
}

export class SetUsername implements Action {
  readonly type = GithubServiceActionTypes.SetUsername;
  constructor(public payload: string) {}
}

export class ValidateUsername implements Action {
  readonly type = GithubServiceActionTypes.ValidateUsername;
  constructor(public payload: boolean) {}
}

export type GithubServiceAction = SetUsername | ValidateUsername;
