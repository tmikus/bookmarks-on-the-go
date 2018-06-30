import {
  combineReducers,
  Reducer,
} from 'redux';
import {
  auth,
  AuthState,
} from './auth';

export interface Action {
  type: string;
}

export interface AppState {
  auth: AuthState;
}

export const reducers: Reducer<AppState> = combineReducers({
  auth,
});