import { Action } from '@ngrx/store';
import { Openid } from '@app/core';

export enum UserActionTypes {
  ProfileLoad = '[User] ProfileLoad',
  ProfileRemove = '[User] ProfileRemove',
}

export class ProfileLoad implements Action {
  readonly type = UserActionTypes.ProfileLoad;

  constructor(public payload: Openid) {}
}

export class ProfileRemove implements Action {
  readonly type = UserActionTypes.ProfileRemove;
}

export type UserActions =
  ProfileLoad |
  ProfileRemove;

