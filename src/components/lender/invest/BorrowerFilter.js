import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon';
import Checkbox from 'material-ui/Checkbox';
import { RiskCategories } from '../../../utils/RiskColors';
import AutoComplete from 'material-ui/AutoComplete';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const allLoanCategories = [ 'Home Renovation', 'Debt Consolidation', 'Medical Emergency', 'Rental Deposit', 'Wedding Loan', 'Vacation Loan', 'Family Function Loan', 'Advance Salary']

const RiskCheckbox = ({risk}) => {
    return (
        <Checkbox label={<RangeLabel label={risk.label} range={risk.range} color={risk.color} />} className="checkbox"/>
    )
}

const RangeLabel = ({label, range, color}) => {
    let style = {
        backgroundColor: color
    };

    return (
        <div className="risk-category">
            <div className="label">
                <div className="indicator" style={style}></div>
                {label}
            </div>
            <div className="range">
                {range}
            </div>
        </div>
    )
}

const chipStyle = {
    display: 'inline-flex',
    margin: '0 10px 10px 0'
}

const autoCompleteStyle = {
    marginTop: '-10px'
}

const autocompletListStyle = {
    color: '#B9B8B8',
    height: '250px',
    overflowY: 'auto'
}

class BorrowerFilter extends Component {
    constructor () {
        super();
        this.state = { loanCategories: allLoanCategories.slice(), selectedLoanCategories: [], searchText: '' };
    }

    categorySelected = (category, index) => {
        let loanCategories = this.state.loanCategories,
            selectedLoanCategories = this.state.selectedLoanCategories;

        selectedLoanCategories.push(category);
        loanCategories.splice(loanCategories.findIndex( item => item === category), 1);

        this.AutoComplete.setState( {searchText: ''} );
        this.setState( {loanCategories, selectedLoanCategories} );
    }

    deleteSelectedLoanCategory = (category) => {
        let loanCategories = this.state.loanCategories,
            selectedLoanCategories = this.state.selectedLoanCategories;

        selectedLoanCategories.splice(selectedLoanCategories.findIndex(item => item === category), 1);

        // When we re-add an item - item must be added to its original position as it is in allLoanCategories
        loanCategories = allLoanCategories.filter( (item) => {
            return !selectedLoanCategories.find( selected => selected === item);
        });

        this.setState( {loanCategories, selectedLoanCategories });
    }

    applyFilter = () => {

    }

    render () {
        return (
            <Drawer width={400} openSecondary={true} open={this.props.filterDrawerState} className="borrower-filter">
                <div className="drawer-content">
                    <div className="interest-rate-category category">
                        <div className="main-header">
                            <span>Borrower Filter</span>
                            <FontIcon className="material-icons close-icon" onClick={this.props.toggleFilterDrawer}>close</FontIcon>
                        </div>
                        <div className="category-header interest-rate-category-header">
                            <div>Risk Category</div>
                            <div>Interest Rate</div>
                        </div>
                        <div className="category-content">
                            {RiskCategories.map( (risk, idx) => {
                                return (
                                    <RiskCheckbox risk={risk} key={idx} />
                                )
                            })}
                        </div>
                    </div>

                    <div className="tenure category">
                        <div className="category-header">
                            Tenure
                        </div>
                        <div className="category-content">
                            <Checkbox label="3 months - 6 months" className="checkbox"/>
                            <Checkbox label="6 months - 9 months" className="checkbox"/>
                            <Checkbox label="9 months - 12 months" className="checkbox"/>
                            <Checkbox label="12 months - 15 months" className="checkbox"/>
                            <Checkbox label="15 months - 18 months" className="checkbox"/>
                        </div>
                    </div>

                    <div className="loan-category category">
                        <div className="category-header">
                            Loan Categories
                        </div>
                        <div className="category-content">
                            <AutoComplete
                                floatingLabelText="Select Category"
                                dataSource={this.state.loanCategories}
                                filter={AutoComplete.caseInsensitiveFilter}
                                openOnFocus={true}
                                fullWidth={true}
                                ref={(input) => { this.AutoComplete = input; }}
                                onNewRequest={this.categorySelected.bind(this)}
                                menuCloseDelay={100}
                                style={autoCompleteStyle}
                                listStyle={autocompletListStyle}
                            />
                        {this.state.selectedLoanCategories.map( (item, index) => {
                            return (
                                <Chip onRequestDelete={() => this.deleteSelectedLoanCategory(item)} key={item} style={chipStyle} labelColor='#B9B8B8'>
                                    {item}
                                </Chip>
                            )
                        })}
                        </div>
                    </div>

                </div>

                <Paper zDepth={2} className="filter-bar">
                    <RaisedButton label="Apply" primary={true} onClick={this.applyFilter} className="float-right"/>
                    <FlatButton label="Reset" secondary={true} onClick={this.applyFilter} className="float-left"/>
                </Paper>
            </Drawer>
        )
    }
}

export default BorrowerFilter;
