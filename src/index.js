import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import reducers from './reducers';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(
	promise,
  reduxThunk
)(createStore);

const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if (token) {
  // Update application state
  store.dispatch({ type: AUTH_USER });
}
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.getElementById('renderhere'));
