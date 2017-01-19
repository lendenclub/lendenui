import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import { styleConstants } from '../../../utils/StyleConstants';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import numeral from 'numeral';

const cardStyle = {
    margin: '0 5px',
    backgroundColor: styleConstants.cardBGColor
}

const headerStyle = {
    padding: '15px',
    color: styleConstants.textHeaderGrey
}

const chartContainerStyle = {
    margin: '0 -20px'
}

const chartData = [{
    month: 'Jan',
    value: 100
}, {
    month: 'Feb',
    value: 200
}, {
    month: 'Mar',
    value: 300
}, {
    month: 'Apr',
    value: 200
}, {
    month: 'May',
    value: 500
}, {
    month: 'Jun',
    value: 600
}]

const data = {
    json: chartData,
    type: 'area',
    keys: {
        x: 'month',
        value: ['value']
    },
    colors: {
        value: '#63B51D'
    }
};

const axis = {
    y: {
        show: false,
        padding: {
            left: 0,
            right: 0
        }
    },
    x: {
        type: 'category',
        padding: {
            left: 0,
            right: 0
        }
    }
}

const legend = {
    show: false
}

const tooltip = {
    contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
        let html = `<div class="tooltip-container">
            <div class="tooltip-header">
                ${chartData[d[0].x].month}
            </div>
            <div class="value">
                ₹ ${numeral(d[0].value).format('0,0.00')}
            </div>
        </div>`;

        return html;
    }
}

class AccountBalance extends Component {
    render () {
        return (
            <Card className="account-balance" style={cardStyle}>
                <div style={headerStyle}>Account Balance</div>

                <div className="header">
                    <div className="label">
                        ₹ 1,75,000
                    </div>
                    <div className="sub-label">
                        Invested 92 times
                    </div>
                </div>

                <div style={chartContainerStyle}>
                    <C3Chart data={data} axis={axis} legend={legend} tooltip={tooltip} size={ {height: 200} }/>
                </div>
            </Card>
        );
    }
}

export default AccountBalance;
