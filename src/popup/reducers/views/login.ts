import { Action } from '..';

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
  switch (action.type) {
    case 'login-view:set-password':
      return {
        ...state,
        password: action.value,
      };
    case 'login-view:set-user-name':
      return {
        ...state,
        userName: action.value,
      };
    default: return state;
  }
};

export function createSetPasswordAction(password: string): Action {
  return {
    type: 'login-view:set-password',
    value: password,
  };
}

export function createSetUserNameAction(userName: string): Action {
  return {
    type: 'login-view:set-user-name',
    value: userName,
  };
}
