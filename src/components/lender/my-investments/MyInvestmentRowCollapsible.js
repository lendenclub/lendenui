import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { styleConstants } from '../../../utils/StyleConstants';
import numeral from 'numeral';

const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0'
}

const chipRowStyle = {
    display: 'flex',
    justifyContent: 'space-between'
}

const fontStyle = {
    color: '#118a70',
    verticalAlign: 'bottom',
    fontSize: '24px',
    width: 'auto',
    height: 'auto'
}

const chipStyle = {
    marginLeft: '5px'
}

const tableHeaderColumnStyle = {
    height: '40px',
    color: styleConstants.textHeaderGrey,
    backgroundColor: styleConstants.bodyBackgroundColor
}

const tableColumnStyle = {
    height: '40px',
    color: styleConstants.textGrey,
    backgroundColor: styleConstants.lightGreyBGColor
}

class MyInvestmentRowCollapsible extends Component {
    render () {
        let myInvestment = this.props.myInvestment;

        return (
            <div className="my-investment-row-collapsible">
                <Row between="lg">
                    <Col lg={4}>
                        <div style={rowStyle}>
                            <div className="text-header-grey">Documents</div>
                            <div style={chipRowStyle}>
                                <Chip style={chipStyle} labelColor={styleConstants.textGrey}>
                                    <Avatar icon={<FontIcon className="material-icons" style={fontStyle}>description</FontIcon>} />
                                    Cheque
                                </Chip>
                                <Chip style={chipStyle} labelColor={styleConstants.textGrey}>
                                    <Avatar icon={<FontIcon className="material-icons" style={fontStyle}>description</FontIcon>} />
                                    Agreement
                                </Chip>
                            </div>
                        </div>
                        <div style={rowStyle}>
                            <div className="text-header-grey">Disbursement Date</div>
                            <div> {myInvestment.disbursementDate} </div>
                        </div>
                        <div style={rowStyle}>
                            <div className="text-header-grey">Repayment Start Date</div>
                            <div> {myInvestment.repaymentStartDate} </div>
                        </div>
                        <div style={rowStyle}>
                            <div className="text-header-grey">Loan Date</div>
                            <div> {myInvestment.loanCloseDate} </div>
                        </div>
                        <div style={rowStyle}>
                            <div className="text-header-grey">Total EMI Paid</div>
                            <div> ₹ {numeral(12345).format('0,0.00')} </div>
                        </div>
                        <div style={rowStyle}>
                            <div className="text-header-grey">Total EMI Due</div>
                            <div> ₹ {numeral(12345).format('0,0.00')} </div>
                        </div>
                        <div style={rowStyle}>
                            <div className="text-header-grey">Payment Status</div>
                            <div> Processing </div>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <Table>
                            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                <TableRow style={tableColumnStyle}>
                                    <TableHeaderColumn style={tableHeaderColumnStyle}>S.No.</TableHeaderColumn>
                                    <TableHeaderColumn style={tableHeaderColumnStyle}>EMI Date</TableHeaderColumn>
                                    <TableHeaderColumn style={tableHeaderColumnStyle}>EMI Amount</TableHeaderColumn>
                                    <TableHeaderColumn style={tableHeaderColumnStyle}>EMI Status</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                                {myInvestment.repayments.map( (repayment, idx) => {
                                    return (
                                        <TableRow key={idx} style={tableColumnStyle}>
                                            <TableRowColumn style={tableColumnStyle}>{idx}</TableRowColumn>
                                            <TableRowColumn style={tableColumnStyle}>{repayment.emiDate}</TableRowColumn>
                                            <TableRowColumn style={tableColumnStyle}>{repayment.emiAmount}</TableRowColumn>
                                            <TableRowColumn style={tableColumnStyle} className="text-capitalize">{repayment.emiStatus}</TableRowColumn>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default MyInvestmentRowCollapsible;
