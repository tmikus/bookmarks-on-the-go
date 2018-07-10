import { listenToBackgroundActions } from '../connection';
import {
  Dispatch,
  Middleware,
  Store,
} from 'redux';
import { Action } from '../../core/types';

export const replyBackgroundActions: Middleware = (store: Store) => (next: Dispatch<Action>) => {
  listenToBackgroundActions((action) => {
    console.log('Dispatching action from background script:', action);
    store.dispatch(action);
  });
  return next;
};
