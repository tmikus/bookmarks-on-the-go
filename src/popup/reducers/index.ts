import {
  combineReducers,
  Reducer,
} from 'redux';
import {
  auth,
  AuthState,
} from './auth';
import {
  navigation,
  NavigationState,
} from './navigation';
import { views } from './views';
import { LoginState } from './views/login';

export interface Action {
  type: string;
  value: string;
}

export interface AppState {
  auth: AuthState;
  navigation: NavigationState;
  views: {
    login: LoginState;
  };
}

export const reducers: Reducer<AppState> = combineReducers({
  auth,
  navigation,
  views,
});
