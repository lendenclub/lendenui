import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { FormsyText, FormsySelect } from 'formsy-material-ui/lib';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';


class Bank extends Component {
    constructor () {
        super();
        this.state = { canSubmit: false };
    }
    enableButton = () => {
        this.setState({
            canSubmit: true
        });
    }

    disableButton = () => {
        this.setState({
            canSubmit: false
        });
    }

    submitForm (data) {
        console.log(JSON.stringify(data, null, 4));
    }

    notifyFormError (data) {
        console.error('Form error:', data);
    }

    render () {
        return (
            <div className="register-form">
                <div className="label-header">
                    Please upload your cheque
                </div>

                <Formsy.Form
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    onValidSubmit={this.submitForm}
                    onInvalidSubmit={this.notifyFormError}
                >
                    <FormsyText
                        name="accountNumber"
                        required
                        floatingLabelText="Bank Account Number"
                        validations="isNumeric"
                        fullWidth={true}
                        className="text-align-left"
                    />
                    <FormsyText
                        name="bankName"
                        required
                        floatingLabelText="Bank Name"
                        fullWidth={true}
                        className="text-align-left"
                    />
                    <FormsyText
                        name="ifscCode"
                        required
                        floatingLabelText="IFSC Code"
                        fullWidth={true}
                        className="text-align-left"
                    />
                    <FormsySelect
                      name="accountType"
                      required
                      floatingLabelText="Account Type"
                      fullWidth={true}
                    >
                        <MenuItem value={'savings'} primaryText="Savings" />
                        <MenuItem value={'checking'} primaryText="Checking" />
                    </FormsySelect>
                    <FormsyText
                        name="name"
                        required
                        floatingLabelText="Name as on Bank Account"
                        fullWidth={true}
                        className="text-align-left"
                    />

                    <div className="action-bar">
                        <FlatButton label="Cancel" secondary={true} />
                        <RaisedButton label="Continue" primary={true} type="submit" disabled={!this.state.canSubmit}/>
                    </div>
                </Formsy.Form>
            </div>
        )
    }
}

export default Bank;
