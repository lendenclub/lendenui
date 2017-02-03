import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import { styleConstants } from '../../../utils/StyleConstants';
import PAN from './individual/PAN';
import Aadhar from './individual/Aadhar';
import Address from './individual/Address';
import Bank from './individual/Bank';
import Documents from './individual/Documents';
import Personal from './individual/Personal';

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
    Bank,
    Documents,
    Personal
]

const TabComponent = ( {name} ) => {
    let RegisterComponent = RegisterPages.find( (item) => item.name === name);
    return (<RegisterComponent />)
}

class IndividualLenderRegister extends Component {
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

export default IndividualLenderRegister;
