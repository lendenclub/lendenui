import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { FormsySelect } from 'formsy-material-ui/lib';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import {styleConstants} from '../../../../utils/StyleConstants';
import DeletableTable from '../../../DeletableTable';
import UploadFiles from '../../../UploadFiles';

const documentType = ["Bank Statement", "Rent Agreement"];

const columns = [{
    id: 'documentType',
    label: 'Type'
}, {
    id: 'fileName',
    label: 'File'
}]

class Documents extends Component {
    constructor () {
        super();
        this.state = { canSubmit: false, addedDocuments: [], selectedFile: null, showFileMissingError: false };
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

    submitForm = (data, resetForm) => {
        if (this.state.selectedFile) {
            resetForm();
            data.fileName = this.state.selectedFile.name;
            this.setState({
                addedDocuments: [...this.state.addedDocuments, data],
                selectedFile: null
            });
        } else {
            this.setState({
                showFileMissingError: true
            })
        }
    }

    notifyFormError (data) {
        console.error('Form error:', data);
    }

    deleteDocument = (documentIndex, event) => {
        let addedDocuments = this.state.addedDocuments;
        addedDocuments.splice(documentIndex, 1);
        this.setState({
            addedDocuments: addedDocuments
        })
    }

    onDrop = (files) => {
        this.setState({
            selectedFile: files[0],
            showFileMissingError: false
        });
    }

    deleteSelectedFile = () => {
        this.setState({
            selectedFile: null
        })
    }

    resetForm = () => {
        this.refs.form.reset();
    }

    render () {
        return (
            <div className="register-form">
                <div className="label-header">
                    Please upload the required documents
                </div>

                <Formsy.Form
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    onValidSubmit={this.submitForm}
                    onInvalidSubmit={this.notifyFormError}
                    ref="form"
                >
                    <FormsySelect
                      name="documentType"
                      required
                      floatingLabelText="Type of Document"
                      fullWidth={true}
                    >
                        {documentType.map( (item, idx) => {
                            return (
                                <MenuItem key={idx} value={item} primaryText={item} />
                            )
                        })}
                    </FormsySelect>

                    <UploadFiles
                        onFileSelection={this.onDrop.bind(this)}
                        selectedFile={this.state.selectedFile}
                        showFileMissingError={this.state.showFileMissingError}
                        deleteSelectedFile={this.deleteSelectedFile.bind(this)}
                    />

                    <div className="add-button">
                        <div className="reset-link" onClick={this.resetForm}>Reset</div>
                        <RaisedButton label="Add" type="submit" disabled={!this.state.canSubmit} backgroundColor={styleConstants.accentBlue} />
                    </div>
                </Formsy.Form>

                <div className="deletable-table-container">
                    <DeletableTable data={this.state.addedDocuments} onDelete={this.deleteDocument.bind(this)} columns={columns} />
                </div>

                <div className="action-bar">
                    <FlatButton label="Back" onClick={this.props.gotoPreviousTab} secondary={true} />
                    <RaisedButton label="Next" primary={true} type="submit"/>
                </div>
            </div>
        )
    }
}

export default Documents;
