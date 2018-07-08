import { Action, AsyncAction } from '.';
import {
  login,
  logout,
} from '../api/botg';
import { setLoginData } from '../settings';

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

export function createLoginAction(userName: string, password: string): AsyncAction {
  return async (dispatch) => {
    await dispatch(createLoginBeginAction());
    const result = await login(userName, password);
    if (!result.success) return dispatch(createLoginFailedAction(result.errorMessage));
    setLoginData({ userName, password });
    return dispatch(createLoginSuccessAction());
  };
}

export interface LoginBeginAction extends Action<'auth:login:begin'> {
}

export function createLoginBeginAction(): LoginBeginAction {
  return { type: 'auth:login:begin' };
}

export function isLoginBeginAction(action: Action): action is LoginBeginAction {
  return action.type === 'auth:login:begin';
}

export interface LoginFailedAction extends Action<'auth:login:failed'> {
  message: string;
}

export function createLoginFailedAction(message: string): LoginFailedAction {
  return {
    type: 'auth:login:failed',
    message,
  };
}

export function isLoginFailedAction(action: Action): action is LoginFailedAction {
  return action.type === 'auth:login:failed';
}

export interface LoginSuccessAction extends Action<'auth:login:success'> {
}

export function createLoginSuccessAction(): LoginSuccessAction {
  return { type: 'auth:login:success' };
}

export function isLoginSuccessAction(action: Action): action is LoginSuccessAction {
  return action.type === 'auth:login:success';
}

export function createLogoutAction(): AsyncAction {
  return async (dispatch) => {
    await logout();
    return dispatch(createLoggedOutAction());
  };
}

export interface LoggedOutAction extends Action<'auth:logged-out'> {
}

export function createLoggedOutAction(): LoggedOutAction {
  return { type: 'auth:logged-out' };
}

export function isLoggedOutAction(action: Action): action is LoggedOutAction {
  return action.type === 'auth:logged-out';
}
