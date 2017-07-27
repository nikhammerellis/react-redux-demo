import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

import restaurant_settings from '../components/Restaurant/reducers'


const rootReducer = combineReducers({
  restaurant_settings,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;
