import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import logo from '../../assets/Logo-lendenclub.png';
import {List, ListItem} from 'material-ui/List';

const iconStyle = {
    color: '#6E7580'
}

const leftNavDrawerStyle = {
    backgroundColor: '#1A2225'
}

const listStyle = {
    padding: '0px'
}

class LeftNav extends Component {
    render () {
        return (
            <Drawer style={leftNavDrawerStyle} width={80}>
                <div  className="lender-left-nav">
                    <div className="app-logo">
                        <img src={logo} alt="logo" />
                    </div>

                    <List style={listStyle}>
                        <ListItem className="nav-list-item">
                            <Link to={'/app/lender/invest'} activeClassName="active" className="left-nav-item">
                                <FontIcon className="material-icons" style={iconStyle}>format_list_bulleted</FontIcon> <span className="tooltip">Invest</span>
                            </Link>
                        </ListItem>
                        <ListItem className="nav-list-item">
                            <Link to={'/app/lender/dashboard'} activeClassName="active" className="left-nav-item">
                                <FontIcon className="material-icons" style={iconStyle}>dashboard</FontIcon> <span className="tooltip">Dashboard</span>
                            </Link>
                        </ListItem>
                        <ListItem className="nav-list-item">
                            <Link to={'/app/lender/loan-offer-status'} activeClassName="active" className="left-nav-item">
                                <FontIcon className="material-icons" style={iconStyle}>repeat_one</FontIcon> <span className="tooltip">Loan Offer Status</span>
                            </Link>
                        </ListItem>
                        <ListItem className="nav-list-item">
                            <Link to={'/app/lender/refer-and-earn'} activeClassName="active" className="left-nav-item">
                                <FontIcon className="material-icons" style={iconStyle}>person_add</FontIcon> <span className="tooltip">Refer and Earn</span>
                            </Link>
                        </ListItem>
                        <ListItem className="nav-list-item">
                            <Link to={'/app/lender/account'} activeClassName="active" className="left-nav-item">
                                <FontIcon className="material-icons" style={iconStyle}>account_balance_wallet</FontIcon> <span className="tooltip">Account</span>
                            </Link>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        );
    }
}

export default LeftNav;
