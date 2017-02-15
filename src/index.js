import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';
import reducers from './reducers';
import './index.css';
import data from './data';

const store = createStore(reducers, data);

const MuiApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

render(
  <Provider store={store}>
    <MuiApp />
  </Provider>,
  document.getElementById('root')
);
