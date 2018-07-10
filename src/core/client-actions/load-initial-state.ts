import { Action } from '../types';

export interface LoadInitialStateAction extends Action<'client:load-initial-state'> {
}

export function loadInitialStateAction(): LoadInitialStateAction {
  return { type: 'client:load-initial-state' };
}

export function isLoadInitialStateAction(action: Action): action is LoadInitialStateAction {
  return action.type === 'client:load-initial-state';
}
