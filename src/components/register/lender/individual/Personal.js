import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import UploadFiles from '../../../UploadFiles';

class Personal extends Component {
    constructor () {
        super();
        this.state = { canSubmit: false, selectedPhotograph: null, photographUploaded: false };
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
            selectedPhotograph: files[0]
        });
    }

    deleteSelectedPhotograph = () => {
        this.setState({
            selectedPhotograph: null,
            photographUploaded: false
        })
    }

    uploadPhotograph = () => {
        // Make the api call to fetch the info from the file
        // On response - enable the fields and populate the data
        this.setState({
            photographUploaded: true
        });
    }

    render () {
        return (
            <div className="register-form">
                <div className="label-header">
                    Kindly fill up your personal and financial details
                </div>

                <Formsy.Form
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    onValidSubmit={this.submitForm}
                    onInvalidSubmit={this.notifyFormError}
                >
                    <FormsyText
                        name="occupation"
                        required
                        floatingLabelText="Occupation"
                        fullWidth={true}
                        className="text-align-left"
                    />

                    <FormsyText
                        name="grossAnnualIncome"
                        required
                        floatingLabelText="Gross Annual Income"
                        validations="isNumeric"
                        fullWidth={true}
                        className="text-align-left"
                    />

                    <UploadFiles
                        onFileSelection={this.onDrop.bind(this)}
                        selectedFile={this.state.selectedPhotograph}
                        deleteSelectedFile={this.deleteSelectedPhotograph.bind(this)}
                        showUploadButton={true}
                        helperText="Click here to upload your photograph"
                        label="Selected Photograph"
                        uploadFile={this.uploadPhotograph.bind(this)}
                        uploaded={this.state.photographUploaded}
                    />

                    <div className="action-bar">
                        <FlatButton label="Back" onClick={this.props.gotoPreviousTab} secondary={true} />
                        <RaisedButton label="Next" primary={true} type="submit" disabled={!(this.state.canSubmit && this.state.photographUploaded)}/>
                    </div>
                </Formsy.Form>
            </div>
        )
    }
}

export default Personal;
