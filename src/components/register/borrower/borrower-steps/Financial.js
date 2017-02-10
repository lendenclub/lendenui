import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { FormsyText, FormsySelect } from 'formsy-material-ui/lib';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import UploadFiles from '../../../UploadFiles';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

class Financial extends Component {
    constructor () {
        super();
        this.state = {
            canSubmit: false,
            selectedPayslip1: false,
            selectedPayslip2: false,
            showPayslip1MissingError: false,
            showPayslip2MissingError: false,
            payslip1Uploaded: false,
            payslip2Uploaded: false,
            disableForm: true
        };
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

    submitForm = (data) => {
        console.log(JSON.stringify(data, null, 4));
        this.gotoNextTab();
    }

    gotoNextTab = () => {
        this.props.gotoNextTab();
    }

    notifyFormError (data) {
        console.error('Form error:', data);
    }

    onDropPayslip1 = (files) => {
        this.setState({
            selectedPayslip1: files[0],
            showPayslip1MissingError: false
        });
    }

    onDropPayslip2 = (files) => {
        this.setState({
            selectedPayslip2: files[0],
            showPayslip2MissingError: false
        });
    }

    uploadPayslip1 = () => {
        this.setState({
            payslip1Uploaded: true
        })
    }

    uploadPayslip2 = () => {
        this.setState({
            payslip2Uploaded: true
        })
    }

    deletePayslip1 = () => {
        this.setState({
            selectedPayslip1: null,
            payslip1Uploaded: false
        })
    }

    deletePayslip2 = () => {
        this.setState({
            selectedPayslip2: null,
            payslip2Uploaded: false
        })
    }

    render () {
        let currentDate = new Date(),
            currentMonth = currentDate.getMonth(),
            offset1 = currentMonth < 1 ? 12 : currentMonth,
            offset2 = currentMonth < 2 ? currentMonth < 1 ? 12 : 13 : currentMonth, // someone give me an award #facepalm
            salary1Label = `${monthNames[offset1 - 1]} Salary`,
            salary2Label = `${monthNames[offset2 - 2]} Salary`,
            payslip1UploadHelper = `Click here to upload your ${monthNames[offset1 - 1]} payslip`,
            payslip2UploadHelper = `Click here to upload your ${monthNames[offset2 - 2]} payslip`,
            payslip1Label = `Selected ${monthNames[offset1 - 1]} payslip`,
            payslip2Label = `Selected ${monthNames[offset2 - 2]} payslip`;

        return (
            <div className="register-form">
                <div className="label-header">
                    Please upload your last two months salary slip
                </div>

                <UploadFiles
                    onFileSelection={this.onDropPayslip1.bind(this)}
                    selectedFile={this.state.selectedPayslip1}
                    deleteSelectedFile={this.deletePayslip1.bind(this)}
                    showUploadButton={true}
                    helperText={payslip1UploadHelper}
                    label={payslip1Label}
                    uploadFile={this.uploadPayslip1.bind(this)}
                    uploaded={this.state.payslip1Uploaded}
                />

                <UploadFiles
                    onFileSelection={this.onDropPayslip2.bind(this)}
                    selectedFile={this.state.selectedPayslip2}
                    deleteSelectedFile={this.deletePayslip2.bind(this)}
                    showUploadButton={true}
                    helperText={payslip2UploadHelper}
                    label={payslip2Label}
                    uploadFile={this.uploadPayslip2.bind(this)}
                    uploaded={this.state.payslip2Uploaded}
                />


                <Formsy.Form
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    onValidSubmit={this.submitForm}
                    onInvalidSubmit={this.notifyFormError}
                    ref="form"
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
                        <FlatButton label="Back" onClick={this.props.gotoPreviousTab} secondary={true} />
                        <RaisedButton label="Next" primary={true} type="submit" disabled={!(this.state.canSubmit && this.state.payslip1Uploaded && this.state.payslip2Uploaded)}/>
                    </div>
                </Formsy.Form>
            </div>
        )
    }
}

export default Financial;
