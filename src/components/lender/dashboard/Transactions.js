import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { styleConstants } from '../../../utils/StyleConstants';
import { Card } from 'material-ui/Card';
import numeral from 'numeral';
import WebComponent from '../../WebComponent';
import MobileComponent from '../../MobileComponent';

const transactionsStyle = {
    backgroundColor: styleConstants.cardBGColor
}

const tableColumnStyle = {
    height: '40px',
    color: styleConstants.textGrey,
    backgroundColor: styleConstants.darkGreyBGColor
}

const tableHeaderColumnStyle = {
    height: '40px',
    color: styleConstants.textHeaderGrey,
    backgroundColor: styleConstants.cardBGColor,
    borderBottom: 'none'
}

const tableHeaderStyle = {
    borderBottom: 'none'
}

const headerStyle = {
    padding: '15px',
    color: styleConstants.textHeaderGrey
}

const tableStyle = {
    margin: '0 10px',
    width:'98%'
}

const historyRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    color: styleConstants.textHeaderGrey
}

const subLabelStyle = {
    fontSize: '13px',
    color: styleConstants.textGrey
}

class Transactions extends Component {
    render () {
        let { transactions = [] } = this.props;

        return (
            <Card className="account-history transactions" style={transactionsStyle}>
                <div style={headerStyle}>Last 10 Transactions</div>

                <WebComponent>
                    <Table className="alternate-color-table" style={tableStyle}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false} style={tableHeaderStyle}>
                            <TableRow style={tableColumnStyle} displayBorder={false}>
                                <TableHeaderColumn style={tableHeaderColumnStyle}>Date</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeaderColumnStyle}>Description</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeaderColumnStyle}>Credit</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeaderColumnStyle}>Debit</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {transactions.map( (item, idx) => {
                                let credit = item.classification === 'CREDIT' ? `₹ ${numeral(item.amount).format('0,0.00')}` : '',
                                    debit = item.classification === 'DEBIT' ? `₹ ${numeral(item.amount).format('0,0.00')}` : '',
                                    date = item.created_date.split('T')[0].split('-').reverse().join('-');

                                return (
                                    <TableRow key={idx} style={tableColumnStyle} striped={true} displayBorder={false}>
                                        <TableRowColumn>{date}</TableRowColumn>
                                        <TableRowColumn>{item.type}</TableRowColumn>
                                        <TableRowColumn>{credit}</TableRowColumn>
                                        <TableRowColumn>{debit}</TableRowColumn>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </WebComponent>

                <MobileComponent>
                    <div className="history-list">
                        {transactions.map( (item, idx) => {
                            let amount = item.classification === 'CREDIT' ? `₹ ${numeral(item.amount).format('0,0.00')}` : `₹ ${numeral(item.amount).format('0,0.00')}`,
                                label = item.classification === 'CREDIT' ? 'Credit' : 'Debit',
                                date = item.created_date.split('T')[0].split('-').reverse().join('-');

                            return (
                                <div key={idx} style={historyRowStyle}>
                                    <div>
                                        <div>{date}</div>
                                        <div style={subLabelStyle}>{item.type}</div>
                                    </div>
                                    <div>
                                        <div>{amount}</div>
                                        <div style={subLabelStyle} className="text-align-right">{label}</div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </MobileComponent>
            </Card>
        );
    }
}

export default Transactions;
