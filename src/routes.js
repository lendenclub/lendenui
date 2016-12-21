import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

/* Container Imports */
import App from './containers/App';
import Index from './components/Index';
import Login from './containers/login/Login';

// Provider gets the store and passes it down to the children and grandchildren components
//Index route is the base route - we need to see if its needed
const routes = (
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={App}>
                <IndexRoute component={Index}></IndexRoute>
                <Route path='/login' component={Login}></Route>
            </Route>
        </Router>
    </Provider>
);

export default routes;
