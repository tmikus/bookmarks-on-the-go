import {
  ThunkAction,
  ThunkDispatch,
} from 'redux-thunk';
import { AppState } from './reducers';

export interface Action<T extends string = string> {
  type: T;
}

export type AsyncAction = ThunkAction<any, AppState, any, Action>;

export type Dispatch = ThunkDispatch<any, any, Action>;
