import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { App } from './components';
import { reducers } from './reducers';
import { replyBackgroundActions } from './middlewares/reply-background-actions';
import { transmitActions } from './middlewares/transmit-actions';
import { loadInitialStateAction } from '../core/client-actions/load-initial-state';

const store = createStore(
  reducers,
  applyMiddleware(thunk, replyBackgroundActions, transmitActions),
);
store.dispatch(loadInitialStateAction());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("container"));
