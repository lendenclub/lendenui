import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon';
import Checkbox from 'material-ui/Checkbox';
import { RiskCategories } from '../../../utils/RiskColors';
import { styleConstants } from '../../../utils/StyleConstants';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const chipStyle = {
    display: 'inline-flex',
    margin: '0 10px 10px 0'
}

const resetButtonStyle = {
    color: 'white'
}

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

const RiskCheckbox = ({risk, checked, updateRisk}) => {
    return (
        <Checkbox checked={checked} label={<RangeLabel label={risk.label} range={risk.range} color={risk.color} />} name={risk.label} className="checkbox" onClick={updateRisk}/>
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

class BorrowerFilter extends Component {
    constructor () {
        super();
        this.state = { loanCategories: allLoanCategories.slice(), selectedLoanCategories: [], disableLoanCategory: false, riskCategories: RiskCategories.slice(), tenureCategories: allTenureCategories.slice() };
        this.filterOptions = { tenure: [], interest: [], loanCategories: [] };
    }

    categorySelected = (event, index, category) => {
        let loanCategories = this.state.loanCategories,
            selectedLoanCategories = this.state.selectedLoanCategories;

        if (category !== null) {
            selectedLoanCategories.push(category);
            loanCategories.splice(loanCategories.findIndex( item => item === category), 1);
            this.setState({
                loanCategories,
                selectedLoanCategories,
                disableLoanCategory: allLoanCategories.length === selectedLoanCategories.length
            });
        }
        this.updateLoanCategories();
        this.scrollToBottom();
    }

    scrollToBottom () {
        let drawer = document.getElementsByClassName('drawer-content')[0];
        setTimeout( function () {
            drawer.scrollTop = drawer.scrollHeight;
        }, 100);
    }

    deleteSelectedLoanCategory = (category) => {
        let loanCategories = this.state.loanCategories,
            selectedLoanCategories = this.state.selectedLoanCategories;

        selectedLoanCategories.splice(selectedLoanCategories.findIndex(item => item === category), 1);

        // When we re-add an item - item must be added to its original position as it is in allLoanCategories
        loanCategories = allLoanCategories.filter( (item) => {
            return !selectedLoanCategories.find( selected => selected === item);
        });

        this.setState({
            loanCategories,
            selectedLoanCategories,
            disableLoanCategory: allLoanCategories.length === selectedLoanCategories.length
        });
        this.updateLoanCategories();
    }

    applyFilter = () => {
        let { tenure, interest, loanCategories } = this.filterOptions,
            t = tenure.join(),
            i = interest.join(),
            lp = loanCategories.join(),
            query = '';

        if (t) {
            query += `t=${t}`;
        }

        if (i) {
            query += query !== '' ? `&i=${i}` : `i=${i}`;
        }

        if (lp) {
            query += query !== '' ? `&lp=${lp}` : `lp=${lp}`;
        }
        this.props.applyFilter(query);
    }

    resetFilters = (e) => {
        let { riskCategories, tenureCategories } = this.state;

        tenureCategories.forEach( (item) => item.checked = false);
        riskCategories.forEach( (item) => item.checked = false );
        this.setState({
            riskCategories,
            tenureCategories,
            selectedLoanCategories: [],
            loanCategories: allLoanCategories.slice()
        });
        this.filterOptions = { tenure: [], interest: [], loanCategories: [] };
        this.props.applyFilter();
    }

    updateLoanCategories = () => {
        this.filterOptions.loanCategories = this.state.selectedLoanCategories.map( (item) => item.toUpperCase() );
    }

    updateTenure = (e) => {
        let tenure = this.filterOptions.tenure,
            option = e.target.name,
            tenureCategories = this.state.tenureCategories,
            activeObject = tenureCategories.find( (item) => item.name === option);

        //Toggle clicked checkbox
        activeObject.checked = !activeObject.checked;
        this.setState({
            tenureCategories
        });

        if (tenure.includes(option)) {
            tenure.splice(tenure.findIndex(item => item === option), 1);
        } else {
            tenure.push(option);
        }
    }

    updateRisk = (e) => {
        let interest = this.filterOptions.interest,
            label = e.target.name,
            option = label.replace(/ Risk/g, '').toUpperCase(),
            riskCategories = this.state.riskCategories,
            activeObject = riskCategories.find( (item) => item.label === label);

        //Toggle clicked checkbox
        activeObject.checked = !activeObject.checked;
        this.setState({
            riskCategories
        });

        if (interest.includes(option)) {
            interest.splice(interest.findIndex(item => item === option), 1);
        } else {
            interest.push(option);
        }
    }

    render () {
        let drawerWidth = this.props.isMobile ? 300 : 400;

        return (
            <Drawer width={drawerWidth} openSecondary={true} open={this.props.filterDrawerState} className="borrower-filter">
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
                            {this.state.riskCategories.map( (risk, idx) => {
                                risk.checked = risk.checked || false;
                                return (
                                    <RiskCheckbox risk={risk} checked={risk.checked} key={idx} updateRisk={this.updateRisk.bind(this)}/>
                                )
                            })}
                        </div>
                    </div>

                    <div className="tenure category">
                        <div className="category-header">
                            Tenure
                        </div>
                        <div className="category-content">
                            {this.state.tenureCategories.map( (item, idx) => {
                                item.checked = item.checked || false;
                                return (
                                    <Checkbox key={idx} label={item.label} name={item.name} checked={item.checked} className="checkbox" onClick={this.updateTenure.bind(this)}/>
                                )
                            })}
                        </div>
                    </div>

                    <div className="loan-category category">
                        <div className="category-header">
                            Loan Categories
                        </div>
                        <div className="category-content">
                            <SelectField
                                floatingLabelText="Select a Loan Category"
                                value={this.state.value}
                                onChange={this.categorySelected.bind(this)}
                                disabled={this.state.disableLoanCategory}
                                fullWidth={true}
                                floatingLabelStyle={ {marginTop: '-25px', color: styleConstants.darkGray} }
                                iconStyle={ {marginTop: '-20px'} }
                                style={ {height: '50px'} }
                                listStyle={ {backgroundColor: styleConstants.selectListBgColor} }
                            >
                                <MenuItem value={null} primaryText="" />
                                {this.state.loanCategories.map( (item, index) => {
                                    return (
                                        <MenuItem key={index} value={item} primaryText={item} style={ {color: styleConstants.textWhite} }/>
                                    )
                                })}
                            </SelectField>

                            <div className="chips-list">
                                {this.state.selectedLoanCategories.map( (item, index) => {
                                    return (
                                        <Chip onRequestDelete={() => this.deleteSelectedLoanCategory(item)} key={item} style={chipStyle}>
                                            {item}
                                        </Chip>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </div>

                <Paper zDepth={2} className="filter-bar">
                    <RaisedButton label="Apply" primary={true} onClick={this.applyFilter.bind(this)} className="float-right"/>
                    <FlatButton label="Reset" secondary={true} onClick={this.resetFilters.bind(this)} style={resetButtonStyle} className="float-left"/>
                </Paper>
            </Drawer>
        )
    }
}

export default BorrowerFilter;
