import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { FormsyText, FormsySelect } from 'formsy-material-ui/lib';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const allLoanCategories = [ 'Home Renovation', 'Debt Consolidation', 'Medical Emergency', 'Rental Deposit', 'Wedding Loan', 'Vacation Loan', 'Family Function Loan', 'Advance Salary']

const allTenureCategories = [{
        label: '3 months - 6 months',
        name: '3-6'
    }, {
        label: '3 months - 6 months',
        name: '6-9'
    }, {
        label: '9 months - 12 months',
        name: '9-12'
    }, {
        label: '12 months - 15 months',
        name: '12-15'
    }, {
        label: '15 months - 18 months',
        name: '15-18'
    }]

class Requirements extends Component {
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

    render () {
        return (
            <div className="register-form">
                <div className="label-header">
                    Enter your loan requirements
                </div>

                <Formsy.Form
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    onValidSubmit={this.submitForm}
                    onInvalidSubmit={this.notifyFormError}
                    ref="form"
                >
                    <FormsyText
                        name="amountRequired"
                        required
                        floatingLabelText="Enter the loan amount you require"
                        fullWidth={true}
                        className="text-align-left"
                    />

                    <FormsySelect
                      name="loanPurpose"
                      required
                      floatingLabelText="Select the purpose of your loan"
                      fullWidth={true}
                    >
                        {allLoanCategories.map( (item) => {
                            return (
                                <MenuItem key={item} value={item} primaryText={item} />
                            )
                        })}
                    </FormsySelect>

                    <FormsySelect
                      name="loanTenure"
                      required
                      floatingLabelText="Select the tenure period of your loan"
                      fullWidth={true}
                    >
                        {allTenureCategories.map( (item) => {
                            return (
                                <MenuItem key={item.name} value={item.name} primaryText={item.label} />
                            )
                        })}
                    </FormsySelect>

                    <FormsyText
                        name="loanDescription"
                        required
                        floatingLabelText="Please write the description of the loan"
                        fullWidth={true}
                        className="text-align-left"
                    />

                    <div className="action-bar">
                        <div></div>
                        <RaisedButton label="Next" primary={true} type="submit" disabled={!this.state.canSubmit}/>
                    </div>
                </Formsy.Form>
            </div>
        )
    }
}

export default Requirements;
