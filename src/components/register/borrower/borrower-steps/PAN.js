import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { FormsyText, FormsyDate } from 'formsy-material-ui/lib';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class PAN extends Component {
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
                    Please verify your details and edit if needed
                </div>

                <Formsy.Form
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    onValidSubmit={this.submitForm}
                    onInvalidSubmit={this.notifyFormError}
                >
                    <FormsyText
                        name="panID"
                        required
                        floatingLabelText="PAN Number"
                        fullWidth={true}
                        className="text-align-left"
                    />
                    <FormsyText
                        name="fullName"
                        required
                        floatingLabelText="Full Name"
                        fullWidth={true}
                        className="text-align-left"
                    />

                    <FormsyText
                        name="fatherName"
                        required
                        floatingLabelText="Father's Name"
                        fullWidth={true}
                        className="text-align-left"
                    />

                    <FormsyDate
                        name="dob"
                        required
                        floatingLabelText="Date of Birth"
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

export default PAN;
