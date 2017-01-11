import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import FontIcon from 'material-ui/FontIcon';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import InvestRow from '../../components/lender/invest/InvestRow';
import BorrowerFilter from '../../components/lender/invest/BorrowerFilter';
import InvestModal from '../../components/lender/invest/InvestModal';

const iconStyle = {
    color: '#1370CB'
}

// Note: If you are changing these column widths - you need to change in the row component also
class Invest extends Component {
    constructor (props) {
        super();
        this.state = { filterDrawerState: false, investModalOpen: false, selectedLoan: null, investAmount: '', password: '' };
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

    closeInvestModal () {
        this.setState({ investModalOpen: false, selectedLoan: null, investAmount: '', password: ''});
    }

    handleInvestInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onInvest = (loan) => {
        console.log(loan);
        console.log(this.state.investAmount, this.state.password);
    }


    //TODO: Change the .bind(this) to arrow functions
    //TODO: Change key to loan ID
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
                    <Col lg={1}>
                        Loan ID
                    </Col>
                    <Col lg={2}>
                        Borrower's Name
                    </Col>
                    <Col lg={2}>
                        Loan Amount
                    </Col>
                    <Col lg={2}>
                        Remaining Amount
                    </Col>
                    <Col lg={2}>
                        Loan Purpose
                    </Col>
                    <Col lg={1} className="text-align-right position-relative">
                        <FloatingActionButton backgroundColor='#1976D2' className="filter-floating-button" onClick={this.toggleFilterDrawer.bind(this)}>
                            <FontIcon className="material-icons">filter_list</FontIcon>
                        </FloatingActionButton>
                    </Col>
                </Row>

                <BorrowerFilter filterDrawerState={this.state.filterDrawerState} toggleFilterDrawer={this.toggleFilterDrawer.bind(this)} />

                <div className="invest-table">
                    {this.props.lender.loans.map( (loan, idx) => {
                        loan.active = loan.active || false;
                        return (
                            <InvestRow key={idx} loan={loan} toggleRowAction={this.toggleRowActive.bind(this)} rowActive={loan.active} invest={this.showInvestModal.bind(this)}/>
                        )
                    })}
                </div>

                <InvestModal
                    loan={this.state.selectedLoan}
                    open={this.state.investModalOpen}
                    closeModal={() => this.closeInvestModal()}
                    investAmount={this.state.investAmount}
                    password={this.state.password}
                    handleInvestInputChange={this.handleInvestInputChange}
                    onInvest={(loan) => this.onInvest(loan)}
                />
            </div>
        );
    }
}

export default Invest;
