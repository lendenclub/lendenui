import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import numeral from 'numeral';
import { styleConstants } from '../../../utils/StyleConstants';
import { RiskColors } from '../../../utils/RiskColors';
import ProgressBar from '../../ProgressBar'
import MyInvestmentRowCollapsible from './MyInvestmentRowCollapsible';

const paperStyle = {
    color: 'inherit',
    position: 'relative',
    backgroundColor: styleConstants.lightGrayBGColor
}

const riskIndicator = {
    position: 'absolute',
    width: 0,
	height: 0,
	borderTopWidth: '20px',
    borderTopStyle: 'inset',
	borderRight: '20px solid transparent'
}

const paperCollapsibleStyle = {
    color: 'inherit',
    backgroundColor: styleConstants.accordionBGColor
}

class MyInvestmentRow extends Component {
    computeRiskStyle = (interest) => {
        return RiskColors(interest);
    }

    onRowClicked = () => {
        let props = this.props;
        props.toggleRowAction(props.myInvestment.required_loan_id);
    }

    render () {
        let myInvestment = this.props.myInvestment,
            collapsiblePaperState = this.props.rowActive ? 'show-collapsible' : 'hide-collapsible',
            collapsiblePaperStyle = `collapsible-pane ${collapsiblePaperState}`;

        riskIndicator.borderTopColor = this.computeRiskStyle(myInvestment.interest_rate);

        return (
            <div className="my-investment-row">
                <Paper style={paperStyle} zDepth={1}>
                    <div style={riskIndicator}></div>

                    <Row className="row" onClick={this.onRowClicked}>
                        <Col lg={1} className="text-capitalize">{myInvestment.user.first_name}</Col>
                        <Col lg={1}>{myInvestment.required_loan_id}</Col>
                        <Col lg={1}>{myInvestment.interest_rate}%</Col>
                        <Col lg={2}>₹ {numeral(myInvestment.amount).format('0,0.00')}</Col>
                        <Col lg={2}>₹ {numeral(myInvestment.emi).format('0,0.00')}</Col>
                        <Col lg={2} className="text-capitalize">
                            {myInvestment.statusText} <span className="color-progress-blue">({myInvestment.statusPercentage}%)</span>
                            <div className="progress-bar-container">
                                <ProgressBar max={myInvestment.amount} value={myInvestment.amount - 50000} />
                            </div>
                        </Col>
                    </Row>
                </Paper>

                <Paper zDepth={1} style={paperCollapsibleStyle} className={collapsiblePaperStyle}>
                    <div className="collapsible-content">
                        <MyInvestmentRowCollapsible myInvestment={myInvestment} isMobile={this.props.isMobile}/>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default MyInvestmentRow;
