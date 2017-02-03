import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import { styleConstants } from '../../../utils/StyleConstants';
import PAN from './borrower-steps/PAN';
import Aadhar from './borrower-steps/Aadhar';
import Address from './borrower-steps/Address';
import Personal from './borrower-steps/Personal';
import Professional from './borrower-steps/Professional';
import Financial from './borrower-steps/Financial';
import Bank from './borrower-steps/Bank';
import Assets from './borrower-steps/Assets';
import Loans from './borrower-steps/Loans';
import Documents from './borrower-steps/Documents';

const tabStyle = {
    backgroundColor: styleConstants.pageHeaderBGColor,
    borderBottom: `1px solid ${styleConstants.borderColor}`,
}

const inkBarStyle = {
    backgroundColor: styleConstants.accentBlue
}

const RegisterPages = [
    PAN,
    Aadhar,
    Address,
    Personal,
    Professional,
    Financial,
    Bank,
    Assets,
    Loans,
    Documents
]

const TabComponent = ( {name} ) => {
    let RegisterComponent = RegisterPages.find( (item) => item.name === name);
    return (<RegisterComponent />)
}

class BorrowerRegister extends Component {
    constructor () {
        super();
        this.state = {
            tabIndex: 0
        };
    }

    handleTabChange = (value) => {
        this.setState({
            tabIndex: value
        });
    }

    render () {
        return (
            <Tabs onChange={this.handleTabChange} value={this.state.tabIndex} tabItemContainerStyle={tabStyle} inkBarStyle={inkBarStyle} className="individual-lender">
                { this.props.steps.map( (item, idx) => {
                    return (
                        <Tab key={idx} label={item.label} value={item.step}>
                            <div className="register-form-holder">
                                <TabComponent name={item.label} />
                            </div>
                        </Tab>
                    )
                })}
            </Tabs>
        )
    }
}

export default BorrowerRegister;
