import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import { createInitAction } from './reducers/init';

const store = createStore(reducers, applyMiddleware(thunk));
store.dispatch(createInitAction() as any);
