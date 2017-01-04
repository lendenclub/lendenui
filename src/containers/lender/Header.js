import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';

const style = {
    color: 'inherit'
};

class Header extends Component {
    render () {
        return (
            <Paper className="lender-header" style={style} zDepth={1}>
                <div className="user-circle">
                    <Avatar
                        icon={<FontIcon className="material-icons">person</FontIcon>}
                    />
                </div>

                <div className="amount-balance">
                    <div>My Balance</div>
                    <div className="amount">₹ 80,000</div>
                </div>
            </Paper>
        );
    }
}

export default Header;
