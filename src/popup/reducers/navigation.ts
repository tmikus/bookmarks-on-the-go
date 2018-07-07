import { Action } from 'redux';
import {
  isLoggedOutAction,
  isLoginSuccessAction,
} from './auth';

export interface NavigationState {
  view: string;
}

const defaultNavigationState: NavigationState = {
  view: 'login',
};

export const navigation = (state: NavigationState = defaultNavigationState, action: Action): NavigationState => {
  if (isLoginSuccessAction(action)) {
    return {
      ...state,
      view: 'settings',
    };
  }
  if (isLoggedOutAction(action)) {
    return {
      ...state,
      view: 'login',
    };
  }
  return state;
};
