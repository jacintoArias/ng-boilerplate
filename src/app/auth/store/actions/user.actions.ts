import { Action } from '@ngrx/store';

import { User } from '../../models';

export enum UserActionTypes {
  UserLoad = '[Auth] UserLoad',
  UserLoadSuccess = '[Auth] UserLoadSuccess',
  UserLoadFail = '[Auth] UserLoadFail',
}

export class UserLoad implements Action {
  readonly type = UserActionTypes.UserLoad;
}

export class UserLoadSuccess implements Action {
  readonly type = UserActionTypes.UserLoadSuccess;
  constructor(public payload: User) {}
}

export class UserLoadFail implements Action {
  readonly type = UserActionTypes.UserLoadFail;
  constructor(public payload: Error) {}
}

export type UserActions = UserLoad | UserLoadSuccess | UserLoadFail;
