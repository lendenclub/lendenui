import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import FontIcon from 'material-ui/FontIcon';

import InvestRow from '../../components/lender/InvestRow';

const iconStyle = {
    color: '#1370CB'
}

const tempData = [{
    borrowerId: 'LD52421',
    interest: 12.5,
    tenure: 12,
    loan: 100000,
    remaining: 100000,
    loan_purpose: "Debt Consolidation",
    borrower_name: 'Ramesh'
}, {
    borrowerId: 'LD52422',
    interest: 24.5,
    tenure: 12,
    loan: 100000,
    remaining: 100000,
    loan_purpose: "Debt Consolidation",
    borrower_name: 'Mahesh'
}, {
    borrowerId: 'LD52423',
    interest: 15.5,
    tenure: 12,
    loan: 100000,
    remaining: 100000,
    loan_purpose: "Debt Consolidation",
    borrower_name: 'Suresh'
}, {
    borrowerId: 'LD52424',
    interest: 14.5,
    tenure: 14,
    loan: 100000,
    remaining: 100000,
    loan_purpose: "Debt Consolidation",
    borrower_name: 'Nilesh'
}, {
    borrowerId: 'LD52425',
    interest: 20.5,
    tenure: 12,
    loan: 100000,
    remaining: 100000,
    loan_purpose: "Debt Consolidation",
    borrower_name: 'Venkatesh'
}, {
    borrowerId: 'LD52426',
    interest: 28.5,
    tenure: 12,
    loan: 100000,
    remaining: 100000,
    loan_purpose: "Debt Consolidation",
    borrower_name: 'Jitesh'
}, {
    borrowerId: 'LD52427',
    interest: 32.5,
    tenure: 12,
    loan: 100000,
    remaining: 100000,
    loan_purpose: "Debt Consolidation",
    borrower_name: 'Himesh'
}, {
    borrowerId: 'LD52428',
    interest: 12.5,
    tenure: 12,
    loan: 100000,
    remaining: 100000,
    loan_purpose: "Debt Consolidation",
    borrower_name: 'Akilesh'
}, {
    borrowerId: 'LD52429',
    interest: 18.5,
    tenure: 12,
    loan: 100000,
    remaining: 100000,
    loan_purpose: "Debt Consolidation",
    borrower_name: 'Bonesh'
}, {
    borrowerId: 'LD52430',
    interest: 12.5,
    tenure: 12,
    loan: 100000,
    remaining: 100000,
    loan_purpose: "Debt Consolidation",
    borrower_name: 'Ramesh2'
}]

// Note: If you are changing these column widths - you need to change in the row component also
class Invest extends Component {
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
                        Loan
                    </Col>
                    <Col lg={1}>
                        Remaining
                    </Col>
                    <Col lg={2}>
                        Loan Purpose
                    </Col>
                    <Col lg={2}>
                        Loan ID / Borrower
                    </Col>
                    <Col lg={2}>
                        Investment Amount
                    </Col>
                    <Col lg={2} className="text-align-right">
                        <FontIcon className="material-icons" style={iconStyle}>tune</FontIcon>
                    </Col>
                </Row>
                {tempData.map( (item, idx) => {
                    return (
                        <InvestRow key={item.borrowerId} data={item}/>
                    )
                })}
            </div>
        );
    }
}

export default Invest;
