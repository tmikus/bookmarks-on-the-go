import { sendAction } from '../connection';
import {
  Dispatch,
  Middleware,
  Store,
} from 'redux';
import { Action } from '../../core/types';

export const transmitActions: Middleware = (store: Store) => (next: Dispatch<Action>) => (action: Action) => {
  if (action.type.startsWith('client:')) {
    console.log('Sending client action to background script:', action);
    sendAction(action);
  }
  return next(action);
};
