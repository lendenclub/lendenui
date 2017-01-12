import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import { styleConstants } from '../../../../utils/StyleConstants';
import { RiskColors } from '../../../../utils/RiskColors';
import ProgressBar from '../../../ProgressBar';
import numeral from 'numeral';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import InvestRowCollapsible from '../InvestRowCollapsible';

const cardStyle = {
    backgroundColor: styleConstants.lightGrayBGColor,
    color: styleConstants.textGrey,
    marginBottom: '10px'
}

const cardHeaderStyle = {
    position: 'relative'
}

const headerLabel = {
    padding: '10px 20px',
    display: 'inline-block'
}

const riskIndicator = {
    position: 'absolute',
    width: 0,
	height: 0,
	borderTopWidth: '25px',
    borderTopStyle: 'inset',
	borderRight: '25px solid transparent'
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
    padding: '5px 0'
}

const cardActionBar = {
    padding: '10px',
    textAlign: 'right',
    borderTop: `1px solid ${styleConstants.borderColor}`
}

const paperCollapsibleStyle = {
    color: 'inherit',
    backgroundColor: '#OD222B'
}

class InvestCard extends Component {
    computeRiskStyle = (interest) => {
        return RiskColors(interest);
    }

    onCardClicked = () => {
        this.props.toggleRowAction(this.props.loan.required_loan_id);
    }

    render () {
        let loan = this.props.loan,
            collapsiblePaperState = this.props.rowActive ? 'show-collapsible' : 'hide-collapsible',
            collapsiblePaperStyle = `collapsible-pane ${collapsiblePaperState}`;

        riskIndicator.borderTopColor = this.computeRiskStyle(loan.interest_rate);

        return (
            <Card style={cardStyle} className="invest-card">
                <div onClick={this.onCardClicked}>
                    <div style={cardHeaderStyle} className="text-capitalize">
                        <div style={riskIndicator}></div>
                        <div style={headerLabel}> {loan.required_loan_id} - {loan.user.first_name} </div>
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
                        <div style={keyValueHolder}>
                            <div>Loan Purpose:</div> <div className="text-capitalize flex-child-ellipsis">{loan.purpose.toLowerCase()}</div>
                        </div>
                    </div>
                </div>

                <Paper zDepth={1} style={paperCollapsibleStyle} className={collapsiblePaperStyle}>
                    <div className="collapsible-content">
                        <InvestRowCollapsible loan={loan} isMobile={this.props.isMobile}/>
                    </div>
                </Paper>

                <div style={cardActionBar}>
                    <RaisedButton label="Invest" primary={true} type="submit" onClick={() => this.props.invest(loan)} className="invest-button"/>
                </div>
            </Card>
        )
    }
}

export default InvestCard;
