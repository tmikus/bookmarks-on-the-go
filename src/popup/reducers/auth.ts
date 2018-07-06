import { Action, AsyncAction } from '.';
import { login } from '../api/botg';

export interface AuthState {
  isLoggedIn: boolean;
}

const defaultAuthState: AuthState = {
  isLoggedIn: false,
};

export const auth = (state: AuthState = defaultAuthState, action: Action): AuthState => {
  switch (action.type) {
    default: return state;
  }
};

export function createLoginAction(userName: string, password: string): AsyncAction {
  return (dispatch) => {
    dispatch(createLoginBeginAction());
    return login(userName, password)
      .then((result) => {
        if (!result.success) dispatch(createLoginFailedAction(result.message));
        else dispatch(createLoginSuccessAction());
      });
  };
}

export interface LoginBeginAction extends Action<'login:begin'> {
}

export function createLoginBeginAction(): LoginBeginAction {
  return { type: 'login:begin' };
}

export function isLoginBeginAction(action: Action): action is LoginBeginAction {
  return action.type === 'login:begin';
}

export interface LoginFailedAction extends Action<'login:failed'> {
  message: string;
}

export function createLoginFailedAction(message: string): LoginFailedAction {
  return {
    type: 'login:failed',
    message,
  };
}

export function isLoginFailedAction(action: Action): action is LoginFailedAction {
  return action.type === 'login:failed';
}

export interface LoginSuccessAction extends Action<'login:success'> {
}

export function createLoginSuccessAction(): LoginSuccessAction {
  return { type: 'login:success' };
}

export function isLoginSuccessAction(action: Action): action is LoginSuccessAction {
  return action.type === 'login:success';
}
