import React from 'react';
import promiseMiddleware from 'redux-promise';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';

// Configure middleware with redux-promise for AJAX requests
const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
