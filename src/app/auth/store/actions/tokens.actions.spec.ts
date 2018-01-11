import * as tokensActions from './tokens.actions';
import { genTokensMock } from '@app/auth';

describe('Auth Actions', () => {

  describe('Login Action', () => {
    describe('Login', () => {
      it('should create an action', () => {
        const action = new tokensActions.Login();

        expect({ ...action }).toEqual({
          type: tokensActions.TokensActionTypes.Login,
        });
      });
    });
  });

  describe('LoginHandle Action', () => {
    describe('LoginHandle', () => {
      it('should create an action', () => {
        const action = new tokensActions.LoginHandle();

        expect({ ...action }).toEqual({
          type: tokensActions.TokensActionTypes.LoginHandle,
        });
      });
    });
  });

  describe('LoginSuccess Action', () => {
    describe('LoginSuccess', () => {
      it('should create an action', () => {
        const payload = genTokensMock();
        const action = new tokensActions.LoginSuccess(payload);

        expect({ ...action }).toEqual({
          type: tokensActions.TokensActionTypes.LoginSucess,
          payload
        });
      });
    });
  });

  describe('Logout Action', () => {
    describe('Logout', () => {
      it('should create an action', () => {
        const action = new tokensActions.Logout();

        expect({ ...action }).toEqual({
          type: tokensActions.TokensActionTypes.Logout,
        });
      });
    });
  });

});
