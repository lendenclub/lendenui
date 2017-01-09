import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import FontIcon from 'material-ui/FontIcon';
import Dialog from 'material-ui/Dialog';
import numeral from 'numeral';

import InvestRow from '../../components/lender/InvestRow';
import BorrowerFilter from '../../components/lender/BorrowerFilter';

const iconStyle = {
    color: '#1370CB'
}

const modalStyle = {
    width: 'auto'
}

const InvestModal = ({loan, open}) => {
    if (!loan) {
        return null;
    }

    return (
        <Dialog modal={true} open={open} contentStyle={modalStyle}>
            <Row center="lg">
                <Col lg={2}>Borrower</Col>
                <Col lg={2}>Interest</Col>
                <Col lg={2}>Tenure</Col>
                <Col lg={2}>Loan</Col>
                <Col lg={2}>Remaining</Col>
            </Row>
            <Row center="lg">
                <Col lg={2}>{loan.user.first_name}</Col>
                <Col lg={2}>{loan.interest_rate}%</Col>
                <Col lg={2}>{loan.tenure} months</Col>
                <Col lg={2}>₹ {numeral(loan.amount).format('0,0.00')}</Col>
                <Col lg={2}>₹ {numeral(50000).format('0,0.00')}</Col>
            </Row>
        </Dialog>
    )
}

// Note: If you are changing these column widths - you need to change in the row component also
class Invest extends Component {
    constructor (props) {
        super();
        this.state = { filterDrawerState: false, investModalOpen: false, selectedLoan: null };
    }

    componentDidMount() {
        this.props.fetchLoans();
    }

    toggleRowActive = (required_loan_id) => {
        this.props.updateRowActive(required_loan_id);
    }

    toggleFilterDrawer = () => {
        this.setState({ filterDrawerState: !this.state.filterDrawerState})
    }

    showInvestModal (loan) {
        this.setState({ investModalOpen: true, selectedLoan: loan });
    }

    render () {
        return (
            <div className="lender-invest">
                <Row className="header-row">
                    <Col lg={1}>
                        Interest
                    </Col>
                    <Col lg={1}>
                        Tenure
                    </Col>
                    <Col lg={2}>
                        Loan
                    </Col>
                    <Col lg={1}>
                        Remaining
                    </Col>
                    <Col lg={2}>
                        Loan Purpose
                    </Col>
                    <Col lg={2}>
                        Loan ID
                    </Col>
                    <Col lg={2}>
                        Borrower
                    </Col>
                    <Col lg={1} className="text-align-right">
                        <FontIcon className="material-icons" style={iconStyle} onClick={this.toggleFilterDrawer.bind(this)}>tune</FontIcon>
                    </Col>
                </Row>

                <BorrowerFilter filterDrawerState={this.state.filterDrawerState} toggleFilterDrawer={this.toggleFilterDrawer.bind(this)} />

                {this.props.lender.loans.map( (loan, idx) => {
                    loan.active = loan.active || false;
                    return (
                        <InvestRow key={loan.user.user_id} loan={loan} toggleRowAction={this.toggleRowActive.bind(this)} rowActive={loan.active} invest={this.showInvestModal.bind(this)}/>
                    )
                })}
                <InvestModal loan={this.state.selectedLoan} open={this.state.investModalOpen}/>
            </div>
        );
    }
}

export default Invest;
