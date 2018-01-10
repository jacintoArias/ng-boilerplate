import * as fromAuth from './auth.actions';
import { genTokensMock } from '@app/auth';

describe('Auth Actions', () => {

  describe('Login Action', () => {
    describe('Login', () => {
      it('should create an action', () => {
        const action = new fromAuth.Login();

        expect({ ...action }).toEqual({
          type: fromAuth.AuthActionTypes.Login,
        });
      });
    });
  });

  describe('LoginHandle Action', () => {
    describe('LoginHandle', () => {
      it('should create an action', () => {
        const action = new fromAuth.LoginHandle();

        expect({ ...action }).toEqual({
          type: fromAuth.AuthActionTypes.LoginHandle,
        });
      });
    });
  });

  describe('LoginSuccess Action', () => {
    describe('LoginSuccess', () => {
      it('should create an action', () => {
        const payload = genTokensMock();
        const action = new fromAuth.LoginSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromAuth.AuthActionTypes.LoginSucess,
          payload
        });
      });
    });
  });

  describe('Logout Action', () => {
    describe('Logout', () => {
      it('should create an action', () => {
        const action = new fromAuth.Logout();

        expect({ ...action }).toEqual({
          type: fromAuth.AuthActionTypes.Logout,
        });
      });
    });
  });

});