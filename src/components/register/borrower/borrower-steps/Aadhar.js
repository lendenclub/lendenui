import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { FormsyText, FormsySelect } from 'formsy-material-ui/lib';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import UploadFiles from '../../../UploadFiles';
import {styleConstants} from '../../../../utils/StyleConstants';

const verifyAadharStyle = {
    marginTop: '20px'
}

class Aadhar extends Component {
    constructor () {
        super();
        this.state = {
            canSubmit: false,
            selectedAadharFront: false,
            selectedAadharBack: false,
            showAadharFrontMissingError: false,
            showAadharBackMissingError: false,
            aadharFrontUploaded: false,
            aadharBackUploaded: false,
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

    onDropAadharFront = (files) => {
        this.setState({
            selectedAadharFront: files[0],
            showAadharFrontMissingError: false
        });
    }

    onDropAadharBack = (files) => {
        this.setState({
            selectedAadharBack: files[0],
            showAadharBackMissingError: false
        });
    }

    uploadAadharBack = () => {
        this.setState({
            aadharBackUploaded: true
        })
    }

    uploadAadharFront = () => {
        this.setState({
            aadharFrontUploaded: true
        })
    }

    verifyAadhar = () => {
        this.setState({
            disableForm: false,
            gender: 'male',
            aadharUID: 123456,
            indianNational: 'yes',
            residingInIndia: 'yes'
        });
    }

    deleteAadharFront = () => {
        this.setState({
            selectedAadharFront: null,
            aadharFrontUploaded: false
        })
        this.resetForm();
    }

    deleteAadharBack = () => {
        this.setState({
            selectedAadharBack: null,
            aadharBackUploaded: false
        })
        this.resetForm();
    }

    resetForm = () => {
        this.refs.form.reset();
        this.setState({
            disableForm: true,
            gender: '',
            aadharUID: '',
            indianNational: '',
            residingInIndia: ''
        })
    }

    render () {
        let { gender, aadharUID, indianNational, residingInIndia } = this.state;
        return (
            <div className="register-form">
                <div className="label-header">
                    Please upload your Aadhar card
                </div>

                <UploadFiles
                    onFileSelection={this.onDropAadharFront.bind(this)}
                    selectedFile={this.state.selectedAadharFront}
                    deleteSelectedFile={this.deleteAadharFront.bind(this)}
                    showUploadButton={true}
                    helperText="Click here to upload your Aadhar front side"
                    label="Selected Aadhar (front side)"
                    uploadFile={this.uploadAadharFront.bind(this)}
                    uploaded={this.state.aadharFrontUploaded}
                />

                <UploadFiles
                    onFileSelection={this.onDropAadharBack.bind(this)}
                    selectedFile={this.state.selectedAadharBack}
                    deleteSelectedFile={this.deleteAadharBack.bind(this)}
                    showUploadButton={true}
                    helperText="Click here to upload your Aadhar back side"
                    label="Selected Aadhar (back side)"
                    uploadFile={this.uploadAadharBack.bind(this)}
                    uploaded={this.state.aadharBackUploaded}
                />

            <div style={verifyAadharStyle} className="text-align-center">
                    <RaisedButton
                        label="Verify my Aadhar"
                        disabled={!this.state.aadharFrontUploaded || !this.state.aadharBackUploaded}
                        backgroundColor={styleConstants.accentBlue}
                        onClick={this.verifyAadhar.bind(this)}
                    />
                </div>

                <Formsy.Form
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    onValidSubmit={this.submitForm}
                    onInvalidSubmit={this.notifyFormError}
                    ref="form"
                >
                    <FormsySelect
                      name="gender"
                      required
                      floatingLabelText="Gender"
                      fullWidth={true}
                      disabled={this.state.disableForm}
                      value={gender}
                    >
                        <MenuItem value={'male'} primaryText="Male" />
                        <MenuItem value={'female'} primaryText="Female" />
                    </FormsySelect>

                    <FormsyText
                        name="aadharUID"
                        required
                        floatingLabelText="Aadhar UID Number"
                        fullWidth={true}
                        className="text-align-left"
                        disabled={this.state.disableForm}
                        value={aadharUID}
                    />

                    <FormsySelect
                      name="indianNational"
                      required
                      floatingLabelText="Indian National"
                      fullWidth={true}
                      disabled={this.state.disableForm}
                      value={indianNational}
                    >
                        <MenuItem value={'yes'} primaryText="Yes" />
                        <MenuItem value={'no'} primaryText="No" />
                    </FormsySelect>

                    <FormsySelect
                      name="residingInIndia"
                      required
                      floatingLabelText="Residing in India"
                      fullWidth={true}
                      disabled={this.state.disableForm}
                      value={residingInIndia}
                    >
                        <MenuItem value={'yes'} primaryText="Yes" />
                        <MenuItem value={'no'} primaryText="No" />
                    </FormsySelect>

                    <div className="action-bar">
                        <FlatButton label="Back" onClick={this.props.gotoPreviousTab} secondary={true} />
                        <RaisedButton label="Next" primary={true} type="submit" disabled={!this.state.canSubmit}/>
                    </div>
                </Formsy.Form>
            </div>
        )
    }
}

export default Aadhar;
