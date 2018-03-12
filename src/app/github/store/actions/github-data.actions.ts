import { Action } from '@ngrx/store';
import { GithubProfile } from '../../models';

export enum GithubDataActionTypes {
  LoadData = '[Github] LoadData',
  LoadDataSuccess = '[Github] LoadDataSuccess',
  LoadDataError = '[Github] LoadDataError',
}

export class LoadData implements Action {
  readonly type = GithubDataActionTypes.LoadData;
}

export class LoadDataSuccess implements Action {
  readonly type = GithubDataActionTypes.LoadDataSuccess;

  constructor(public payload: GithubProfile) {}
}

export class LoadDataError implements Action {
  readonly type = GithubDataActionTypes.LoadDataError;

  constructor(public payload: string) {}
}

export type GithubDataAction = LoadData | LoadDataSuccess | LoadDataError;
