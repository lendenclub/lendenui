import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import { styleConstants, cardStyle, cardHeaderStyle } from '../../../utils/StyleConstants';
import { RiskColors } from '../../../utils/RiskColors';
import { Link } from 'react-router';

/* STYLES */
const cardStyleSuggestedProfiles = {
    ...cardStyle,
    backgroundColor: styleConstants.headerBgColor
}

const headerStyle = {
    ...cardHeaderStyle,
    color: styleConstants.textWhite
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
    margin: '0 10px 10px 10px',
    padding: 10,
    position: 'relative',
    backgroundColor: styleConstants.textWhite
}

const keyValueHolder = {
    display: 'flex',
    justifyContent: 'space-between',
    color: styleConstants.textHeaderGrey
}

const keyStyle = {
    color: styleConstants.grayDark,
    paddingBottom: 5
}

const valueStyle = {
    color: styleConstants.grayDarker,
    paddingBottom: 5
}

/* Components */
const InvestCard = ({loan, routeToBorrowerProfile}) => {
    let loanRoute = `/app/lender/invest/${loan.required_loan_id}`;
    riskIndicator.borderTopColor = RiskColors(loan.interest_rate);

    return (
        <Card style={investCardStyle}>
            <div className="text-capitalize">
                <div style={riskIndicator}></div>
                <div style={keyValueHolder}>
                    <div style={keyStyle}>Interest Rate</div>
                    <div style={valueStyle}>{loan.interest_rate}%</div>
                </div>
                <div style={keyValueHolder}>
                    <div style={keyStyle}>Tenure</div>
                    <div style={valueStyle}>{loan.tenure} months</div>
                </div>
            </div>
            <div className="text-align-right">
                <Link className="href-link" to={loanRoute}> View Profile </Link>
            </div>
        </Card>
    );
}




class SuggestedProfiles extends Component {
    routeToBorrowerProfile = () => {
        //This will be the loan object - use it to route to borrower profile
    }

    render () {
        let suggestedProfiles = this.props.suggestedProfiles || [],
            investRoute = '/app/lender/invest';

        return (
            <Card style={cardStyleSuggestedProfiles} className="suggested-profiles">
                <div style={keyValueHolder}>
                    <div style={headerStyle}>Suggested Live Profiles</div>
                    <div style={headerStyle}><Link style={ {color: styleConstants.textWhite} } className="href-link" to={investRoute}> View All </Link></div>
                </div>

                {suggestedProfiles.map( (loan, idx) => {
                    return (
                        <div key={idx}>
                            <InvestCard loan={loan} key={idx} routeToBorrowerProfile={this.routeToBorrowerProfile.bind(loan)}/>
                        </div>
                    );
                })};
            </Card>
        );
    }
}

export default SuggestedProfiles;
