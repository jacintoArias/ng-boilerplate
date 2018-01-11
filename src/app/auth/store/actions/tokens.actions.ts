import { Action } from '@ngrx/store';

import { Tokens } from '../../models';

export enum TokensActionTypes {
  Login = '[Auth] Login',
  LoginHandle = '[Auth] Login Handle',
  LoginSucess = '[Auth] Login Success',
  Logout = '[Auth] ProfileRemove',
}

export class Login implements Action {
  readonly type = TokensActionTypes.Login;
}

export class LoginHandle implements Action {
  readonly type = TokensActionTypes.LoginHandle;
}

export class LoginSuccess implements Action {
  readonly type = TokensActionTypes.LoginSucess;

  constructor(public payload: Tokens) {}
}

export class Logout implements Action {
  readonly type = TokensActionTypes.Logout;
}

export type TokensActions =
  Login |
  LoginHandle |
  LoginSuccess |
  Logout;

