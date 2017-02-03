import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { FormsyText, FormsySelect } from 'formsy-material-ui/lib';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';

class Personal extends Component {
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
                    Please fill up your personal and family details
                </div>

                <Formsy.Form
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    onValidSubmit={this.submitForm}
                    onInvalidSubmit={this.notifyFormError}
                >
                    <FormsyText
                        name="highestQualification"
                        required
                        floatingLabelText="Highest Qualification"
                        fullWidth={true}
                        className="text-align-left"
                    />
                    <FormsyText
                        name="specialization"
                        required
                        floatingLabelText="Specialization"
                        fullWidth={true}
                        className="text-align-left"
                    />
                    <FormsyText
                        name="parentSpouseName"
                        required
                        floatingLabelText="Parent's/Spouse's Name"
                        fullWidth={true}
                        className="text-align-left"
                    />
                    <FormsySelect
                      name="maritalStatus"
                      required
                      floatingLabelText="Marital Status"
                      fullWidth={true}
                    >
                        <MenuItem value={'single'} primaryText="Single" />
                        <MenuItem value={'married'} primaryText="Married" />
                        <MenuItem value={'divorced'} primaryText="Divorced" />
                        <MenuItem value={'widowed'} primaryText="Widowed" />
                    </FormsySelect>
                    <FormsyText
                      name="referenceContact"
                      validations="isNumeric"
                      required
                      floatingLabelText="Personal Reference Contact Number (Parent/Spouse)"
                      fullWidth={true}
                    />
                    <div className="split-inputs">
                        <div>
                            <FormsyText
                              name="totalFamilyMembers"
                              validations="isNumeric"
                              required
                              floatingLabelText="Total Family Members"
                              fullWidth={true}
                            />
                        </div>
                        <div>
                            <FormsyText
                              name="totalEarningMembers"
                              validations="isNumeric"
                              required
                              floatingLabelText="Total Earning Members"
                              fullWidth={true}
                            />
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

export default Personal;
