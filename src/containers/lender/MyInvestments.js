import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import {List, ListItem} from 'material-ui/List';
import { styleConstants } from '../../utils/StyleConstants';

import MyInvestmentRow from '../../components/lender/my-investments/MyInvestmentRow';

const fillerHeader = {
    marginLeft: '-8px'
}

const myInvestmentFilterStyle = {
    color: styleConstants.textGrey
}

const myInvestmentFilterStyleActive = {
    backgroundColor: styleConstants.bodyBackgroundColor,
    borderRight: `4px solid ${styleConstants.accentGreen}`,
    color: 'white'
}

const myInvestmentFilters = ['All', 'In Process', 'Active', 'Closed']

class MyInvestments extends Component {
    constructor () {
        super();
        this.state = { myInvestmentsFilter: 'All'};
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

    //TODO: Change key to loan ID
    render () {
        return (
            <div className="my-investments">
                <Row>
                    <Col lg={11}>
                        <Row className="header-row">
                            <Col lg={1}>Borrower</Col>
                            <Col lg={1}>Loan ID</Col>
                            <Col lg={1}>Interest</Col>
                            <Col lg={2}>Investment</Col>
                            <Col lg={2}>EMI</Col>
                            <Col lg={5}>Status</Col>
                        </Row>
                    </Col>
                    <Col lg={1} style={fillerHeader} className="header-row"></Col>
                </Row>

                <div className="my-investment-table">
                    <Row>
                        <Col lg={11}>
                            {this.props.lender.myInvestments.map( (myInvestment, idx) => {
                                myInvestment.active = myInvestment.active || false;
                                return (
                                    <MyInvestmentRow key={idx} myInvestment={myInvestment} toggleRowAction={this.toggleRowActive} rowActive={myInvestment.active} isMobile={this.props.isMobile}/>
                                )
                            })}
                        </Col>
                        <Col lg={1}>
                            <div className="filter-nav">
                                <List>
                                    {myInvestmentFilters.map( (myInvestment, idx) => {
                                        let activeStyle = (myInvestment === this.state.myInvestmentsFilter) ? {...myInvestmentFilterStyle, ...myInvestmentFilterStyleActive} : myInvestmentFilterStyle;

                                            return (
                                                <ListItem key={idx} style={activeStyle} className="nav-bar" primaryText={myInvestment} onClick={this.filterMyInvestments} />
                                            )
                                    })}
                                </List>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default MyInvestments;
