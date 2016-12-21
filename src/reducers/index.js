import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import app from './app';
import login from './login'

const rootReducer = combineReducers({app, login, routing: routerReducer});

export default rootReducer;
