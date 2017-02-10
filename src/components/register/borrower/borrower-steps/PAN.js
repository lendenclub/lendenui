import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { FormsyText, FormsyDate } from 'formsy-material-ui/lib';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import UploadFiles from '../../../UploadFiles';
import {styleConstants} from '../../../../utils/StyleConstants';

const verifyPANStyle = {
    marginTop: '20px'
}

class PAN extends Component {
    constructor () {
        super();
        this.state = { canSubmit: false, selectedFile: null, showFileMissingError: false, disableForm: true, panUploaded: false };
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

    onDrop = (files) => {
        this.setState({
            selectedFile: files[0],
            showFileMissingError: false
        });
    }

    deleteSelectedFile = () => {
        this.setState({
            selectedFile: null,
            panUploaded: false,
            disableForm: true
        })
        this.refs.form.reset();
        this.resetFormValues();
    }

    resetFormValues = () => {
        this.setState({
            panID: '',
            fullName: '',
            fatherName: '',
            dob: {}
        })
    }

    uploadPAN = () => {
        // Make the api call to fetch the info from the file
        // On response - enable the fields and populate the data
        this.setState({
            panUploaded: true
        });
    }

    verifyPAN = () => {
        this.setState({
            disableForm: false,
            panID: 'AMXPA8503F',
            fullName: 'Arjun Sasikumar',
            fatherName: 'Sasikumar R',
            dob: new Date('1986,10,26')
        });
    }

    render () {
        return (
            <div className="register-form">
                <div className="label-header">
                    Please verify your details and edit if needed
                </div>

                <UploadFiles
                    onFileSelection={this.onDrop.bind(this)}
                    selectedFile={this.state.selectedFile}
                    deleteSelectedFile={this.deleteSelectedFile.bind(this)}
                    showUploadButton={true}
                    helperText="Click here to upload your PAN"
                    label="Selected Pan Card"
                    uploadFile={this.uploadPAN.bind(this)}
                    uploaded={this.state.panUploaded}
                />

            <div style={verifyPANStyle} className="text-align-center">
                <RaisedButton
                    label="Verify my pan"
                    disabled={!this.state.panUploaded}
                    backgroundColor={styleConstants.accentBlue}
                    onClick={this.verifyPAN.bind(this)}
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
                        name="panID"
                        required
                        floatingLabelText="PAN Number"
                        fullWidth={true}
                        disabled={this.state.disableForm}
                        className="text-align-left"
                        value={this.state.panID}
                    />
                    <FormsyText
                        name="fullName"
                        required
                        floatingLabelText="Full Name"
                        fullWidth={true}
                        disabled={this.state.disableForm}
                        className="text-align-left"
                        value={this.state.fullName}
                    />

                    <FormsyText
                        name="fatherName"
                        required
                        floatingLabelText="Father's Name"
                        fullWidth={true}
                        disabled={this.state.disableForm}
                        className="text-align-left"
                        value={this.state.fatherName}
                    />

                    <FormsyDate
                        name="dob"
                        required
                        floatingLabelText="Date of Birth"
                        fullWidth={true}
                        disabled={this.state.disableForm}
                        className="text-align-left"
                        value={this.state.dob}
                    />

                    <div className="action-bar">
                        <FlatButton label="Back" onClick={this.props.gotoPreviousTab} secondary={true} />
                        <RaisedButton label="Next" primary={true} type="submit" disabled={!this.state.canSubmit}/>
                    </div>
                </Formsy.Form>
            </div>
        )
    }
}

export default PAN;
