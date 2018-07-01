import { Action } from '.';

export interface AuthState {
  isLoggedIn: boolean;
}

const defaultAuthState: AuthState = {
  isLoggedIn: false,
};

export const auth = (state: AuthState = defaultAuthState, action: Action): AuthState => {
  switch (action.type) {
    default: return state;
  }
};
