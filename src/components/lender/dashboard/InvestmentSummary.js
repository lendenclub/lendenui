import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import { styleConstants } from '../../../utils/StyleConstants';

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
            sectionStyle = isMobile ? sectionMobileStyle : {};

        return (
            <Card style={cardStyle} className="investment-summary">
                <div style={headerStyle}>Investment Summary</div>

                <div className="section-container" style={sectionStyle}>
                    <div className="section">
                        <div className="header">Investments</div>
                        <div className="content-container">
                            <div className="content">
                                <div className="key-label">Total Amount Invested</div>
                                <div className="value-label">₹ 100,000</div>
                            </div>
                            <div className="content">
                                <div className="key-label">Expected Interest</div>
                                <div className="value-label">₹ 10,000</div>
                            </div>
                            <div className="content">
                                <div className="key-label">Total Expected Returns</div>
                                <div className="value-label">₹ 100,000</div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <div className="header">Receipts</div>
                        <div className="content-container">
                            <div className="content">
                                <div className="key-label">Principal</div>
                                <div className="value-label">₹ 100,000</div>
                            </div>
                            <div className="content">
                                <div className="key-label">Interest</div>
                                <div className="value-label">₹ 10,000</div>
                            </div>
                            <div className="content">
                                <div className="key-label">Returns</div>
                                <div className="value-label">₹ 100,000</div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <div className="header">Outstanding</div>
                        <div className="content-container">
                            <div className="content">
                                <div className="key-label">Principal</div>
                                <div className="value-label">₹ 100,000</div>
                            </div>
                            <div className="content">
                                <div className="key-label">Interest</div>
                                <div className="value-label">₹ 10,000</div>
                            </div>
                            <div className="content">
                                <div className="key-label">Returns</div>
                                <div className="value-label">₹ 100,000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        );
    }
}

export default InvestmentSummary;
