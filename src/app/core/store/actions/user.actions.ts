import { Action } from '@ngrx/store';
import { User } from 'app/core/index';

export enum UserActionTypes {
  ProfileLoad = '[User] ProfileLoad',
  ProfileRemove = '[User] ProfileRemove',
}

export class ProfileLoad implements Action {
  readonly type = UserActionTypes.ProfileLoad;

  constructor(public payload: User) {}
}

export class ProfileRemove implements Action {
  readonly type = UserActionTypes.ProfileRemove;
}

export type UserActions =
  ProfileLoad |
  ProfileRemove;

