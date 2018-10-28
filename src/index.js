import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/App/AppContainer';
import { unregister } from './registerServiceWorker';
import store from './config/js/store';
import './index.css';

unregister();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
