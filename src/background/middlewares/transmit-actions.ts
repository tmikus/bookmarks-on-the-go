import { sendAction } from '../connection';
import {
  Dispatch,
  Middleware,
  Store,
} from 'redux';
import { Action } from '../../core/types';

export const transmitActions: Middleware = (store: Store) => (next: Dispatch<Action>) => (action: Action) => {
  if (action.type.startsWith('background:')) {
    console.log('Sending background action to client:', action);
    sendAction(action);
  }
  return next(action);
};
