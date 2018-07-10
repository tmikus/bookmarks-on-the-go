import { Action } from '../types';

export interface LoginFailedAction extends Action<'background:auth:login:failed'> {
  message: string;
}

export function loginFailedAction(message: string): LoginFailedAction {
  return {
    type: 'background:auth:login:failed',
    message,
  };
}

export function isLoginFailedAction(action: Action): action is LoginFailedAction {
  return action.type === 'background:auth:login:failed';
}
