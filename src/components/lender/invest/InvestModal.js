import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import numeral from 'numeral';

const modalBodyStyle = {
    padding: 0
}

class InvestModal extends Component {
    render () {
        let props = this.props,
            loan = props.loan;

        if (!loan) {
            return null;
        }

        return (
            <Dialog open={props.open} bodyStyle={modalBodyStyle} className="invest-modal" onRequestClose={props.closeModal}>
                <Row center="lg" className="header-row">
                    <Col lg={2}>Loan ID</Col>
                    <Col lg={2}>Borrower</Col>
                    <Col lg={2}>Interest</Col>
                    <Col lg={2}>Tenure</Col>
                    <Col lg={2}>Loan</Col>
                    <Col lg={2}>Remaining</Col>
                </Row>
                <Row center="lg" className="data-row">
                    <Col lg={2}>{loan.required_loan_id}</Col>
                    <Col lg={2} className="text-capitalize">{loan.user.first_name}</Col>
                    <Col lg={2}>{loan.interest_rate}%</Col>
                    <Col lg={2}>{loan.tenure} months</Col>
                    <Col lg={2}>₹ {numeral(loan.amount).format('0,0.00')}</Col>
                    <Col lg={2}>₹ {numeral(50000).format('0,0.00')}</Col>
                </Row>
                <div className="invest-inputs">
                    <Row>
                        <TextField
                            floatingLabelText="Amount to Invest"
                            name="investAmount"
                            value={props.investAmount}
                            onChange={props.handleInvestInputChange}
                        />
                    </Row>
                    <Row>
                        <TextField
                            floatingLabelText="Password"
                            type="password"
                            name="password"
                            value={props.password}
                            onChange={props.handleInvestInputChange}
                        />
                    </Row>
                </div>
                <div className="text-align-right action-button">
                    <FlatButton label="Cancel" secondary={true} onClick={props.closeModal}/>
                    <RaisedButton label="Invest" primary={true} onClick={() => props.onInvest(loan)}/>
                </div>
            </Dialog>
        )
    }
}

export default InvestModal;
