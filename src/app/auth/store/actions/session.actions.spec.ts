import * as sessionActions from './session.actions';
import { genTokensMock } from '../../models';

describe('Auth Actions', () => {
  describe('Login Action', () => {
    describe('Login', () => {
      it('should create an action', () => {
        const action = new sessionActions.Login();

        expect({ ...action }).toEqual({
          type: sessionActions.SessionActionTypes.Login,
        });
      });
    });
  });

  describe('LoginHandle Action', () => {
    describe('LoginHandle', () => {
      it('should create an action', () => {
        const action = new sessionActions.LoginHandle();

        expect({ ...action }).toEqual({
          type: sessionActions.SessionActionTypes.LoginHandle,
        });
      });
    });
  });

  describe('LoginSuccess Action', () => {
    describe('LoginSuccess', () => {
      it('should create an action', () => {
        const payload = genTokensMock();
        const action = new sessionActions.LoginSuccess(payload);

        expect({ ...action }).toEqual({
          type: sessionActions.SessionActionTypes.LoginSucess,
          payload,
        });
      });
    });
  });

  describe('Logout Action', () => {
    describe('Logout', () => {
      it('should create an action', () => {
        const action = new sessionActions.Logout();

        expect({ ...action }).toEqual({
          type: sessionActions.SessionActionTypes.Logout,
        });
      });
    });
  });
});
