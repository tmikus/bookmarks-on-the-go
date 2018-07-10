import { Action } from '../types';

export interface LoggedOutAction extends Action<'background:auth:logged-out'> {
}

export function loggedOutAction(): LoggedOutAction {
  return { type: 'background:auth:logged-out' };
}

export function isLoggedOutAction(action: Action): action is LoggedOutAction {
  return action.type === 'background:auth:logged-out';
}
