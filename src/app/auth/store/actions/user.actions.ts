import { Action } from '@ngrx/store';

import { User } from '../../models';

export enum UserActionTypes {
  ProfileLoad = '[Auth] ProfileLoad',
  ProfileRemove = '[Auth] ProfileRemove',
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

