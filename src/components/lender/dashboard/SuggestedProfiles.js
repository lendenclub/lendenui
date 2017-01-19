import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import { styleConstants } from '../../../utils/StyleConstants';
import { Row, Col } from 'react-flexbox-grid';
import ProgressBar from '../../ProgressBar';
import { RiskColors } from '../../../utils/RiskColors';
import numeral from 'numeral';

const mockData = [
    { "required_loan_id": "4F57CT4K", "amount": 125000.0, "interest_rate": 22.0, "remaining": 50000, "tenure": 12 },
    { "required_loan_id": "4F57CT4K", "amount": 125000.0, "interest_rate": 16.0, "remaining": 50000, "tenure": 12 },
    { "required_loan_id": "4F57CT4K", "amount": 125000.0, "interest_rate": 35.0, "remaining": 50000, "tenure": 12 }
]

const cardStyle = {
    margin: '0 5px',
    backgroundColor: styleConstants.cardBGColor
}

const headerStyle = {
    padding: '15px',
    color: styleConstants.textHeaderGrey
}

const riskIndicator = {
    position: 'absolute',
    width: 0,
	height: 0,
    top: 0,
    left: 0,
	borderTopWidth: '20px',
    borderTopStyle: 'solid',
	borderRight: '20px solid transparent'
}


const HeaderRow = () => {
    return (
        <Row className="header-row">
            <Col lg={2}>Interest Rate</Col>
            <Col lg={2}>Tenure</Col>
            <Col lg={3}>Loan Amount</Col>
            <Col lg={3}>Remaining Amount</Col>
        </Row>
    )
}

const InvestViewRow = ({loan, riskIndicator, routeToBorrowerProfile}) => {
    riskIndicator.borderTopColor = RiskColors(loan.interest_rate);

    return (
        <Row className="invest-view-row" onClick={routeToBorrowerProfile}>
            <div style={riskIndicator}></div>
            <Col className="invest-column" lg={2}>{loan.interest_rate}%</Col>
            <Col className="invest-column" lg={2}>{loan.tenure} months</Col>
            <Col className="invest-column" lg={3}>
                ₹ {numeral(loan.amount).format('0,0.00')}
                <div className="progress-bar-container">
                    <ProgressBar max={loan.amount} value={loan.amount - loan.remaining} />
                </div>
            </Col>
            <Col className="invest-column" lg={3}>₹ {numeral(loan.remaining).format('0,0.00')}</Col>
        </Row>
    )
}

class SuggestedProfiles extends Component {
    routeToBorrowerProfile = () => {
        //This will be the loan object - use it to route to borrower profile
    }

    render () {
        return (
            <Card style={cardStyle} className="suggested-profiles">
                <div style={headerStyle}>Suggested Live Profiles</div>

                <HeaderRow />

                {mockData.map( (loan, idx) => {
                    return (
                        <InvestViewRow loan={loan} key={idx} riskIndicator={riskIndicator} routeToBorrowerProfile={this.routeToBorrowerProfile.bind(loan)}/>
                    );
                })};
            </Card>
        );
    }
}

export default SuggestedProfiles;
