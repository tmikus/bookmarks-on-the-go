import { Action } from '..';
import { isLoginAction } from '../auth';

export interface LoginState {
  isLoggingIn: boolean;
  password: string;
  userName: string;
}

const defaultLoginState: LoginState = {
  isLoggingIn: false,
  password: '',
  userName: '',
};

export const login = (state: LoginState = defaultLoginState, action: Action): LoginState => {
  if (isSetPasswordAction(action)) {
    return {
      ...state,
      password: action.password,
    };
  }
  if (isSetUserNameAction(action)) {
    return {
      ...state,
      userName: action.userName,
    }
  }
  if (isLoginAction(action)) {
    return {
      ...state,
      isLoggingIn: true,
    };
  }
  return state;
};

export interface SetPasswordAction extends Action<'login-view:set-password'> {
  password: string;
}

export function createSetPasswordAction(password: string): SetPasswordAction {
  return {
    type: 'login-view:set-password',
    password,
  };
}

export function isSetPasswordAction(action: Action): action is SetPasswordAction {
  return action.type === 'login-view:set-password';
}

export interface SetUserNameAction extends Action<'login-view:set-user-name'> {
  userName: string;
}

export function createSetUserNameAction(userName: string): SetUserNameAction {
  return {
    type: 'login-view:set-user-name',
    userName,
  };
}

export function isSetUserNameAction(action: Action): action is SetUserNameAction {
  return action.type === 'login-view:set-user-name';
}
