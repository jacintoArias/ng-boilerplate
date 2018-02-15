import { Action } from '@ngrx/store';

import { User } from '../../models';

export enum UserActionTypes {
  LoadUser = '[Auth] LoadUser',
  LoadUserSuccess = '[Auth] LoadUserSuccess',
  LoadUserFail = '[Auth] LoadUserFail',
}

export class LoadUser implements Action {
  readonly type = UserActionTypes.LoadUser;
}

export class LoadUserSuccess implements Action {
  readonly type = UserActionTypes.LoadUserSuccess;
  constructor(public payload: User) {}
}

export class LoadUserFail implements Action {
  readonly type = UserActionTypes.LoadUserFail;
  constructor(public payload: Error) {}
}

export type UserActions = LoadUser | LoadUserSuccess | LoadUserFail;
