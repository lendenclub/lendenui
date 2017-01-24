import React from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

/* Container Imports */
import Main from './containers/Main';
import App from './containers/App';
// import Index from './components/Index';
import Login from './containers/login/Login';

// Lender Imports
import Lender from './containers/lender/Lender';
import Invest from './containers/lender/Invest';
import Dashboard from './containers/lender/Dashboard';
import MyInvestments from './containers/lender/MyInvestments';
import Account from './containers/lender/Account';
import LoanProfile from './containers/lender/LoanProfile';


// Provider gets the store and passes it down to the children and grandchildren components
//Index route is the base route - we need to see if its needed
const routes = (
    <Provider store={store}>
        <Router history={history}>

            <Route path="/" component={Main}>

                <Route path='/login' component={Login}></Route>

                {/* Lender Routes */}
                <Route path='app' component={App}>
                    <Route path='lender' component={Lender}>
                        <Route path="invest" component={Invest}></Route>
                        <Route path='invest/:loan_id' component={LoanProfile}></Route>
                        <Route path="dashboard" component={Dashboard}></Route>
                        <Route path="my-investments" component={MyInvestments}></Route>
                        <Route path="account" component={Account}></Route>
                    </Route>
                </Route>

            </Route>

        </Router>
    </Provider>
);

export default routes;



/*
    <Route path='/' component={RootApp}>

        --> Info website all packaged under an app <Info> - It will have sub routes that point to components
        <Route path='/info' component={Info}>
            <Header>

            <Route path='/info/howItWorks' component={HowitWorks}></Route>
        </Route>

        --> Login Signup and registration flow routes
        <Route path='/login' component={Login}></Route>
        <Route path='/signup' component={SignUp}></Route>
        <Route path='/register' component={Register}></Route>

        --> Post login app
        <Route path='/app' component={App}>

            --> Lender App
            <Route path='/app/lender' component={Lender}>
                <Header>
                <LeftNav context="lender">

                <Route path='/app/lender/invest' component={Invest}></Route>
                <Route path='/app/lender/dashboard' component={Dashboard}></Route>
                <Route path='/app/lender/loanOffer' component={LoanOffer}></Route>
                <Route path='/app/lender/refer' component={Refer}></Route>
            </Route>

            --> Borrower App
        </Route>
    </Route>


*/
