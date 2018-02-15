import { Action } from '@ngrx/store';
import { GithubUser } from '../../models';

export enum GithubUserActionTypes {
  UserSelect = '[Github] UserSelect',
  UserLoad = '[Github] UserLoad',
  UserLoadSuccess = '[Github] UserLoadSuccess',
  UserLoadError = '[Github] UserLoadError',
  UserRemove = '[Github] UserRemove',
}

export class UserSelect implements Action {
  readonly type = GithubUserActionTypes.UserSelect;

  constructor(public payload: string) {}
}

export class UserLoad implements Action {
  readonly type = GithubUserActionTypes.UserLoad;
}

export class UserLoadSuccess implements Action {
  readonly type = GithubUserActionTypes.UserLoadSuccess;

  constructor(public payload: GithubUser) {}
}

export class UserLoadError implements Action {
  readonly type = GithubUserActionTypes.UserLoadError;

  constructor(public payload: string) {}
}

export class UserRemove implements Action {
  readonly type = GithubUserActionTypes.UserRemove;
}

export type GithubActions =
  | UserSelect
  | UserLoad
  | UserLoadSuccess
  | UserLoadError
  | UserRemove;
