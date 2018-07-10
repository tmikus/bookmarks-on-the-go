import {
  AsyncAction,
} from '../types';
import {
  clearLoginData,
  getLoginData,
} from '../settings';
import { loginAction } from './auth';

export function initAction(): AsyncAction {
  return async (dispatch, getState) => {
    console.log('Initialise application.');
    const loginData = getLoginData();
    if (!loginData) {
      console.log('No user data stored. Done.');
      return;
    }
    console.log('Start logging in:', loginData);
    await dispatch(loginAction(loginData.userName, loginData.password));
    if (!getState().auth.isLoggedIn) {
      console.log('Invalid credentials. Clearing the storage');
      clearLoginData();
    } else {
      console.log('All done.');
    }
    // TODO: Sync bookmarks
    // await dispatch();
  };
}

