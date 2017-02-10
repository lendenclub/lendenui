import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import { styleConstants } from '../../../utils/StyleConstants';
import numeral from 'numeral';

const cardStyle = {
    backgroundColor: styleConstants.cardBGColor
}

const headerStyle = {
    padding: '15px',
    color: styleConstants.textHeaderGrey
}

const sectionMobileStyle = {
    flexDirection: 'column'
}

class InvestmentSummary extends Component {
    render () {
        let isMobile = this.props.isMobile,
            sectionStyle = isMobile ? sectionMobileStyle : {},
            investmentSummary = this.props.investmentSummary || {},
            totalExpectedReturns = investmentSummary.total_recievable_principal + investmentSummary.total_recievable_interest,
            totalReceiptReturns = investmentSummary.principal_recieved + investmentSummary.interest_recieved,
            totalOutstandingReturns = investmentSummary.principal_outstanding + investmentSummary.interest_outstanding;

        return (
            <Card style={cardStyle} className="investment-summary">
                <div style={headerStyle}>Investment Summary</div>

                <div className="section-container" style={sectionStyle}>
                    <div className="section">
                        <div className="header">Investments</div>
                        <div className="content-container">
                            <div className="content">
                                <div className="key-label">Total Amount Invested</div>
                                <div className="value-label">₹ {numeral(investmentSummary.total_recievable_principal).format('0,0.00')}</div>
                            </div>
                            <div className="content">
                                <div className="key-label">Expected Interest</div>
                                <div className="value-label">₹ {numeral(investmentSummary.total_recievable_interest).format('0,0.00')}</div>
                            </div>
                            <div className="content">
                                <div className="key-label">Total Expected Returns</div>
                                <div className="value-label">₹ {numeral(totalExpectedReturns).format('0,0.00')}</div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <div className="header">Receipts</div>
                        <div className="content-container">
                            <div className="content">
                                <div className="key-label">Principal</div>
                                <div className="value-label">₹ {numeral(investmentSummary.principal_recieved).format('0,0.00')}</div>
                            </div>
                            <div className="content">
                                <div className="key-label">Interest</div>
                                <div className="value-label">₹ {numeral(investmentSummary.interest_recieved).format('0,0.00')}</div>
                            </div>
                            <div className="content">
                                <div className="key-label">Returns</div>
                                <div className="value-label">₹ {numeral(totalReceiptReturns).format('0,0.00')}</div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <div className="header">Outstanding</div>
                        <div className="content-container">
                            <div className="content">
                                <div className="key-label">Principal</div>
                                <div className="value-label">₹ {numeral(investmentSummary.principal_outstanding).format('0,0.00')}</div>
                            </div>
                            <div className="content">
                                <div className="key-label">Interest</div>
                                <div className="value-label">₹ {numeral(investmentSummary.interest_outstanding).format('0,0.00')}</div>
                            </div>
                            <div className="content">
                                <div className="key-label">Returns</div>
                                <div className="value-label">₹ {numeral(totalOutstandingReturns).format('0,0.00')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        );
    }
}

export default InvestmentSummary;
