import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Route path="/" component={App}>
      </Route>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
