import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
import MobileComponent from '../MobileComponent';
import { styleConstants } from '../../utils/StyleConstants';

const style = {
    color: 'inherit',
    boxShadow: 'none'
};

const navigatorStyle = {
    padding: 0,
    height: styleConstants.headerHeight,
    width: styleConstants.headerHeight,
    cursor: 'pointer'
}

const personIconStyle = {
    color: styleConstants.headerBgColor
}

class Header extends Component {
    componentWillMount () {
        // this.fetchUser();
    }

    render () {
        return (
            <Paper className="lender-header" style={style} zDepth={1}>
                <MobileComponent>
                    <IconButton style={navigatorStyle} touch={true} onClick={this.props.toggleLeftNav}>
                        <FontIcon className="material-icons">menu</FontIcon>
                    </IconButton>
                </MobileComponent>
                <div className="user-circle">
                    <Avatar
                        icon={<FontIcon className="material-icons" style={personIconStyle}>person</FontIcon>}
                        backgroundColor={styleConstants.textWhite}
                    />
                </div>

                <div className="amount-balance">
                    <div>My Balance</div>
                    <div className="amount">₹ 80,000</div>
                </div>
            </Paper>
        )
    }
}

export default Header;
