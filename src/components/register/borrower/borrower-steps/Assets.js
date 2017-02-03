import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { FormsySelect } from 'formsy-material-ui/lib';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import {styleConstants} from '../../../../utils/StyleConstants';
import DeletableTable from '../../../DeletableTable';

const assetTypes = ['Two Wheeler', 'Four Wheeler', 'House']

const ownerTypes = ['Self', 'Rented', 'Family Owned']

const loans = ['Yes', 'No']

const columns = [{
    id: 'assetType',
    label: 'Asset Types'
}, {
    id: 'owner',
    label: 'Owner'
}, {
    id: 'anyLoan',
    label: 'Any Loan'
}]

class Assets extends Component {
    constructor () {
        super();
        this.state = { canSubmit: false, sameAsPermanent: false, addedAssets: [] };
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
        resetForm();
        this.setState({
            addedAssets: [...this.state.addedAssets, data]
        });
    }

    notifyFormError (data) {
        console.error('Form error:', data);
    }

    deleteAsset = (assetIndex, event) => {
        let addedAssets = this.state.addedAssets;
        addedAssets.splice(assetIndex, 1);
        this.setState({
            addedAssets: addedAssets
        })
    }

    render () {
        return (
            <div className="register-form">
                <div className="label-header">
                    Please provide the details of assets you own
                </div>

                <Formsy.Form
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    onValidSubmit={this.submitForm}
                    onInvalidSubmit={this.notifyFormError}
                    ref="form"
                >
                    <FormsySelect
                      name="assetType"
                      required
                      floatingLabelText="Type of Asset"
                      fullWidth={true}
                    >
                        {assetTypes.map( (item, idx) => {
                            return (
                                <MenuItem key={idx} value={item} primaryText={item} />
                            )
                        })}
                    </FormsySelect>

                    <div className="split-inputs">
                        <div>
                            <FormsySelect
                              name="owner"
                              required
                              floatingLabelText="Owner"
                              fullWidth={true}
                            >
                                {ownerTypes.map( (item, idx) => {
                                    return (
                                        <MenuItem key={idx} value={item} primaryText={item} />
                                    )
                                })}
                            </FormsySelect>
                        </div>
                        <div>
                            <FormsySelect
                              name="anyLoan"
                              required
                              floatingLabelText="Any Loan"
                              fullWidth={true}
                            >
                                {loans.map( (item, idx) => {
                                    return (
                                        <MenuItem key={idx} value={item} primaryText={item} />
                                    )
                                })}
                            </FormsySelect>
                        </div>
                    </div>

                    <div className="add-button">
                        <RaisedButton label="Add" type="submit" disabled={!this.state.canSubmit} backgroundColor={styleConstants.accentBlue} />
                    </div>
                </Formsy.Form>

                { this.state.addedAssets.length ? (
                    <div className="deletable-table-container">
                        <DeletableTable data={this.state.addedAssets} onDelete={this.deleteAsset.bind(this)} columns={columns} />
                    </div>
                ) : (
                    ''
                )}

                <div className="action-bar">
                    <FlatButton label="Cancel" secondary={true} />
                    <RaisedButton label="Continue" primary={true} type="submit"/>
                </div>
            </div>
        )
    }
}

export default Assets;
