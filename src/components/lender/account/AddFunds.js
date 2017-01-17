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

class AddFunds extends Component {
    render () {
        let props = this.props;

        return (
            <Card style={this.props.style}>
                <div style={headerStyle}>Add Funds</div>

                <div style={cardContentStyle}>
                    <TextField
                        floatingLabelText="Enter Amount"
                        name="addFundAmount"
                        value={props.addFundAmount}
                        onChange={props.handleInputChange}
                        fullWidth={true}
                    />

                    <div style={actionBar}>
                        <FlatButton label="Cancel" secondary={true} onClick={props.cancel}/>
                        <RaisedButton label="Add Funds" primary={true} onClick={props.addBalance}/>
                    </div>
                </div>
            </Card>
        );
    }
}

export default AddFunds;
