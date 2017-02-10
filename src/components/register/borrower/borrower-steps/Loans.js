import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { FormsyText, FormsySelect } from 'formsy-material-ui/lib';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import {styleConstants} from '../../../../utils/StyleConstants';
import DeletableTable from '../../../DeletableTable';

const loanTypes = [ "Home Loan", "Personal Loan", "Education Loan"];

const columns = [{
    id: 'loanTypes',
    label: 'Loan Types'
}, {
    id: 'loanAmount',
    label: 'Amount'
}, {
    id: 'loanEmi',
    label: 'EMI'
}, {
    id: 'loanOutstanding',
    label: 'Outstanding'
}]

class Loans extends Component {
    constructor () {
        super();
        this.state = { canSubmit: false, sameAsPermanent: false, addedLoans: [] };
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
            addedLoans: [...this.state.addedLoans, data]
        });
    }

    notifyFormError (data) {
        console.error('Form error:', data);
    }

    deleteLoan = (loanIndex, event) => {
        let addedLoans = this.state.addedLoans;
        addedLoans.splice(loanIndex, 1);
        this.setState({
            addedLoans: addedLoans
        })
    }

    resetForm = () => {
        this.refs.form.reset();
    }

    render () {
        return (
            <div className="register-form">
                <div className="label-header">
                    Please provide the details of active loans you have
                </div>

                <Formsy.Form
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    onValidSubmit={this.submitForm}
                    onInvalidSubmit={this.notifyFormError}
                    ref="form"
                >
                    <FormsySelect
                      name="loanTypes"
                      required
                      floatingLabelText="Type of Loan"
                      fullWidth={true}
                    >
                        {loanTypes.map( (item, idx) => {
                            return (
                                <MenuItem key={idx} value={item} primaryText={item} />
                            )
                        })}
                    </FormsySelect>

                    <FormsyText
                        name="loanAmount"
                        required
                        floatingLabelText="Amount"
                        validations="isNumeric"
                        fullWidth={true}
                        className="text-align-left"
                    />

                    <div className="split-inputs">
                        <div>
                            <FormsyText
                                name="loanEmi"
                                required
                                floatingLabelText="EMI"
                                validations="isNumeric"
                                fullWidth={true}
                                className="text-align-left"
                            />
                        </div>
                        <div>
                            <FormsyText
                                name="loanOutstanding"
                                required
                                floatingLabelText="Outstanding"
                                validations="isNumeric"
                                fullWidth={true}
                                className="text-align-left"
                            />
                        </div>
                    </div>

                    <div className="add-button">
                        <div className="reset-link" onClick={this.resetForm}>Reset</div>
                        <RaisedButton label="Add" type="submit" disabled={!this.state.canSubmit} backgroundColor={styleConstants.accentBlue} />
                    </div>
                </Formsy.Form>

                <div className="deletable-table-container">
                    <DeletableTable data={this.state.addedLoans} onDelete={this.deleteLoan.bind(this)} columns={columns} />
                </div>

                <div className="action-bar">
                    <FlatButton label="Back" onClick={this.props.gotoPreviousTab} secondary={true} />
                    <RaisedButton label="Next" onClick={this.props.gotoNextTab} primary={true} type="submit"/>
                </div>
            </div>
        )
    }
}

export default Loans;
