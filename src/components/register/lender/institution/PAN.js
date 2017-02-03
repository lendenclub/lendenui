import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { FormsyText, FormsySelect } from 'formsy-material-ui/lib';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';

class PAN extends Component {
    constructor () {
        super();
        this.state = { canSubmit: false, isNBFC: false };
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

    nbfcCheck = () => {
        this.setState({
            isNBFC: !this.state.isNBFC
        });
    }

    render () {
        let isNBFC = this.state.isNBFC;
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
                        name="businessName"
                        required
                        floatingLabelText="Business Name"
                        fullWidth={true}
                        className="text-align-left"
                    />
                    <FormsyText
                        name="contactPersonName"
                        required
                        floatingLabelText="Contact Person Name"
                        fullWidth={true}
                        className="text-align-left"
                    />
                    <FormsySelect
                      name="institutionType"
                      required
                      floatingLabelText="Type of Institution"
                      fullWidth={true}
                    >
                        <MenuItem value={'llc'} primaryText="LLC" />
                        <MenuItem value={'pvt'} primaryText="Private Limited" />
                    </FormsySelect>
                    <Checkbox label="NBFC" name="nbfc" className="checkbox" onClick={this.nbfcCheck.bind(this)} />
                    <FormsyText
                        name="nbfcCode"
                        required={isNBFC}
                        floatingLabelText="NBFC RBI Registration Code"
                        fullWidth={true}
                        className="text-align-left"
                        disabled={!isNBFC}
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
