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
import { AppViewState } from './views/app';
import { LoginState } from './views/login';
import { bookmarks, BookmarksState } from './bookmarks';

export interface Action<T extends string = string> {
  type: T;
}

export type AsyncAction = ThunkAction<any, AppState, any, Action>;

export type Dispatch = ThunkDispatch<any, any, Action>;

export interface AppState {
  auth: AuthState;
  bookmarks: BookmarksState;
  navigation: NavigationState;
  views: {
    app: AppViewState;
    login: LoginState;
  };
}

export const reducers: Reducer<AppState> = combineReducers({
  auth,
  bookmarks,
  navigation,
  views,
});
