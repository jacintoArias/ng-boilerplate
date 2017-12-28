import { Action } from '@ngrx/store';
import { Tokens } from '@app/auth/models/tokens';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginHandle = '[Auth] Login Handle',
  LoginSucess = '[Auth] Login Success',
  Logout = '[Auth] Logout',
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
}

export class LoginHandle implements Action {
  readonly type = AuthActionTypes.LoginHandle;
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSucess;

  constructor(public payload: Tokens) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export type AuthActions =
  Login |
  LoginHandle |
  LoginSuccess |
  Logout;

