import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import rootReducer from './reducers/index';


const store = createStore(rootReducer);

export const history = createBrowserHistory();

export default store;
