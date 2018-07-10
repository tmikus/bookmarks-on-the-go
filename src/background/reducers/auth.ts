import { setLoginData } from '../settings';
import { AsyncAction } from '../types';
import {
  login,
  logout,
} from '../api/botg';
import { Action } from '../../core/types';
import {
  loginSuccessAction,
  isLoginSuccessAction,
} from '../../core/background-actions/login-success';
import {
  loginFailedAction,
  isLoginFailedAction,
} from '../../core/background-actions/login-failed';
import {
  isLoggedOutAction,
  loggedOutAction,
} from '../../core/background-actions/logged-out';

export interface AuthState {
  isLoggedIn: boolean;
}

const defaultAuthState: AuthState = {
  isLoggedIn: false,
};

export const auth = (state: AuthState = defaultAuthState, action: Action): AuthState => {
  if (isLoginSuccessAction(action)) {
    return {
      ...state,
      isLoggedIn: true,
    };
  }
  if (isLoginFailedAction(action) || isLoggedOutAction(action)) {
    return {
      ...state,
      isLoggedIn: false,
    };
  }
  return state;
};

export function loginAction(userName: string, password: string): AsyncAction {
  return async (dispatch) => {
    await dispatch(loginBeginAction());
    const result = await login(userName, password);
    if (!result.success) return dispatch(loginFailedAction(result.errorMessage));
    setLoginData({ userName, password });
    return dispatch(loginSuccessAction());
  };
}

export interface LoginBeginAction extends Action<'auth:login:begin'> {
}

export function loginBeginAction(): LoginBeginAction {
  return { type: 'auth:login:begin' };
}

export function isLoginBeginAction(action: Action): action is LoginBeginAction {
  return action.type === 'auth:login:begin';
}


export function createLogoutAction(): AsyncAction {
  return async (dispatch) => {
    await logout();
    return dispatch(loggedOutAction());
  };
}
