import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { styleConstants } from '../../../utils/StyleConstants';
import numeral from 'numeral';
import WebComponent from '../../WebComponent';


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

const parentRowStyle = {
    margin: 0
}

const columnStyle = {
    padding: 0
}

class MyInvestmentRowCollapsible extends Component {
    openDocument = (documentObj) => {
        window.open(documentObj.file, '_blank');
    }

    render () {
        let myInvestment = this.props.myInvestment,
            repaymentList = myInvestment.repayment_list,
            documentList = myInvestment.document_list,
            emiPaid = repaymentList.reduce( (acc, item) => {
                return acc + (item.status === 'Paid' ? item.emi : 0)
            }, 0),
            emiDue = repaymentList.reduce( (acc, item) => {
                return acc + (item.status === 'Due' ? item.emi : 0)
            }, 0);


        return (
            <div className="my-investment-row-collapsible">
                <Row between="lg" style={parentRowStyle}>
                    <Col lg={4} xs={12} style={columnStyle}>
                        <div style={{padding: '0 10px'}}>
                            <div style={rowStyle}>
                                <div className="text-header-grey">Documents</div>
                                <div style={chipRowStyle}>
                                    {documentList.map( (item) => {
                                        return (
                                            <Chip key={item.type} style={chipStyle} labelColor={styleConstants.textGrey} onClick={this.openDocument.bind(this, item)}>
                                                <Avatar icon={<FontIcon className="material-icons" style={fontStyle}>description</FontIcon>} />
                                                <span className="text-capitalize">{item.type}</span>
                                            </Chip>
                                        )
                                    })}
                                </div>
                            </div>
                            <div style={rowStyle}>
                                <div className="text-header-grey">Disbursement Date</div>
                                <div> {myInvestment.disbursement_date} </div>
                            </div>
                            <div style={rowStyle}>
                                <div className="text-header-grey">Repayment Start Date</div>
                                <div> {myInvestment.repayment_start_date.split('-').reverse().join('-')} </div>
                            </div>
                            <div style={rowStyle}>
                                <div className="text-header-grey">Total EMI Paid</div>
                                <div> ₹ {numeral(emiPaid).format('0,0.00')} </div>
                            </div>
                            <div style={rowStyle}>
                                <div className="text-header-grey">Total EMI Due</div>
                                <div> ₹ {numeral(emiDue).format('0,0.00')} </div>
                            </div>
                            <div style={rowStyle}>
                                <div className="text-header-grey">Payment Status</div>
                                <div> {myInvestment.loan.status} </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={7} xs={12} style={{...columnStyle, marginTop: '15px'}}>
                        <Table>
                            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                <TableRow style={tableColumnStyle}>
                                    <WebComponent style={tableHeaderColumnStyle}>
                                        <TableHeaderColumn style={this.props.style}>S.No.</TableHeaderColumn>
                                    </WebComponent>
                                    <TableHeaderColumn style={tableHeaderColumnStyle}>EMI Date</TableHeaderColumn>
                                    <TableHeaderColumn style={tableHeaderColumnStyle}>EMI Amount</TableHeaderColumn>
                                    <TableHeaderColumn style={tableHeaderColumnStyle}>EMI Status</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                                {myInvestment.repayment_list.map( (repayment, idx) => {
                                    return (
                                        <TableRow key={idx} style={tableColumnStyle}>
                                            <WebComponent style={tableColumnStyle}>
                                                <TableRowColumn style={this.props.style}>{idx+1}</TableRowColumn>
                                            </WebComponent>
                                            <TableRowColumn style={tableColumnStyle}>{repayment.due_date.split('-').reverse().join('-')}</TableRowColumn>
                                            <TableRowColumn style={tableColumnStyle}>{repayment.emi}</TableRowColumn>
                                            <TableRowColumn style={tableColumnStyle} className="text-capitalize">{repayment.status}</TableRowColumn>
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
