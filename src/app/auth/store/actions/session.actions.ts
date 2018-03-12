import { Action } from '@ngrx/store';

import { Tokens } from '../../models';

export enum SessionActionTypes {
  Login = '[Auth] Login',
  LoginHandle = '[Auth] Login Handle',
  LoginSucess = '[Auth] Login Success',
  Logout = '[Auth] Logout',
}

export class Login implements Action {
  readonly type = SessionActionTypes.Login;
}

export class LoginHandle implements Action {
  readonly type = SessionActionTypes.LoginHandle;
}

export class LoginSuccess implements Action {
  readonly type = SessionActionTypes.LoginSucess;

  constructor(public payload: Tokens) {}
}

export class Logout implements Action {
  readonly type = SessionActionTypes.Logout;
}

export type SessionAction = Login | LoginHandle | LoginSuccess | Logout;
