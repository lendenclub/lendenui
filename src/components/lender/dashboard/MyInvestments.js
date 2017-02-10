import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import { styleConstants } from '../../../utils/StyleConstants';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

const cardStyle = {
    backgroundColor: styleConstants.cardBGColor
}

const headerStyle = {
    padding: '15px',
    color: styleConstants.textHeaderGrey
}

const color = {
    pattern: ['#15C3C9', '#D85876', '#69B440']
}

const legend = {
    item: {
        onmouseover: function (id) {  }
    }
}

const tooltip = {
    contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
        let dataObject = d[0],
            labelColor = `color: ${color(dataObject)}`,
            html = `<div class="tooltip-container">
                <div class="tooltip-header" style="${labelColor}">
                    ${dataObject.name}
                </div>
                <div class="value">
                    ${dataObject.value}
                </div>
            </div>`;

        return html;
    }
}

const constructChartData = (myInvestments) => {
    let columnNames = { active_investments: 'Active', closed_investments: 'Closed', funded_investments: 'Funded' },
        columns = Object.keys(myInvestments || []).map( (item) => {
            return [ columnNames[item], myInvestments[item] ];
        });

    return {
        columns,
        type: 'donut'
    }
}

class MyInvestments extends Component {
    render () {
        let myInvestments = this.props.myInvestments || {},
            chartData = constructChartData(myInvestments),
            totalInvestments = myInvestments.active_investments || 0 + myInvestments.closed_investments || 0 + myInvestments.funded_investments || 0,
            donut = { title: totalInvestments, label: {show: false} };

        return (
            <Card className="my-investments-chart" style={cardStyle}>
                <div style={headerStyle}>My Investments</div>

                <div>
                    <C3Chart data={chartData} size={ {height: 250} } donut={donut} tooltip={tooltip} color={color} legend={legend}/>
                </div>
            </Card>
        );
    }
}

export default MyInvestments;
