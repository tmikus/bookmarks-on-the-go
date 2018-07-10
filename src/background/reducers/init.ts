import {
  AsyncAction,
} from '../types';
import {
  clearLoginData,
  getLoginData,
} from '../settings';
import { createLoginAction } from './auth';

export function createInitAction(): AsyncAction {
  return async (dispatch, getState) => {
    const loginData = getLoginData();
    if (!loginData) return;
    await dispatch(createLoginAction(loginData.userName, loginData.password));
    if (!getState().auth.isLoggedIn) {
      clearLoginData();
    }
    // TODO: Sync bookmarks
    // await dispatch();
  };
}

