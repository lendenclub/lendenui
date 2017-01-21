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
    margin: '0 10px 0 -10px'
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
    ],
    selection: {
        draggable: true
    }
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
        let month = months[d[0].x],
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
        let month = months[d[0].x],
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
        let isMobile = this.props.isMobile,
            monthlyReturnAxis = monthlyReturnDefaultAxis,
            totalInvestedAmountAxis = totalInvestedAmountDefaultAxis,
            chartContainerStyle = isMobile ? chartMobileStyle : chartDesktopStyle;

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
                        <C3Chart data={monthlyReturnData} size={ {height: 250} } padding={{top: 10}} bar={bar} color={monthlyReturnColor} axis={monthlyReturnAxis} tooltip={monthlyReturnTooltip} legend={legend}/>
                    </div>
                    <div  style={chartContainerStyle}>
                        <C3Chart data={totalInvestedAmountData} size={ {height: 250} } padding={{top: 10}} color={totalInvestedAmountColor} axis={totalInvestedAmountAxis} bar={bar} tooltip={totalInvestedAmountTooltip} legend={legend}/>
                    </div>
                </SwipeableViews>
            </Card>
        );
    }
}

export default MonthlySplit;
