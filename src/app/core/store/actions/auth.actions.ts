import { Action } from '@ngrx/store';
import { Profile, Tokens } from '../../models/auth';

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

  constructor(public payload: { tokens: Tokens, profile: Profile }) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export type AuthActions =
  Login |
  LoginHandle |
  LoginSuccess |
  Logout;

