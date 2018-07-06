import {
  combineReducers,
  Reducer,
} from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
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

export interface Action<T extends string = string> {
  type: T;
}

export type AsyncAction = ThunkAction<any, any, any, Action>;

export type AnyAction = Action | AsyncAction;

export type Dispatch = ThunkDispatch<any, any, Action>;

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
