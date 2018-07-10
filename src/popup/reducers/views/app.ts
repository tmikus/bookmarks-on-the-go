import { Action } from '../../../core/types';

export interface AppViewState {
  isInitialised: boolean;
  isInitialising: boolean;
}

export const defaultAppViewState: AppViewState = {
  isInitialised: false,
  isInitialising: false,
};

export const app = (state: AppViewState = defaultAppViewState, action: Action): AppViewState => {
  return state;
};

