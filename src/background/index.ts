import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import { initAction } from './reducers/init';
import { replyClientActions } from './middlewares/reply-client-actions';
import { transmitActions } from './middlewares/transmit-actions';

const store = createStore(
  reducers,
  applyMiddleware(thunk, replyClientActions, transmitActions),
);
store.dispatch(initAction() as any);

console.log('Hello world');
