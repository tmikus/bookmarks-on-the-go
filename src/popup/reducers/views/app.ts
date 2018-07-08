import {
  Action,
  AsyncAction,
} from '..';
import { clearLoginData, getLoginData } from '../../settings';
import {
  createLoginAction,
} from '../auth';

export interface AppViewState {
  isInitialised: boolean;
  isInitialising: boolean;
}

export const defaultAppViewState: AppViewState = {
  isInitialised: false,
  isInitialising: false,
};

export const app = (state: AppViewState = defaultAppViewState, action: Action): AppViewState => {
  if (isInitialiseAppStartAction(action)) {
    return {
      ...state,
      isInitialised: false,
      isInitialising: true,
    };
  }
  if (isInitialiseAppCompleteAction(action)) {
    return {
      ...state,
      isInitialised: true,
      isInitialising: false,
    };
  }
  return state;
};

export function createInitialiseAppAction(): AsyncAction {
  return async (dispatch, getState) => {
    console.log('Start app:initialise');
    dispatch(createInitialiseAppStartAction());
    console.log('Get login data');
    const loginData = getLoginData();
    if (loginData) {
      console.log('Do login:', loginData);
      await dispatch(createLoginAction(loginData.userName, loginData.password));
      if (!getState().auth.isLoggedIn) {
        console.log('Not logged in.');
        clearLoginData();
      } else {
        console.log('Logged in.');
      }
    }
    console.log('Complete app:initialise');
    return dispatch(createInitialiseAppCompleteAction());
  };
}

export interface InitialiseAppStart extends Action<'view:app:initialise:start'> {
}

export function createInitialiseAppStartAction(): InitialiseAppStart {
  return { type: 'view:app:initialise:start' };
}

export function isInitialiseAppStartAction(action: Action): action is InitialiseAppStart {
  return action.type === 'view:app:initialise:start';
}

export interface InitialiseAppComplete extends Action<'view:app:initialise:complete'> {
}

export function createInitialiseAppCompleteAction(): InitialiseAppComplete {
  return { type: 'view:app:initialise:complete' };
}

export function isInitialiseAppCompleteAction(action: Action): action is InitialiseAppComplete {
  return action.type === 'view:app:initialise:complete';
}
