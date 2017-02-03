import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { FormsyText, FormsySelect } from 'formsy-material-ui/lib';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

class Financial extends Component {
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
        let currentDate = new Date(),
            currentMonth = currentDate.getMonth(),
            offset1 = currentMonth < 1 ? 12 : currentMonth,
            offset2 = currentMonth < 2 ? currentMonth < 1 ? 12 : 13 : currentMonth, // someone give me an award #facepalm
            salary1Label = `${monthNames[offset1 - 1]} Salary`,
            salary2Label = `${monthNames[offset2 - 2]} Salary`;

        return (
            <div className="register-form">
                <div className="label-header">
                    Please upload your last two months salary slip
                </div>

                <Formsy.Form
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    onValidSubmit={this.submitForm}
                    onInvalidSubmit={this.notifyFormError}
                >
                    <div className="split-inputs">
                        <div>
                            <FormsyText
                                name="salary1"
                                validations="isNumeric"
                                required
                                floatingLabelText={salary1Label}
                                fullWidth={true}
                                className="text-align-left"
                            />
                        </div>
                        <div>
                            <FormsyText
                                name="salary2"
                                validations="isNumeric"
                                required
                                floatingLabelText={salary2Label}
                                fullWidth={true}
                                className="text-align-left"
                            />
                        </div>
                    </div>

                    <div className="split-inputs">
                        <div>
                            <FormsySelect
                              name="incentiveType"
                              required
                              floatingLabelText="Incentive Type"
                              fullWidth={true}
                            >
                                <MenuItem value={'monthly'} primaryText="Monthly" />
                                <MenuItem value={'yearly'} primaryText="Yearly" />
                            </FormsySelect>
                        </div>
                        <div>
                            <FormsyText
                                name="incentiveAmount"
                                validations="isNumeric"
                                required
                                floatingLabelText="Incentive Amount"
                                fullWidth={true}
                                className="text-align-left"
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

export default Financial;
