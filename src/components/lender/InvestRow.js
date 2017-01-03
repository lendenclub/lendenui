import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import numeral from 'numeral';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { RiskColors } from '../../utils/RiskColors';

const paperStyle = {
    backgroundColor: '#1A2225',
    color: 'inherit',
    marginRight: '7px',
    position: 'relative'
}

const inputTextStyle = {
    top: '-5px',
    color: '#6E7580'
}

const floatingLabelStyle = {
    color: '#6E7580'
}

const inputStyle = {
    color: '#6E7580'
}

class InvestRow extends Component {
    constructor (props) {
        super(props);
        this.state = { investmentAmount: ''};
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });     // React does not support 2 way binding - so we need to manually update values in state
    }

    computeRiskStyle = (interest) => {
        let color = RiskColors(interest);
        return {
            backgroundColor: color
        };
    }

    render () {
        let data = this.props.data,
            riskStyle = this.computeRiskStyle(data.interest);

        return (
            <div className="invest-row">
                <Paper style={paperStyle} zDepth={1}>
                    <div className="risk-indicator" style={riskStyle}></div>
                    <Row className="row-item">
                        <Col lg={1} className="invest-data-column">
                            {data.interest}%
                        </Col>
                        <Col lg={1} className="invest-data-column">
                            {data.tenure} months
                        </Col>
                        <Col lg={1} className="invest-data-column">
                            {numeral(data.loan).format('₹0,0.00')}
                        </Col>
                        <Col lg={1} className="invest-data-column">
                            {numeral(data.remaining).format('₹0,0.00')}
                        </Col>
                        <Col lg={2} className="invest-data-column flex-child-ellipsis">
                            {data.loan_purpose}
                        </Col>
                        <Col lg={2} className="invest-data-column">
                            {data.borrowerId} {data.borrower_name}
                        </Col>
                        <Col lg={2}>
                            <TextField
                                floatingLabelText="Investment Amount"
                                fullWidth={true}
                                name="investmentAmount"
                                value={this.state.investmentAmount}
                                onChange={this.handleChange}
                                style={inputTextStyle}
                                floatingLabelStyle={floatingLabelStyle}
                                inputStyle={inputStyle}
                            />
                        </Col>
                        <Col lg={2} className="invest-button-column text-align-center">
                            <RaisedButton label="Invest" primary={true} type="submit"/>
                        </Col>
                    </Row>
                </Paper>
            </div>
        );
    }
}

export default InvestRow;
