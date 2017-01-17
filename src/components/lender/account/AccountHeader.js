import React, { Component } from 'react';
import IconKeyValueCard from './IconKeyValueCard';
import { Row, Col } from 'react-flexbox-grid';
import FontIcon from 'material-ui/FontIcon';
import { styleConstants } from '../../../utils/StyleConstants';

const cardDesktopStyle = {
    margin: '0 15px',
    backgroundColor: styleConstants.cardBGColor
}

const cardMobileStyle = {
    ...cardDesktopStyle,
    margin: '0 5px',
    borderRadius: 0
}

const fontStyle = {
    fontSize: '35px'
}

class AccountHeader extends Component {
    render () {
        let cardStyle = this.props.isMobile ? cardMobileStyle : cardDesktopStyle;

        return (
            <div className="account-header">
                <Row>
                    <Col lg={3} xs={12}>
                        <IconKeyValueCard style={cardStyle} color='#29ABD7' keyLabel="Account Balance" value="₹ 1,75,000" icon={<FontIcon className="material-icons close-icon" style={fontStyle}>timelapse</FontIcon>} isMobile={this.props.isMobile}/>
                    </Col>
                    <Col lg={3} xs={12}>
                        <IconKeyValueCard style={cardStyle} color='#6CBD2E' keyLabel="Addition in Process" value="₹ 25,000" icon={<FontIcon className="material-icons close-icon" style={fontStyle}>timelapse</FontIcon>} isMobile={this.props.isMobile}/>
                    </Col>
                    <Col lg={3} xs={12}>
                        <IconKeyValueCard style={cardStyle} color='#F18F30' keyLabel="Withdrawal in Process" value="₹ 25,000" icon={<FontIcon className="material-icons close-icon" style={fontStyle}>timelapse</FontIcon>} isMobile={this.props.isMobile}/>
                    </Col>
                    <Col lg={3} xs={12}>
                        <IconKeyValueCard style={cardStyle} color='#2FD6C4' keyLabel="Total Available Balance" value="₹ 1,25,000" icon={<FontIcon className="material-icons close-icon" style={fontStyle}>timelapse</FontIcon>} isMobile={this.props.isMobile}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AccountHeader;
