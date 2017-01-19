import React, { Component } from 'react';
import AccountBalance from '../../components/lender/dashboard/AccountBalance';
import AnnualizedReturns from '../../components/lender/dashboard/AnnualizedReturns';
import SuggestedProfiles from '../../components/lender/dashboard/SuggestedProfiles';
import InvestmentSummary from '../../components/lender/dashboard/InvestmentSummary';
import { Row, Col } from 'react-flexbox-grid';

const rowStyle = {
    alignItems: 'stretch'
}

class Dashboard extends Component {
    render () {
        return (
            <div className="dashboard">
                <Row style={rowStyle}>
                    <Col lg={3} xs={12}>
                        <AccountBalance />
                    </Col>
                    <Col lg={3}>
                        <AnnualizedReturns />
                    </Col>
                    <Col lg={6}>
                        <SuggestedProfiles />
                    </Col>
                </Row>

                <Row style={rowStyle}>
                    <Col lg={12}>
                        <InvestmentSummary />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;
