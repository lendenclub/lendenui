import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { styleConstants } from '../../../utils/StyleConstants';
import { Card } from 'material-ui/Card';
import numeral from 'numeral';
import WebComponent from '../../WebComponent';
import MobileComponent from '../../MobileComponent';

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

class AccountHistory extends Component {
    render () {
        let { history } = this.props;

        return (
            <Card className="account-history" style={this.props.style}>
                <div style={headerStyle}>Account History</div>

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
                            {history.map( (item, idx) => {
                                let credit = item.credit ? `₹ ${numeral(item.credit).format('0,0.00')}` : '',
                                    debit = item.debit ? `₹ ${numeral(item.debit).format('0,0.00')}` : '';

                                return (
                                    <TableRow key={idx} style={tableColumnStyle} striped={true} displayBorder={false}>
                                        <TableRowColumn>{item.date}</TableRowColumn>
                                        <TableRowColumn>{item.description}</TableRowColumn>
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
                        {history.map( (item, idx) => {
                            let amount = item.credit ? `₹ ${numeral(item.credit).format('0,0.00')}` : `₹ ${numeral(item.debit).format('0,0.00')}`,
                                label = item.credit ? 'Credit' : 'Debit';

                            return (
                                <div key={idx} style={historyRowStyle}>
                                    <div>
                                        <div>{item.date}</div>
                                        <div style={subLabelStyle}>{item.description}</div>
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

export default AccountHistory;
