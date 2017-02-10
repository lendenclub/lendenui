import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import { styleConstants } from '../../../utils/StyleConstants';
import C3Chart from 'react-c3js';
import d3 from 'd3';
import 'c3/c3.css';
import numeral from 'numeral';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import { RiskColorsArray } from '../../../utils/RiskColors';

const cardStyle = {
    backgroundColor: styleConstants.cardBGColor
}

const tabStyle = {
    backgroundColor: 'transparent',
    borderBottom: `1px solid ${styleConstants.borderColor}`,
}

const inkBarStyle = {
    backgroundColor: styleConstants.accentGreen
}

const chartMobileStyle = {
    margin: '0 10px 0 0'
}

const chartDesktopStyle = {
    margin: '0 10px 0 -10px',
    overflowY: 'hidden'
}

/* Montly Return Chart Options */
const monthlyRepaymentsDataBase = {
    x : 'x',
    type: 'bar',
    groups: [
        ['Interest Paid', 'Principal Paid']
    ],
    selection: {
        draggable: true
    }
}

let repaymentMonths = [];

const constructMonthlyRepaymentsData = (monthlyRepayments = []) => {
    let months = ['x'], principal = ['Principal Paid'], interest = ['Interest Paid'];
    monthlyRepayments.reverse().forEach( (item) => {
        months.push(item.month.substring(0, 3));
        repaymentMonths.push(item.month.substring(0, 3));
        principal.push(item.principal || 0);
        interest.push(item.interest || 0);
    })

    return {
        ...monthlyRepaymentsDataBase,
        columns: [
            months,
            principal,
            interest
        ]
    };
}

const monthlyReturnColorArray = ['#1CB5B0', '#EBD24B']

const monthlyReturnColor = {
    pattern: monthlyReturnColorArray
}

const monthlyReturnDefaultAxis = {
    x: {
        type: 'category'
    },
    y: {
        tick: {
            count: 5,
            format: d3.format(".1s")
        }
    }
}

const monthlyReturnTooltip = {
    contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
        let month = repaymentMonths[d[0].x],
            html = `<div class="tooltip-container">
                        <div class="tooltip-header">
                            ${month}
                        </div>
                        <div class="value">`;

        d.forEach( (item) => {
            let backgroundColor = `background-color: ${color(item)}`;

            html += `<div> <div style="${backgroundColor}" class="indicator-box"></div> ${item.name}: ₹ ${numeral(item.value).format('0,0.00')} </div>`;
        });

        html += '</div> </div>';
        return html;
    }
}

const legend = {
    item: {
        onclick: function (id) {
            this.api.toggle(id);
            this.isTargetToShow(id) ? this.api.focus(id) : this.api.revert();
            this.api.focus();
        }
    }
}

/* Total Amount Invested Chart Options */
const totalInvestedAmountDataBase = {
    x : 'x',
    groups: [
        ['Very Low Risk', 'Low Risk', 'Moderate Risk', 'High Risk', 'Very High Risk']
    ],
    order: null,
    type: 'bar',
    axes: {
        'Very Low Risk': 'y',
        'Low Risk': 'y',
        'Moderate Risk': 'y',
        'High Risk': 'y',
        'Very High Risk': 'y',
        'Montly Investment Count': 'y2',
    },
    types: {
        'Montly Investment Count': 'line'
    }
}

let investedAmountMonths = []

const constructMonthlyInvestmentsData = (monthlyInvestments = []) => {
    let months = ['x'], very_low = ['Very Low Risk'], low = ['Low Risk'], moderate = ['Moderate Risk'], high = ['High Risk'], very_high = ['Very High Risk'], investment_count = ['Montly Investment Count'],
        monthlyInvestmentsData = monthlyInvestments.slice();

        monthlyInvestmentsData.reverse().forEach( (item) => {
            months.push(item.month.substring(0, 3));
            investedAmountMonths.push(item.month.substring(0, 3));
            very_low.push(item[very_low] || 0);
            low.push(item[low] || 0);
            moderate.push(item[moderate] || 0);
            high.push(item[high] || 0);
            very_high.push(item[very_high] || 0);
            investment_count.push(item[investment_count] || 0);
        })

    return {
        ...totalInvestedAmountDataBase,
        columns: [
            months,
            very_low,
            low,
            moderate,
            high,
            very_high,
            investment_count
        ]
    };
}

const totalInvestedAmountDefaultAxis = {
    x: {
        type: 'category'
    },
    y: {
        tick: {
            count: 5,
            format: d3.format(".2s")
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
        let month = investedAmountMonths[d[0].x],
            html = `<div class="tooltip-container">
                        <div class="tooltip-header">
                            ${month}
                        </div>
                        <div class="value">`;

        d.forEach( (item) => {
            let backgroundColor = `background-color: ${color(item)}`,
                formattedValue = null;

            if (item.name === 'Montly Investment Count') {
                formattedValue = item.value;
            } else {
                formattedValue = `₹ ${numeral(item.value).format('0,0.00')}`;
            }

            html += `<div> <div style="${backgroundColor}" class="indicator-box"></div> ${item.name}: ${formattedValue} </div>`;
        });

        html += '</div> </div>';
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
        let { isMobile, monthlyRepayments, monthlyInvestments } = this.props,
            monthlyReturnAxis = monthlyReturnDefaultAxis,
            totalInvestedAmountAxis = totalInvestedAmountDefaultAxis,
            chartContainerStyle = isMobile ? chartMobileStyle : chartDesktopStyle,
            monthlyRepaymentsData = constructMonthlyRepaymentsData(monthlyRepayments),
            monthlyInvestmentsData = constructMonthlyInvestmentsData(monthlyInvestments);

        if (isMobile) {
            monthlyReturnAxis.x.tick = { count: 5 };
            totalInvestedAmountAxis.x.tick = { count: 5 };
        }

        return (
            <Card style={cardStyle} className="monthly-cash-flow">
                <Tabs onChange={this.handleTabChange} value={this.state.tabIndex} tabItemContainerStyle={tabStyle} inkBarStyle={inkBarStyle}>
                    <Tab label="Monthly Repayments" value={0} />
                    <Tab label="Monthly Investments" value={1} />
                </Tabs>

                <SwipeableViews index={this.state.tabIndex} onChangeIndex={this.handleTabChange} >
                    <div style={chartContainerStyle}>
                        <C3Chart data={monthlyRepaymentsData} size={ {height: 250} } padding={{top: 10}} bar={bar} color={monthlyReturnColor} axis={monthlyReturnAxis} tooltip={monthlyReturnTooltip} legend={legend}/>
                    </div>
                    <div style={chartContainerStyle}>
                        <C3Chart data={monthlyInvestmentsData} size={ {height: 250} } padding={{top: 10}} color={totalInvestedAmountColor} axis={totalInvestedAmountAxis} bar={bar} tooltip={totalInvestedAmountTooltip} legend={legend}/>
                    </div>
                </SwipeableViews>
            </Card>
        );
    }
}

export default MonthlySplit;
