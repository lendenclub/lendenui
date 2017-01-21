import React, { Component } from 'react';
import AccountBalance from '../../components/lender/dashboard/AccountBalance';
import AnnualizedReturns from '../../components/lender/dashboard/AnnualizedReturns';
import SuggestedProfiles from '../../components/lender/dashboard/SuggestedProfiles';
import InvestmentSummary from '../../components/lender/dashboard/InvestmentSummary';
import ProfileAssetAllocation from '../../components/lender/dashboard/ProfileAssetAllocation';
import MonthlySplit from '../../components/lender/dashboard/MonthlySplit';
import MyInvestments from '../../components/lender/dashboard/MyInvestments';
import PortfolioSummary from '../../components/lender/dashboard/PortfolioSummary';
import { Row, Col } from 'react-flexbox-grid';

const desktopDashboardStyle = {
    margin: '15px'
}

const defaultRowStyle = {
    alignItems: 'stretch',
    marginBottom: '30px'
}

class Dashboard extends Component {
    render () {
        let isMobile = this.props.isMobile,
            dashboardStyle = isMobile ? {} : desktopDashboardStyle,
            colStyle = isMobile ? { marginBottom: '15px' } : {},
            rowStyle = isMobile ? {...defaultRowStyle, marginBottom: 0} : defaultRowStyle;

        return (
            <div style={dashboardStyle}>
                <Row style={rowStyle}>
                    <Col lg={3} xs={12} style={colStyle}>
                        <AccountBalance />
                    </Col>
                    <Col lg={3} xs={12} style={colStyle}>
                        <AnnualizedReturns />
                    </Col>
                    <Col lg={6} xs={12} style={colStyle}>
                        <SuggestedProfiles />
                    </Col>
                </Row>

                <Row style={rowStyle}>
                    <Col lg={12} xs={12} style={colStyle}>
                        <InvestmentSummary isMobile={isMobile}/>
                    </Col>
                </Row>

                <Row style={rowStyle}>
                    <Col lg={3} xs={12} style={colStyle}>
                        <ProfileAssetAllocation />
                    </Col>
                    <Col lg={6} xs={12} style={colStyle}>
                        <MonthlySplit isMobile={isMobile}/>
                    </Col>
                    <Col lg={3} xs={12} style={colStyle}>
                        <MyInvestments />
                    </Col>
                </Row>

                <Row style={rowStyle}>
                    <Col lg={6} xs={12} style={colStyle}>
                        <PortfolioSummary />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;
