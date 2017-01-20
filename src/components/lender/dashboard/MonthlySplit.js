import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import { styleConstants } from '../../../utils/StyleConstants';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import numeral from 'numeral';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import { RiskColorsArray } from '../../../utils/RiskColors';

const cardStyle = {
    backgroundColor: styleConstants.cardBGColor
}

const headerStyle = {
    padding: '15px',
    color: styleConstants.textHeaderGrey
}

const tabStyle = {
    backgroundColor: 'transparent',
    borderBottom: `1px solid ${styleConstants.borderColor}`,
}

const inkBarStyle = {
    backgroundColor: styleConstants.accentGreen
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/* Montly Return Chart Options */
const monthlyReturnData = {
    x : 'x',
    columns: [
        ['x', ...months],
        ['Interest Paid', 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600],
        ['Principal Paid', 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
    ],
    type: 'bar',
    groups: [
        ['Interest Paid', 'Principal Paid']
    ]
}

const monthlyReturnColorArray = ['#1CB5B0', '#EBD24B']

const monthlyReturnColor = {
    pattern: monthlyReturnColorArray
}

const monthlyReturnAxis = {
    x: {
        type: 'category'
    },
    y: {
        tick: {
            count: 5
        }
    }
}

const subchart = {
    show: true
}

const monthlyReturnTooltip = {
    contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
        let interestPaid = d[0],
            principalPaid = d[1],
            month = months[interestPaid.x],
            interestPaidColor = `background-color: ${monthlyReturnColorArray[0]}`,
            principalPaidColor = `background-color: ${monthlyReturnColorArray[1]}`,
            html = `<div class="tooltip-container">
            <div class="tooltip-header">
                ${month}
            </div>
            <div class="value">
                <div> <div style="${interestPaidColor}" class="indicator-box"></div> Interest Paid: ₹ ${numeral(interestPaid.value).format('0,0.00')} </div>
                <div> <div style="${principalPaidColor}" class="indicator-box"></div> Principal Paid: ₹ ${numeral(principalPaid.value).format('0,0.00')} </div>
            </div>
        </div>`;

        return html;
    }
}

/* Total Amount Invested Chart Options */
const totalInvestedAmountData = {
    x : 'x',
    columns: [
        ['x', ...months],
        ['Very Low Risk', 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600],
        ['Low Risk', 10, 20,30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
        ['Medium Risk', 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180],
        ['High Risk', 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360],
        ['Very High Risk', 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480],
        ['Montly Investment Count', 3, 5, 0, 6, 10, 2, 4, 7, 8, 9, 2, 5],
    ],
    groups: [
        ['Very Low Risk', 'Low Risk', 'Medium Risk', 'High Risk', 'Very High Risk']
    ],
    order: null,
    type: 'bar',
    axes: {
        'Very Low Risk': 'y',
        'Low Risk': 'y',
        'Medium Risk': 'y',
        'High Risk': 'y',
        'Very High Risk': 'y',
        'Montly Investment Count': 'y2',
    },
    types: {
        'Montly Investment Count': 'line'
    }
}

const totalInvestedAmountAxis = {
    x: {
        type: 'category'
    },
    y: {
        tick: {
            count: 5
        }
    },
    y2: {
        show: true,
        tick: {
            count: 5
        }
    }
}

const bar = {
    width: 15
}

const totalInvestedAmountColor = {
    pattern: [...RiskColorsArray, '#2AA5C4']
}

const totalInvestedAmountTooltip = {
    contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
        let veryLowRisk = d[0],
            lowRisk = d[1],
            mediumRisk = d[2],
            highRisk = d[3],
            veryHighRisk = d[4],
            investmentCount = d[5],
            month = months[veryLowRisk.x],
            veryLowRiskColor = `background-color: ${RiskColorsArray[0]}`,
            lowRiskColor = `background-color: ${RiskColorsArray[1]}`,
            mediumRiskColor = `background-color: ${RiskColorsArray[2]}`,
            highRiskColor = `background-color: ${RiskColorsArray[3]}`,
            veryHighRiskColor = `background-color: ${RiskColorsArray[4]}`,
            investmentCountColor = "background-color: #2AA5C4",
            html = `<div class="tooltip-container">
            <div class="tooltip-header">
                ${month}
            </div>
            <div class="value">
                <div> <div style="${veryLowRiskColor}" class="indicator-box"></div> Very Low Risk: ₹ ${numeral(veryLowRisk.value).format('0,0.00')} </div>
                <div> <div style="${lowRiskColor}" class="indicator-box"></div> Low Risk: ₹ ${numeral(lowRisk.value).format('0,0.00')} </div>
                <div> <div style="${mediumRiskColor}" class="indicator-box"></div> Medium Risk: ₹ ${numeral(mediumRisk.value).format('0,0.00')} </div>
                <div> <div style="${highRiskColor}" class="indicator-box"></div> High Risk: ₹ ${numeral(highRisk.value).format('0,0.00')} </div>
                <div> <div style="${veryHighRiskColor}" class="indicator-box"></div> Very High Risk: ₹ ${numeral(veryHighRisk.value).format('0,0.00')} </div>
                <div> <div style="${investmentCountColor}" class="indicator-box"></div> Investment Count: ${investmentCount.value} </div>
            </div>
        </div>`;

        return html;
    }
}

class MonthlySplit extends Component {
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
            <Card style={cardStyle} className="monthly-cash-flow">
                <Tabs onChange={this.handleTabChange} value={this.state.tabIndex} tabItemContainerStyle={tabStyle} inkBarStyle={inkBarStyle}>
                    <Tab label="Monthly Replayments" value={0} />
                    <Tab label="Monthly Investments" value={1} />
                </Tabs>

                <SwipeableViews index={this.state.tabIndex} onChangeIndex={this.handleTabChange} >
                    <div style={ {margin: '0 10px 0 -10px'} }>
                        <C3Chart data={monthlyReturnData} size={ {height: 250} } padding={{top: 10}} bar={bar} color={monthlyReturnColor} axis={monthlyReturnAxis} tooltip={monthlyReturnTooltip}/>
                    </div>
                    <div  style={ {margin: '0 10px 0 -10px'} }>
                        <C3Chart data={totalInvestedAmountData} size={ {height: 250} } padding={{top: 10}} color={totalInvestedAmountColor} axis={totalInvestedAmountAxis} bar={bar} tooltip={totalInvestedAmountTooltip}/>
                    </div>
                </SwipeableViews>
            </Card>
        );
    }
}

export default MonthlySplit;
