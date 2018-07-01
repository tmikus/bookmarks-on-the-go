import { Action } from 'redux';

export interface NavigationState {
  view: string;
}

const defaultNavigationState: NavigationState = {
  view: 'login',
};

export const navigation = (state: NavigationState = defaultNavigationState, action: Action): NavigationState => {
  switch (action.type) {
    default: return state;
  }
};
