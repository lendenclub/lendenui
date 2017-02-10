import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import MyInvestmentRow from '../../components/lender/my-investments/MyInvestmentRow';
import WebComponent from '../../components/WebComponent';
import MobileComponent from '../../components/MobileComponent';
import MyInvestmentCard from '../../components/lender/my-investments/mobile/MyInvestmentCard';
import MyInvestmentsFilter from '../../components/lender/my-investments/MyInvestmentsFilter';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';

const floatingFilter = {
    position: 'fixed',
    bottom: '20px',
    right: '15px',
    zIndex: 100
}

class MyInvestments extends Component {
    constructor () {
        super();
        this.state = { myInvestmentsFilter: 'All', filterDrawerState: false};
    }
    componentDidMount () {
        this.props.fetchMyInvestments();
    }

    toggleRowActive = (myInvestmentLoanId) => {
        this.props.updateMyInvestmentRowActive(myInvestmentLoanId);
    }

    filterMyInvestments = (e) => {
        this.setState({myInvestmentsFilter: e.target.innerText.trim()})
    }

    toggleFilterDrawer = () => {
        this.setState({ filterDrawerState: !this.state.filterDrawerState})
    }

    //TODO: Change key to loan ID
    render () {
        return (
            <div>
                <WebComponent>
                    <div className="my-investments">
                        <div className="header-row">
                            <Row className="row">
                                <Col lg={1}>Borrower</Col>
                                <Col lg={1}>Loan ID</Col>
                                <Col lg={1}>Interest</Col>
                                <Col lg={2}>Investment</Col>
                                <Col lg={2}>EMI</Col>
                                <Col lg={5}>Status</Col>
                            </Row>
                        </div>

                        <div className="my-investment-table">
                            <Row>
                                <Col lg={11}>
                                    {this.props.lender.myInvestments.map( (myInvestment, idx) => {
                                        myInvestment.active = myInvestment.active || false;
                                        return (
                                            <MyInvestmentRow key={myInvestment.loan.required_loan_id} myInvestment={myInvestment} toggleRowAction={this.toggleRowActive} rowActive={myInvestment.active} isMobile={this.props.isMobile}/>
                                        )
                                    })}
                                </Col>
                                <Col lg={1}>
                                    <div className="filter-nav">
                                        <MyInvestmentsFilter selectedFilter={this.state.myInvestmentsFilter} filterMyInvestments={this.filterMyInvestments} isMobile={this.props.isMobile} />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </WebComponent>

                <MobileComponent>
                    <div className="my-investments">
                        {this.props.lender.myInvestments.map( (myInvestment, idx) => {
                            myInvestment.active = myInvestment.active || false;
                            return (
                                <MyInvestmentCard key={idx} myInvestment={myInvestment} toggleRowAction={this.toggleRowActive} rowActive={myInvestment.active} isMobile={this.props.isMobile} />
                            )
                        })}

                        <MyInvestmentsFilter selectedFilter={this.state.myInvestmentsFilter} filterMyInvestments={this.filterMyInvestments} filterDrawerState={this.state.filterDrawerState} toggleFilterDrawer={this.toggleFilterDrawer} isMobile={this.props.isMobile} />

                        <FloatingActionButton zDepth={2} backgroundColor='#1976D2' className="filter-floating-button" onClick={this.toggleFilterDrawer} style={floatingFilter}>
                            <FontIcon className="material-icons">filter_list</FontIcon>
                        </FloatingActionButton>
                    </div>
                </MobileComponent>
            </div>
        );
    }
}

export default MyInvestments;
