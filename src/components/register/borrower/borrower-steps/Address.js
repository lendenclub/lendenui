import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { FormsyText, FormsySelect } from 'formsy-material-ui/lib';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';

class Address extends Component {
    constructor () {
        super();
        this.state = { canSubmit: false, sameAsPermanent: false };
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

    addressCheck = () => {
        this.setState({
            sameAsPermanent: !this.state.sameAsPermanent
        });
    }

    render () {
        let sameAsPermanent = this.state.sameAsPermanent;

        return (
            <div className="register-form">
                <div className="label-header">
                    Permanent Address
                </div>

                <Formsy.Form
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    onValidSubmit={this.submitForm}
                    onInvalidSubmit={this.notifyFormError}
                >
                    <FormsyText
                        name="permanentAddress"
                        required
                        floatingLabelText="Address"
                        fullWidth={true}
                        className="text-align-left"
                    />

                    <div className="split-inputs">
                        <div>
                            <FormsyText
                                name="permanentCity"
                                required
                                floatingLabelText="City"
                                fullWidth={true}
                                className="text-align-left"
                            />
                        </div>
                        <div>
                            <FormsySelect
                              name="permanentState"
                              required
                              floatingLabelText="State"
                              fullWidth={true}
                            >
                                <MenuItem value={'tn'} primaryText="Tamil Nadu" />
                                <MenuItem value={'kl'} primaryText="Kerala" />
                            </FormsySelect>
                        </div>
                    </div>

                    <div className="split-inputs">
                        <div>
                            <FormsyText
                                name="permanentPincode"
                                required
                                floatingLabelText="Pin Code"
                                fullWidth={true}
                                className="text-align-left"
                            />
                        </div>
                        <div>
                            <FormsySelect
                              name="permanentState"
                              required
                              floatingLabelText="Stay Type"
                              fullWidth={true}
                            >
                                <MenuItem value={'rented'} primaryText="Rented" />
                                <MenuItem value={'owned'} primaryText="Owned" />
                            </FormsySelect>
                        </div>
                    </div>

                    <Checkbox label="Communication Address is same as permanent address" name="sameAsPermanent" className="checkbox" onClick={this.addressCheck.bind(this)} />

                    <FormsyText
                        name="communicationAddress"
                        required={!sameAsPermanent}
                        floatingLabelText="Address"
                        fullWidth={true}
                        className="text-align-left"
                        disabled={sameAsPermanent}
                    />

                    <div className="split-inputs">
                        <div>
                            <FormsyText
                                name="communicationCity"
                                required={!sameAsPermanent}
                                floatingLabelText="City"
                                fullWidth={true}
                                className="text-align-left"
                                disabled={sameAsPermanent}
                            />
                        </div>
                        <div>
                            <FormsySelect
                              name="communicationState"
                              required={!sameAsPermanent}
                              floatingLabelText="State"
                              fullWidth={true}
                              disabled={sameAsPermanent}
                            >
                                <MenuItem value={'tn'} primaryText="Tamil Nadu" />
                                <MenuItem value={'kl'} primaryText="Kerala" />
                            </FormsySelect>
                        </div>
                    </div>

                    <div className="split-inputs">
                        <div>
                            <FormsyText
                                name="communicationPincode"
                                required={!sameAsPermanent}
                                floatingLabelText="Pin Code"
                                fullWidth={true}
                                className="text-align-left"
                                disabled={sameAsPermanent}
                            />
                        </div>
                        <div>
                            <FormsySelect
                              name="communicationState"
                              required={!sameAsPermanent}
                              floatingLabelText="Stay Type"
                              fullWidth={true}
                              disabled={sameAsPermanent}
                            >
                                <MenuItem value={'rented'} primaryText="Rented" />
                                <MenuItem value={'owned'} primaryText="Owned" />
                            </FormsySelect>
                        </div>
                    </div>

                    <div className="action-bar">
                        <FlatButton label="Cancel" secondary={true} />
                        <RaisedButton label="Continue" primary={true} type="submit" disabled={!this.state.canSubmit}/>
                    </div>
                </Formsy.Form>
            </div>
        )
    }
}

export default Address;
