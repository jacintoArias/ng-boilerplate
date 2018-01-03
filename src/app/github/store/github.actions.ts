import { Action } from '@ngrx/store';
import {GithubUser} from '../models/github-user.model';

export enum GithubActionTypes {
  LoadUser = '[Github] LoadUser',
  LoadUserSuccess = '[Github] LoadUserSuccess',
  LoadUserError = '[Github] LoadUserError',
  RemoveUser = '[Github] RemoveUser',
}

export class LoadUser implements Action {
  readonly type = GithubActionTypes.LoadUser;

  constructor(public payload: string) {}
}

export class LoadUserSuccess implements Action {
  readonly type = GithubActionTypes.LoadUserSuccess;

  constructor(public payload: GithubUser) {}
}

export class LoadUserError implements Action {
  readonly type = GithubActionTypes.LoadUserError;

  constructor(public payload: string) {}
}

export class RemoveUser implements Action {
  readonly type = GithubActionTypes.RemoveUser;

}

export type GithubActions =
  LoadUser |
  LoadUserSuccess |
  LoadUserError |
  RemoveUser;

