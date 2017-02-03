import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { FormsyText, FormsySelect } from 'formsy-material-ui/lib';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';

class Professional extends Component {
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

    render () {
        return (
            <div className="register-form">
                <div className="label-header">
                    Please fill up your employment details
                </div>

                <Formsy.Form
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    onValidSubmit={this.submitForm}
                    onInvalidSubmit={this.notifyFormError}
                >
                    <FormsyText
                        name="employerName"
                        required
                        floatingLabelText="Employer Name"
                        fullWidth={true}
                        className="text-align-left"
                    />
                    <FormsyText
                        name="designation"
                        required
                        floatingLabelText="Designation"
                        fullWidth={true}
                        className="text-align-left"
                    />
                    <FormsyText
                        name="professionalEmail"
                        validations="isEmail"
                        required
                        floatingLabelText="Professional Email ID"
                        fullWidth={true}
                        className="text-align-left"
                    />
                    <FormsyText
                        name="website"
                        required
                        floatingLabelText="Website"
                        fullWidth={true}
                        className="text-align-left"
                    />

                <div className="group-label">
                        Experience in current company
                    </div>

                    <div className="split-inputs">
                        <div>
                            <FormsyText
                              name="experienceYears"
                              validations="isNumeric"
                              required
                              floatingLabelText="Years"
                              fullWidth={true}
                            />
                        </div>
                        <div>
                            <FormsyText
                              name="experienceMonths"
                              validations="isNumeric"
                              required
                              floatingLabelText="Months"
                              fullWidth={true}
                            />
                        </div>
                    </div>

                    <div className="group-label">
                        Total Work Experience
                    </div>

                    <div className="split-inputs">
                        <div>
                            <FormsyText
                              name="totalExperienceYears"
                              validations="isNumeric"
                              required
                              floatingLabelText="Years"
                              fullWidth={true}
                            />
                        </div>
                        <div>
                            <FormsyText
                              name="totalExperienceMonths"
                              validations="isNumeric"
                              required
                              floatingLabelText="Months"
                              fullWidth={true}
                            />
                        </div>
                    </div>

                    <div className="divider" style={ {marginTop: '20px'} }></div>

                    <div className="group-label">
                        Employer Address
                    </div>

                    <FormsyText
                        name="employerAddress"
                        required
                        floatingLabelText="Address"
                        fullWidth={true}
                        className="text-align-left"
                    />

                    <div className="split-inputs">
                        <div>
                            <FormsyText
                                name="employerCity"
                                required
                                floatingLabelText="City"
                                fullWidth={true}
                                className="text-align-left"
                            />
                        </div>
                        <div>
                            <FormsySelect
                              name="employerState"
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
                                name="employerPincode"
                                required
                                floatingLabelText="Pin Code"
                                fullWidth={true}
                                className="text-align-left"
                            />
                        </div>
                        <div>
                            <FormsyText
                                name="landlineNumber"
                                required
                                floatingLabelText="Landline Number"
                                fullWidth={true}
                                className="text-align-left"
                            />
                        </div>
                    </div>

                    <div className="divider" style={ {marginTop: '20px'} }></div>

                    <div className="group-label">
                        Professional Reference
                    </div>

                    <FormsyText
                        name="referenceName"
                        required
                        floatingLabelText="Reference Full Name"
                        fullWidth={true}
                        className="text-align-left"
                    />
                    <FormsyText
                        name="referenceDesignation"
                        required
                        floatingLabelText="Designation"
                        fullWidth={true}
                        className="text-align-left"
                    />
                    <FormsyText
                        name="referenceEmail"
                        validations="isEmail"
                        required
                        floatingLabelText="Designation"
                        fullWidth={true}
                        className="text-align-left"
                    />
                    <FormsyText
                        name="phoneNumber"
                        validations="isNumeric"
                        required
                        floatingLabelText="Phone Number"
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

export default Professional;
