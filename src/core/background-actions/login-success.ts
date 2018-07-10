import { Action } from '../types';

export interface LoginSuccessAction extends Action<'background:auth:login:success'> {
}

export function loginSuccessAction(): LoginSuccessAction {
  return { type: 'background:auth:login:success' };
}

export function isLoginSuccessAction(action: Action): action is LoginSuccessAction {
  return action.type === 'background:auth:login:success';
}
