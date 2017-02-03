import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import { styleConstants } from '../../../utils/StyleConstants';
import PAN from './institution/PAN';
import Address from './institution/Address';
import Bank from './institution/Bank';
import Documents from './institution/Documents';

const tabStyle = {
    backgroundColor: styleConstants.pageHeaderBGColor,
    borderBottom: `1px solid ${styleConstants.borderColor}`,
}

const inkBarStyle = {
    backgroundColor: styleConstants.accentBlue
}

const RegisterPages = [
    PAN,
    Address,
    Bank,
    Documents
]

const TabComponent = ( {name} ) => {
    let RegisterComponent = RegisterPages.find( (item) => item.name === name);
    return (<RegisterComponent />)
}


class InstitutionLenderRegister extends Component {
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
            <div>
                <Tabs onChange={this.handleTabChange} value={this.state.tabIndex} tabItemContainerStyle={tabStyle} inkBarStyle={inkBarStyle}>
                    { this.props.steps.map( (item, idx) => {
                        return (
                            <Tab key={idx} label={item.label} value={item.step}>
                                <div className="register-form-holder">
                                    <TabComponent name={item.label}/>
                                </div>
                            </Tab>
                        )
                    })}
                </Tabs>
            </div>
        )
    }
}

export default InstitutionLenderRegister;
