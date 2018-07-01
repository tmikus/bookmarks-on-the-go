import { combineReducers } from 'redux';
import { login } from './login';

export const views = combineReducers({
  login,
});
