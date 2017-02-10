import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import {styleConstants} from '../utils/StyleConstants';

class UploadFiles extends Component {
    onOpenClick = () => {
      this.refs.dropzone.open();
    }

    render () {
        let selectedFile = this.props.selectedFile,
            uploadLabelClass = selectedFile ? 'label small-label' : 'label big-label',
            fileMissingErrorTextStyle = this.props.showFileMissingError ? {display: 'block'} : {display: 'none'},
            fileInputStyle = this.props.showFileMissingError ? { borderBottom: '1px solid #f44336'} : {},
            label = this.props.selectedFile ? this.props.label || 'Selected File' : this.props.helperText || 'Select a file to upload',
            buttonLabel = this.props.uploaded ? 'Uploaded' : 'Upload';

        return (
            <div className="upload-files">
                <Dropzone className="dropzone" accept={this.props.acceptedFileType || ''} ref="dropzone" onDrop={this.props.onFileSelection} multiple={false}></Dropzone>

                <div className="document-upload">

                    <div className="file-display" style={fileInputStyle} onClick={this.onOpenClick.bind(this)}>
                        <div className={uploadLabelClass}>{label}</div>
                        { this.props.selectedFile ? (
                            <Chip onRequestDelete={this.props.deleteSelectedFile} labelColor='#B9B8B8'>
                                {this.props.selectedFile.name}
                            </Chip>
                        ) : null}
                    </div>

                    { this.props.showUploadButton ? (
                        <div className="upload-button">
                            <RaisedButton
                                label={buttonLabel}
                                disabled={!this.props.selectedFile || this.props.uploaded}
                                backgroundColor={styleConstants.accentBlue}
                                onClick={this.props.uploadFile}
                            />
                        </div>
                    ) : null}

                </div>
                <div style={fileMissingErrorTextStyle} className="showError">Please select a document to upload</div>

            </div>
        )
    }
}

export default UploadFiles;
