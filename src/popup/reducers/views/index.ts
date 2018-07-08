import { combineReducers } from 'redux';
import { app } from './app';
import { login } from './login';

export const views = combineReducers({
  app,
  login,
});
