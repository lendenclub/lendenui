import React, { Component } from 'react';
import AccountHeader from '../../components/lender/account/AccountHeader';
import AccountHistory from '../../components/lender/account/AccountHistory';
import AddFunds from '../../components/lender/account/AddFunds';
import WithdrawFunds from '../../components/lender/account/WithdrawFunds';
import { Row, Col } from 'react-flexbox-grid';
import { styleConstants } from '../../utils/StyleConstants';
import FontIcon from 'material-ui/FontIcon';
import WebComponent from '../../components/WebComponent';
import MobileComponent from '../../components/MobileComponent';

const cardDesktopStyle = {
    margin: '0 15px',
    backgroundColor: styleConstants.cardBGColor
}

const cardMobileStyle = {
    ...cardDesktopStyle,
    margin: '0 5px'
}

const withdrawFundsDesktopStyle = {
    ...cardDesktopStyle,
    marginTop: '20px'
}

const withdrawFundsMobileStyle = {
    ...cardMobileStyle,
    marginTop: '20px'
}

const addFundsDesktopStyle = {
    ...cardDesktopStyle
}

const addFundsMobileStyle = {
    ...withdrawFundsMobileStyle
}

const accountHistoryDesktopStyle = {
    ...cardDesktopStyle
}

const accountHistoryMobileStyle = {
    ...withdrawFundsMobileStyle
}

class Account extends Component {
    componentWillMount () {
        this.props.fetchAccountInfo();
    }

    render () {
        let history = this.props.lender.accountInfo.history || [],
            isMobile = this.props.isMobile,
            cardStyle = isMobile ? cardMobileStyle : cardDesktopStyle,
            addFundsStyle = isMobile ? addFundsMobileStyle : addFundsDesktopStyle,
            withdrawFundsStyle = isMobile ? withdrawFundsMobileStyle : withdrawFundsDesktopStyle,
            accountHistoryStyle = isMobile ? accountHistoryMobileStyle : accountHistoryDesktopStyle;

        return (
            <div>
                <WebComponent>
                    <div className="account">
                        <AccountHeader />
                        <Row style={{marginTop: '40px'}}>
                            <Col lg={9}>
                                <AccountHistory history={history} style={accountHistoryStyle}/>
                            </Col>

                            <Col lg={3}>
                                <AddFunds style={addFundsStyle}/>
                                <WithdrawFunds style={withdrawFundsStyle}/>
                            </Col>
                        </Row>
                    </div>
                </WebComponent>
                <MobileComponent>
                    <div>
                        <AccountHeader isMobile={this.props.isMobile}/>
                        <AddFunds style={addFundsStyle}/>
                        <WithdrawFunds style={withdrawFundsStyle}/>
                        <AccountHistory history={history} style={accountHistoryStyle}/>
                    </div>
                </MobileComponent>
            </div>
        );
    }
}

export default Account;
