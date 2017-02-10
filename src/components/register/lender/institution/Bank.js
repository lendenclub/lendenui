import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { FormsyText, FormsySelect } from 'formsy-material-ui/lib';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import UploadFiles from '../../../UploadFiles';
import {styleConstants} from '../../../../utils/StyleConstants';

const verifyChequeStyle = {
    marginTop: '20px'
}

class Bank extends Component {
    constructor () {
        super();
        this.state = { canSubmit: false, selectedFile: null, showFileMissingError: false, disableForm: true, chequeUploaded: false };
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

    onDrop = (files) => {
        this.setState({
            selectedFile: files[0],
            showFileMissingError: false
        });
    }

    deleteSelectedFile = () => {
        this.setState({
            selectedFile: null,
            chequeUploaded: false,
            disableForm: true
        })
        this.refs.form.reset();
        this.resetFormValues();
    }

    resetFormValues = () => {
        this.setState({
            accountNumber: '',
            bankName: '',
            ifscCode: '',
            accountType: '',
            name: ''
        })
    }

    uploadCheque = () => {
        // Make the api call to fetch the info from the file
        // On response - enable the fields and populate the data
        this.setState({
            chequeUploaded: true
        });
    }

    verifyCheque = () => {
        this.setState({
            disableForm: false,
            accountNumber: 123456789,
            bankName: 'ICICI Bank',
            ifscCode: 'ICIC12345',
            accountType: 'savings',
            name: 'Batman Kumar'
        });
    }

    render () {
        return (
            <div className="register-form">
                <div className="label-header">
                    Please upload your cheque
                </div>

                <UploadFiles
                    onFileSelection={this.onDrop.bind(this)}
                    selectedFile={this.state.selectedFile}
                    deleteSelectedFile={this.deleteSelectedFile.bind(this)}
                    showUploadButton={true}
                    helperText="Click here to upload your Cheque"
                    label="Selected Cheque"
                    uploadFile={this.uploadCheque.bind(this)}
                    uploaded={this.state.chequeUploaded}
                />

                <div style={verifyChequeStyle} className="text-align-center">
                    <RaisedButton
                        label="Verify my cheque"
                        disabled={!this.state.chequeUploaded}
                        backgroundColor={styleConstants.accentBlue}
                        onClick={this.verifyCheque.bind(this)}
                    />
                </div>

                <Formsy.Form
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    onValidSubmit={this.submitForm}
                    onInvalidSubmit={this.notifyFormError}
                    ref="form"
                >
                    <FormsyText
                        name="accountNumber"
                        required
                        floatingLabelText="Bank Account Number"
                        validations="isNumeric"
                        fullWidth={true}
                        className="text-align-left"
                        disabled={this.state.disableForm}
                        value={this.state.accountNumber}
                    />
                    <FormsyText
                        name="bankName"
                        required
                        floatingLabelText="Bank Name"
                        fullWidth={true}
                        className="text-align-left"
                        disabled={this.state.disableForm}
                        value={this.state.bankName}
                    />
                    <FormsyText
                        name="ifscCode"
                        required
                        floatingLabelText="IFSC Code"
                        fullWidth={true}
                        className="text-align-left"
                        disabled={this.state.disableForm}
                        value={this.state.ifscCode}
                    />
                    <FormsySelect
                      name="accountType"
                      required
                      floatingLabelText="Account Type"
                      fullWidth={true}
                      disabled={this.state.disableForm}
                      value={this.state.accountType}
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
                        disabled={this.state.disableForm}
                        value={this.state.name}
                    />

                    <div className="action-bar">
                        <FlatButton label="Back" onClick={this.props.gotoPreviousTab} secondary={true} />
                        <RaisedButton label="Next" primary={true} type="submit" disabled={!(this.state.canSubmit && this.state.chequeUploaded)}/>
                    </div>
                </Formsy.Form>
            </div>
        )
    }
}

export default Bank;
