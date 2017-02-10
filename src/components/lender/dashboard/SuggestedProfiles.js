import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import { styleConstants } from '../../../utils/StyleConstants';
import { Row, Col } from 'react-flexbox-grid';
import ProgressBar from '../../ProgressBar';
import { RiskColors } from '../../../utils/RiskColors';
import numeral from 'numeral';
import WebComponent from '../../WebComponent';
import MobileComponent from '../../MobileComponent';

/* STYLES */
const cardStyle = {
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

const investCardStyle = {
    margin: '10px',
    backgroundColor: styleConstants.bodyBackgroundColor
}

const cardHeaderStyle = {
    position: 'relative',
    color: styleConstants.textHeaderGrey
}

const headerLabel = {
    padding: '10px 20px',
    display: 'inline-block'
}

const interestLabel = {
    float: 'right',
    padding: '10px'
}

const cardContent = {
    padding: '10px'
}

const keyValueHolder = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px 0',
    color: styleConstants.textHeaderGrey
}

/* Components */
const HeaderRow = () => {
    return (
        <Row className="suggested-profiles-header-row">
            <Col lg={4}>Interest Rate</Col>
            <Col lg={4}>Tenure</Col>
            <Col lg={4}>Loan Amount</Col>
        </Row>
    )
}

const InvestViewRow = ({loan, riskIndicator, routeToBorrowerProfile}) => {
    riskIndicator.borderTopColor = RiskColors(loan.interest_rate);

    return (
        <Row className="invest-view-row" onClick={routeToBorrowerProfile}>
            <div style={riskIndicator}></div>
            <Col className="invest-column" lg={4}>{loan.interest_rate}%</Col>
            <Col className="invest-column" lg={4}>{loan.tenure} months</Col>
            <Col className="invest-column" lg={4}>
                ₹ {numeral(loan.amount).format('0,0.00')}
                <div className="progress-bar-container">
                    <ProgressBar max={loan.amount} value={loan.amount - loan.remaining} />
                </div>
            </Col>
        </Row>
    )
}

const InvestCard = ({loan, riskIndicator, routeToBorrowerProfile}) => {
    riskIndicator.borderTopColor = RiskColors(loan.interest_rate);

    return (
        <Card style={investCardStyle}>
            <div style={cardHeaderStyle} className="text-capitalize">
                <div style={riskIndicator}></div>
                <div style={headerLabel}> {loan.required_loan_id} - {loan.first_name} </div>
                <div style={interestLabel}> {loan.interest_rate}% </div>
            </div>
            <ProgressBar max={loan.amount} value={loan.amount - 50000} />
            <div style={cardContent}>
                <div style={keyValueHolder}>
                    <div>Loan Amount:</div> <div>₹ {numeral(loan.amount).format('0,0.00')}</div>
                </div>
                <div style={keyValueHolder}>
                    <div>Tenure:</div> <div>{loan.tenure} months</div>
                </div>
            </div>
        </Card>
    );
}




class SuggestedProfiles extends Component {
    routeToBorrowerProfile = () => {
        //This will be the loan object - use it to route to borrower profile
    }

    render () {
        let suggestedProfiles = this.props.suggestedProfiles || [];

        return (
            <Card style={cardStyle} className="suggested-profiles">
                <div style={headerStyle}>Suggested Live Profiles</div>

                <WebComponent>
                    <HeaderRow />
                </WebComponent>

                {suggestedProfiles.map( (loan, idx) => {
                    return (
                        <div key={idx}>
                            <WebComponent>
                                <InvestViewRow loan={loan} key={idx} riskIndicator={riskIndicator} routeToBorrowerProfile={this.routeToBorrowerProfile.bind(loan)}/>
                            </WebComponent>
                            <MobileComponent>
                                <InvestCard loan={loan} key={idx} riskIndicator={riskIndicator} routeToBorrowerProfile={this.routeToBorrowerProfile.bind(loan)}/>
                            </MobileComponent>
                        </div>
                    );
                })};
            </Card>
        );
    }
}

export default SuggestedProfiles;
