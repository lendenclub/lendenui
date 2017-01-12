import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import numeral from 'numeral';

import MobileComponent from '../../MobileComponent';
import WebComponent from '../../WebComponent';

const modalBodyStyle = {
    padding: 0
}

const headerStyle = {
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between'
}

const keyValueHolder = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px 0'
}

class InvestModal extends Component {
    render () {
        let props = this.props,
            loan = props.loan,
            customContentStyle = this.props.isMobile ? { width: '95%' } : {};

        if (!loan) {
            return null;
        }

        return (
            <Dialog open={props.open} bodyStyle={modalBodyStyle} contentStyle={customContentStyle} className="invest-modal" onRequestClose={props.closeModal}>
                <WebComponent>
                    <div>
                        <Row center="lg" className="header-row">
                            <Col lg={2} sm={2} xs={2}>Loan ID</Col>
                            <Col lg={2} sm={2} xs={2}>Borrower</Col>
                            <Col lg={2} sm={2} xs={2}>Interest</Col>
                            <Col lg={2} sm={2} xs={2}>Tenure</Col>
                            <Col lg={2} sm={2} xs={2}>Loan</Col>
                            <Col lg={2} sm={2} xs={2}>Remaining</Col>
                        </Row>
                        <Row center="lg" className="data-row">
                            <Col lg={2} sm={2} xs={2}>{loan.required_loan_id}</Col>
                            <Col lg={2} sm={2} xs={2} className="text-capitalize">{loan.user.first_name}</Col>
                            <Col lg={2} sm={2} xs={2}>{loan.interest_rate}%</Col>
                            <Col lg={2} sm={2} xs={2}>{loan.tenure} months</Col>
                            <Col lg={2} sm={2} xs={2}>₹ {numeral(loan.amount).format('0,0.00')}</Col>
                            <Col lg={2} sm={2} xs={2}>₹ {numeral(50000).format('0,0.00')}</Col>
                        </Row>
                    </div>
                </WebComponent>

                <MobileComponent>
                    <div>
                        <div style={headerStyle}>
                            <div> {loan.required_loan_id} - <span className="text-capitalize">{loan.user.first_name}</span> </div>
                            <div> {loan.interest_rate}% </div>
                        </div>
                        <div className="data-row">
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
                </MobileComponent>

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
