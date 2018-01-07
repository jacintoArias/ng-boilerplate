import { Action } from '@ngrx/store';
import {GithubUser} from '../models/github-user.model';

export enum GithubActionTypes {
  UserSelect = '[Github] UserSelect',
  UserLoad = '[Github] UserLoad',
  UserLoadSuccess = '[Github] UserLoadSuccess',
  UserLoadError = '[Github] UserLoadError',
  UserRemove = '[Github] UserRemove',
}

export class UserSelect implements Action {
  readonly type = GithubActionTypes.UserSelect;

  constructor(public payload: string) {}
}

export class UserLoad implements Action {
  readonly type = GithubActionTypes.UserLoad;

}

export class UserLoadSuccess implements Action {
  readonly type = GithubActionTypes.UserLoadSuccess;

  constructor(public payload: GithubUser) {}
}

export class UserLoadError implements Action {
  readonly type = GithubActionTypes.UserLoadError;

  constructor(public payload: string) {}
}

export class UserRemove implements Action {
  readonly type = GithubActionTypes.UserRemove;

}

export type GithubActions =
  UserSelect |
  UserLoad |
  UserLoadSuccess |
  UserLoadError |
  UserRemove;

