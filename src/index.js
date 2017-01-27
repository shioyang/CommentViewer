import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducers from './reducers';
import './index.css';
import data from './data';

const store = createStore(reducers, data);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
