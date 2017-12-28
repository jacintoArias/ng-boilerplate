import { Action } from '@ngrx/store';
import { Openid } from '@app/core';

export enum UserActionTypes {
  LoadProfile = '[User] LoadProfile',
  Logout = '[User] Logout',
}

export class LoadProfile implements Action {
  readonly type = UserActionTypes.LoadProfile;

  constructor(public payload: Openid) {}
}

export class Logout implements Action {
  readonly type = UserActionTypes.Logout;
}

export type UserActions =
  LoadProfile |
  Logout;

