import React, { Component } from 'react';
import AccountBalance from '../../components/lender/dashboard/AccountBalance';
import AnnualizedReturns from '../../components/lender/dashboard/AnnualizedReturns';
import SuggestedProfiles from '../../components/lender/dashboard/SuggestedProfiles';
import InvestmentSummary from '../../components/lender/dashboard/InvestmentSummary';
import ProfileAssetAllocation from '../../components/lender/dashboard/ProfileAssetAllocation';
import MonthlySplit from '../../components/lender/dashboard/MonthlySplit';
import MyInvestments from '../../components/lender/dashboard/MyInvestments';
import PortfolioSummary from '../../components/lender/dashboard/PortfolioSummary';
import ReferCode from '../../components/lender/dashboard/ReferCode';
import Transactions from '../../components/lender/dashboard/Transactions';
import { Row, Col } from 'react-flexbox-grid';

const desktopDashboardStyle = {
    margin: '15px'
}

const defaultRowStyle = {
    alignItems: 'stretch',
    marginBottom: '30px'
}

class Dashboard extends Component {
    componentWillMount () {
        this.props.fetchDashboardData();
    }

    render () {
        let isMobile = this.props.isMobile,
            dashboardStyle = isMobile ? {} : desktopDashboardStyle,
            colStyle = isMobile ? { marginBottom: '15px' } : {},
            rowStyle = isMobile ? {...defaultRowStyle, marginBottom: 0} : defaultRowStyle,
            {   annual_average_return: annualizedReturn,
                suggested_profiles: suggestedProfiles,
                referral_code: referralCode,
                roi: investmentSummary,
                portfolio: portfolioAssetAllocation,
                monthly_investments: monthlyInvestments,
                monthly_repayments: monthlyRepayments,
                investment_status_counts: myInvestments,
                portfolio_summary: portfolioSummary,
                transactions,
                total_investment: totalInvestment
            } = this.props.lender.dashboardData;

        return (
            <div style={dashboardStyle}>
                <Row style={rowStyle}>
                    <Col lg={3} xs={12} style={colStyle}>
                        <AccountBalance />
                    </Col>
                    <Col lg={3} xs={12} style={colStyle}>
                        <AnnualizedReturns totalInvestment={totalInvestment} annualizedReturn={annualizedReturn} />
                    </Col>
                    <Col lg={3} xs={12} style={colStyle}>
                        <SuggestedProfiles suggestedProfiles={suggestedProfiles} />
                    </Col>
                    <Col lg={3} xs={12} style={colStyle}>
                        <ReferCode referralCode={referralCode} />
                    </Col>
                </Row>

                <Row style={rowStyle}>
                    <Col lg={12} xs={12} style={colStyle}>
                        <InvestmentSummary investmentSummary={investmentSummary} isMobile={isMobile}/>
                    </Col>
                </Row>

                <Row style={rowStyle}>
                    <Col lg={3} xs={12} style={colStyle}>
                        <ProfileAssetAllocation portfolioAssetAllocation={portfolioAssetAllocation} />
                    </Col>
                    <Col lg={6} xs={12} style={colStyle}>
                        <MonthlySplit isMobile={isMobile} monthlyInvestments={monthlyInvestments} monthlyRepayments={monthlyRepayments} />
                    </Col>
                    <Col lg={3} xs={12} style={colStyle}>
                        <MyInvestments myInvestments={myInvestments} />
                    </Col>
                </Row>

                <Row style={rowStyle}>
                    <Col lg={6} xs={12} style={colStyle}>
                        <PortfolioSummary portfolioSummary={portfolioSummary} />
                    </Col>
                    <Col lg={6} xs={12} style={colStyle}>
                        <Transactions transactions={transactions} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;
