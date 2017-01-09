import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import numeral from 'numeral';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { RiskColors } from '../../utils/RiskColors';
import ProgressBar from '../ProgressBar';
import InvestRowCollapsible from './InvestRowCollapsible';

const paperStyle = {
    color: 'inherit',
    marginRight: '10px',
    position: 'relative',
    marginLeft: '5px'
}

const paperCollapsibleStyle = {
    color: 'inherit',
    backgroundColor: '#11262E'
}

class InvestRow extends Component {
    constructor (props) {
        super(props);
        this.state = { investmentAmount: ''};
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    computeRiskStyle = (interest) => {
        let color = RiskColors(interest);
        return {
            backgroundColor: color
        };
    }

    onRowClicked = (e) => {
        this.props.toggleRowAction(this.props.loan.required_loan_id);
    }

    render () {
        let loan = this.props.loan,
            riskStyle = this.computeRiskStyle(loan.interest_rate),
            collapsiblePaperState = this.props.rowActive ? 'show-collapsible' : 'hide-collapsible',
            collapsiblePaperStyle = `collapsible-pane ${collapsiblePaperState}`;

        return (
            <div className="invest-row">
                <Paper style={paperStyle} zDepth={1}>

                    <div className="risk-indicator" style={riskStyle}></div>

                    <Row className="row-item" onClick={this.onRowClicked}>
                        <Col lg={1} className="invest-loan-column">
                            {loan.interest_rate}%
                        </Col>

                        <Col lg={1} className="invest-loan-column">
                            {loan.tenure} months
                        </Col>

                        <Col lg={2} className="invest-loan-column">
                            ₹ {numeral(loan.amount).format('0,0.00')}
                            <div className="progress-bar-container">
                                <ProgressBar max={loan.amount} value={loan.amount - 50000} />
                            </div>
                        </Col>

                        <Col lg={1} className="invest-loan-column">
                            ₹ {numeral(50000).format('0,0.00')}
                        </Col>

                        <Col lg={2} className="invest-loan-column flex-child-ellipsis text-capitalize">
                            {loan.purpose.toLowerCase()}
                        </Col>

                        <Col lg={2} className="invest-loan-column text-capitalize">
                            {loan.required_loan_id}
                        </Col>

                        <Col lg={2} className="invest-loan-column text-capitalize">
                            {loan.user.first_name}
                        </Col>

                        <Col lg={1} className="invest-button-column text-align-center">
                            <RaisedButton label="Invest" primary={true} type="submit" disabled={!this.props.rowActive} onClick={() => this.props.invest(loan)}/>
                        </Col>
                    </Row>
                </Paper>

                <Paper zDepth={1} style={paperCollapsibleStyle} className={collapsiblePaperStyle}>
                    <div className="collapsible-content">
                        <InvestRowCollapsible loan={loan} />
                    </div>
                </Paper>
            </div>
        );
    }
}

export default InvestRow;
