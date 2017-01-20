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

const data = {
    columns: [
        ['Funded', 10],
        ['Active', 20],
        ['Closed', 25]
    ],
    type: 'donut'
}

const donut = {
    title: '92',
    label: {
        show: false
    }
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


class MyInvestments extends Component {
    render () {
        return (
            <Card className="my-investments-chart" style={cardStyle}>
                <div style={headerStyle}>My Investments</div>

                <div>
                    <C3Chart data={data} size={ {height: 250} } donut={donut} tooltip={tooltip} color={color} legend={legend}/>
                </div>
            </Card>
        );
    }
}

export default MyInvestments;
