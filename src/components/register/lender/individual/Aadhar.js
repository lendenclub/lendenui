import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { FormsyText, FormsySelect } from 'formsy-material-ui/lib';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';

class Aadhar extends Component {
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
                    Please upload your Aadhar card
                </div>

                <Formsy.Form
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    onValidSubmit={this.submitForm}
                    onInvalidSubmit={this.notifyFormError}
                >
                    <FormsySelect
                      name="gender"
                      required
                      floatingLabelText="Gender"
                      fullWidth={true}
                    >
                        <MenuItem value={'male'} primaryText="Male" />
                        <MenuItem value={'female'} primaryText="Female" />
                    </FormsySelect>

                    <FormsyText
                        name="aadharUID"
                        required
                        floatingLabelText="Aadhar UID Number"
                        fullWidth={true}
                        className="text-align-left"
                    />

                    <FormsySelect
                      name="indianNational"
                      required
                      floatingLabelText="Indian National"
                      fullWidth={true}
                    >
                        <MenuItem value={'yes'} primaryText="Yes" />
                        <MenuItem value={'no'} primaryText="No" />
                    </FormsySelect>

                    <FormsySelect
                      name="residingInIndia"
                      required
                      floatingLabelText="Residing in India"
                      fullWidth={true}
                    >
                        <MenuItem value={'yes'} primaryText="Yes" />
                        <MenuItem value={'no'} primaryText="No" />
                    </FormsySelect>

                    <div className="action-bar">
                        <FlatButton label="Cancel" secondary={true} />
                        <RaisedButton label="Continue" primary={true} type="submit" disabled={!this.state.canSubmit}/>
                    </div>
                </Formsy.Form>
            </div>
        )
    }
}

export default Aadhar;
