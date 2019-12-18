import { createStore, compose, applyMiddleware } from 'redux';
import { save } from 'redux-localstorage-simple';

import rootReducer from '../reducers/';

export default preloadedState => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

  return createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(save({ namespace: 'todo-list' }))));
};
