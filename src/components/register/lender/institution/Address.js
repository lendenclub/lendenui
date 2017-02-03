import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { FormsyText, FormsySelect } from 'formsy-material-ui/lib';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';

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
        return (
            <div className="register-form">
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
