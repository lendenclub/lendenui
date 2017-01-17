import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import { styleConstants } from '../../../utils/StyleConstants';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const headerStyle = {
    padding: '15px',
    color: styleConstants.textHeaderGrey
}

const cardContentStyle = {
    padding: '15px'
}

const actionBar = {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '20px'
}

class WithdrawFunds extends Component {
    render () {
        let props = this.props;

        return (
            <Card style={this.props.style}>
                <div style={headerStyle}>Withdraw Funds</div>

                <div style={cardContentStyle}>
                    <TextField
                        floatingLabelText="Enter Amount"
                        name="withdrawFundAmount"
                        value={props.withdrawFundAmount}
                        onChange={props.handleInputChange}
                        fullWidth={true}
                    />

                    <div style={actionBar}>
                        <FlatButton label="Cancel" secondary={true} onClick={props.cancel}/>
                        <RaisedButton label="Withdraw" primary={true} onClick={props.withdrawFunds}/>
                    </div>
                </div>
            </Card>
        );
    }
}

export default WithdrawFunds;
