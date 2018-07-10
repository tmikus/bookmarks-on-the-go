import { listenToClientActions } from '../connection';
import {
  Dispatch,
  Middleware,
  Store,
} from 'redux';
import { Action } from '../../core/types';
import { isLoadInitialStateAction } from '../../core/client-actions/load-initial-state';
import { AppState } from '../reducers';
import { initialStateLoadedAction } from '../../core/background-actions/initial-state-loaded';

export const replyClientActions: Middleware = (store: Store<AppState>) => (next: Dispatch<Action>) => {
  listenToClientActions((action) => {
    if (isLoadInitialStateAction(action)) {
      console.log('Initial state loaded.');
      store.dispatch(initialStateLoadedAction(store.getState().auth.isLoggedIn));
      return;
    }
    console.log('Dispatching action from client:', action);
    store.dispatch(action);
  });
  return next;
};
