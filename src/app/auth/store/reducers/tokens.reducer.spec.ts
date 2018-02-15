import * as fromAuth from './tokens.reducer';
import * as Auth from '../actions/tokens.actions';
import { Tokens, genTokensMock } from '../../models/';

describe('TokensReducer', () => {
  describe('Undefined Action', () => {
    it('should return the default state', () => {
      const { initialState } = fromAuth;
      const action = {} as any;
      const state = fromAuth.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('Login Action', () => {
    it('should return the default state', () => {
      const { initialState } = fromAuth;
      const action = {} as any;
      const state = fromAuth.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('LoginHandle Action', () => {
    it('should return the default state', () => {
      const { initialState } = fromAuth;
      const action = {} as any;
      const state = fromAuth.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('LoginSucess Action', () => {
    it('should populate the tokens', () => {
      const tokens: Tokens = genTokensMock();
      const { initialState } = fromAuth;
      const action = new Auth.LoginSuccess(tokens);
      const state = fromAuth.reducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        tokens,
      });
    });
  });

  describe('Logout Action', () => {
    it('should return initial state', () => {
      const tokens: Tokens = genTokensMock();
      const { initialState } = fromAuth;
      const previousState: fromAuth.State = { tokens };
      const action = new Auth.Logout();
      const state = fromAuth.reducer(previousState, action);

      expect(state).toEqual(initialState);
    });
  });
});
