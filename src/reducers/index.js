import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import app from './app';
import login from './login';
import lender from './lender';

const rootReducer = combineReducers({app, login, lender, routing: routerReducer});

export default rootReducer;
