import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
// import Paper from 'material-ui/Paper';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import logo from '../../assets/Logo-lendenclub.png';

const iconStyle = {
    color: '#6E7580'
}

const leftNavDrawerStyle = {
    backgroundColor: '#1A2225'
}

class LeftNav extends Component {
    render () {
        return (
            <Drawer style={leftNavDrawerStyle}>
                <div  className="lender-left-nav">
                    <div className="app-logo">
                        <img src={logo} alt="logo" />
                    </div>

                    <Link to={'/app/lender/invest'} activeClassName="active" className="left-nav-item">
                        <FontIcon className="material-icons" style={iconStyle}>format_list_bulleted</FontIcon> <span className="label">Invest</span>
                    </Link>
                    <Link to={'/app/lender/dashboard'} activeClassName="active" className="left-nav-item">
                        <FontIcon className="material-icons" style={iconStyle}>dashboard</FontIcon> <span className="label">Dashboard</span>
                    </Link>
                    <Link to={'/app/lender/loan-offer-status'} activeClassName="active" className="left-nav-item">
                        <FontIcon className="material-icons" style={iconStyle}>repeat_one</FontIcon> <span className="label">Loan Offer Status</span>
                    </Link>
                    <Link to={'/app/lender/refer-and-earn'} activeClassName="active" className="left-nav-item">
                        <FontIcon className="material-icons" style={iconStyle}>person_add</FontIcon> <span className="label">Refer and Earn</span>
                    </Link>
                    <Link to={'/app/lender/account'} activeClassName="active" className="left-nav-item">
                        <FontIcon className="material-icons" style={iconStyle}>account_balance_wallet</FontIcon> <span className="label">Account</span>
                    </Link>
                </div>
            </Drawer>
        );
    }
}

export default LeftNav;
