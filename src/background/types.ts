import {
  ThunkAction,
  ThunkDispatch,
} from 'redux-thunk';
import { AppState } from './reducers';
import { Action } from '../core/types';

export type AsyncAction = ThunkAction<any, AppState, any, Action>;

export type Dispatch = ThunkDispatch<any, any, Action>;
