import { AsyncAction } from '.';
import { isLoginSuccessAction } from '../../core/background-actions/login-success';
import { isLoggedOutAction } from '../../core/background-actions/logged-out';
import { Action } from '../../core/types';
import { isInitialStateLoadedAction } from '../../core/background-actions/initial-state-loaded';

export interface AuthState {
  isLoggedIn: boolean;
}

const defaultAuthState: AuthState = {
  isLoggedIn: false,
};

export const auth = (state: AuthState = defaultAuthState, action: Action): AuthState => {
  if (isInitialStateLoadedAction(action)) {
    return {
      ...state,
      isLoggedIn: action.isLoggedIn,
    }
  }
  if (isLoginSuccessAction(action)) {
    return {
      ...state,
      isLoggedIn: true,
    };
  }
  if (isLoggedOutAction(action)) {
    return {
      ...state,
      isLoggedIn: false,
    };
  }
  return state;
};

export function createLoginAction(userName: string, password: string): AsyncAction {
  return async (dispatch) => {

  };
}
