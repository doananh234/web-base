import { AuthTypes } from './actions';
import { makeReducerCreator } from '../reduxCreator';

export const initialState = {
  isAuthenticated: true,
  roles: '',
  loginError: false,
  loginSuccess: false,
};

const loginSuccess = state => ({
  ...state,
  isAuthenticated: true,
  loginError: false,
  loginSuccess: true,
});

const loginFail = (state, action) => ({
  ...state,
  isAuthenticated: false,
  loginError: action.error,
  loginSuccess: false,
});

export const auth = makeReducerCreator(initialState, {
  [AuthTypes.LOGIN_AUTH_SUCCESS]: loginSuccess,
  [AuthTypes.LOGIN_AUTH_FAIL]: loginFail,
});
