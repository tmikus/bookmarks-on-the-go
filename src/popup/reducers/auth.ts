import { Action } from '.';

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

export interface LoginAction extends Action<'auth:login'> {
  password: string;
  userName: string;
}

export function createLoginAction(userName: string, password: string): LoginAction {
  return {
    type: 'auth:login',
    password,
    userName,
  };
}

export function isLoginAction(action: Action): action is LoginAction {
  return action.type === 'auth:login';
}
