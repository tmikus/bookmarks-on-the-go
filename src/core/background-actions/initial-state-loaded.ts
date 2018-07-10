import { Action } from '../types';

export interface InitialStateLoadedAction extends Action<'background:initial-state-loaded'> {
  isLoggedIn: boolean;
}

export function initialStateLoadedAction(isLoggedIn: boolean): InitialStateLoadedAction {
  return {
    type: 'background:initial-state-loaded',
    isLoggedIn,
  };
}

export function isInitialStateLoadedAction(action: Action): action is InitialStateLoadedAction {
  return action.type === 'background:initial-state-loaded';
}
