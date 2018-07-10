import { Action } from '../../core/types';
import { isLoginSuccessAction } from '../../core/background-actions/login-success';
import { isLoggedOutAction } from '../../core/background-actions/logged-out';
import { isInitialStateLoadedAction } from '../../core/background-actions/initial-state-loaded';

export interface NavigationState {
  view: string;
}

const defaultNavigationState: NavigationState = {
  view: 'login',
};

export const navigation = (state: NavigationState = defaultNavigationState, action: Action): NavigationState => {
  if (isLoginSuccessAction(action) || (isInitialStateLoadedAction(action) && action.isLoggedIn)) {
    return {
      ...state,
      view: 'settings',
    };
  }
  if (isLoggedOutAction(action) || (isInitialStateLoadedAction(action) && !action.isLoggedIn)) {
    return {
      ...state,
      view: 'login',
    };
  }
  return state;
};
