import React, { Component } from 'react';
import { styleConstants } from '../../../../utils/StyleConstants';
import { Card } from 'material-ui/Card';
import { RiskColors } from '../../../../utils/RiskColors';
import ProgressBar from '../../../ProgressBar';
import numeral from 'numeral';
import Paper from 'material-ui/Paper';
import MyInvestmentRowCollapsible from '../MyInvestmentRowCollapsible';
import FontIcon from 'material-ui/FontIcon';

const cardStyle = {
    backgroundColor: styleConstants.lightGrayBGColor,
    color: styleConstants.textGrey,
    marginBottom: '15px'
}

const cardHeaderStyle = {
    position: 'relative'
}

const headerLabel = {
    padding: '10px 20px',
    display: 'inline-block'
}

const interestLabel = {
    float: 'right',
    padding: '10px'
}

const riskIndicator = {
    position: 'absolute',
    width: 0,
	height: 0,
	borderTopWidth: '20px',
    borderTopStyle: 'inset',
	borderRight: '20px solid transparent'
}

const cardContent = {
    padding: '10px'
}

const keyValueHolder = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px 0'
}

const paperCollapsibleStyle = {
    color: 'inherit',
    backgroundColor: '#OD222B',
    borderRadius: 0
}

const collapsibleContentStyle = {
    borderTop: `1px solid ${styleConstants.borderColor}`
}

class MyInvestmentCard extends Component {
    computeRiskStyle = (interest) => {
        return RiskColors(interest);
    }

    onCardClicked = () => {
        this.props.toggleRowAction(this.props.myInvestment.required_loan_id);
    }

    render () {
        let myInvestment = this.props.myInvestment,
            collapsiblePaperState = this.props.rowActive ? 'show-collapsible' : 'hide-collapsible',
            collapsiblePaperStyle = `collapsible-pane ${collapsiblePaperState}`;

        riskIndicator.borderTopColor = this.computeRiskStyle(myInvestment.interest_rate);

        return (
            <Card style={cardStyle} className="my-investment-card">
                <div onClick={this.onCardClicked}>
                    <div style={cardHeaderStyle} className="text-capitalize">
                        <div style={riskIndicator}></div>
                        <div style={headerLabel}> {myInvestment.required_loan_id} - {myInvestment.user.first_name} </div>
                        <div style={interestLabel}> {myInvestment.interest_rate}% </div>
                    </div>

                    <ProgressBar max={myInvestment.amount} value={myInvestment.amount - 50000} />

                    <div style={cardContent}>
                        <div style={keyValueHolder}>
                            <div>Status:</div> <div className="text-capitalize"> {myInvestment.statusText} <span className="color-progress-blue">({myInvestment.statusPercentage}%)</span> </div>
                        </div>
                        <div style={keyValueHolder}>
                            <div>Invesment:</div> <div>₹ {numeral(myInvestment.amount).format('0,0.00')}</div>
                        </div>
                        <div style={keyValueHolder}>
                            <div>EMI:</div> <div>₹ {numeral(myInvestment.emi).format('0,0.00')}</div>
                        </div>
                    </div>
                </div>

                <Paper zDepth={1} style={paperCollapsibleStyle} className={collapsiblePaperStyle}>
                    <div className="collapsible-content" style={collapsibleContentStyle}>
                        <MyInvestmentRowCollapsible myInvestment={myInvestment} isMobile={this.props.isMobile}/>
                    </div>
                </Paper>

                <div style={styleConstants.cardMoreHorizontal} onClick={this.onCardClicked}>
                    <FontIcon className="material-icons" color={styleConstants.bodyBackgroundColor}>more_horiz</FontIcon>
                </div>
            </Card>
        );
    }
}

export default MyInvestmentCard;
