import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import { styleConstants } from '../../../utils/StyleConstants';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import { RiskColors, RiskCategories, RiskColorsArray } from '../../../utils/RiskColors';

const cardStyle = {
    backgroundColor: styleConstants.cardBGColor
}

const headerStyle = {
    padding: '15px',
    color: styleConstants.textHeaderGrey
}

const chartContainerStyle = {
    padding: '0 10px'
}

const data = {
    columns: [
        ['data', 32]
    ],
    type: 'gauge'
}

const gauge = {
    max: 35,
    label: {
        show: false
    }
}

const color = {
    pattern: RiskColorsArray,
    threshold: {
        values: [15, 18, 22, 30, 35]
    }
}

const tooltip = {
    contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
        let value = d[0].value,
            riskLabel = RiskCategories.find( (item) => {
                            return value > item.min && value <= item.max;
                        }).label,
            riskColor = `color: ${RiskColors(value)}`,
            html = `<div class="tooltip-container">
                    <div class="tooltip-header" style="${riskColor}">
                        ${value}%
                    </div>
                    <div class="value">
                        ${riskLabel}
                    </div>
                </div>`;

        return html;
    }
}


class AnnualizedReturns extends Component {
    computeRiskStyle = (interest) => {
        return RiskColors(interest);
    }

    computeRiskLabel = (interest) => {
        return RiskCategories.find( (item) => {
            return interest > item.min && interest <= item.max;
        }).label;
    }

    render () {
        let riskValue = 32,
            riskStyle = {color: this.computeRiskStyle(riskValue)};

        return (
            <Card className="annualized-returns" style={cardStyle}>
                <div style={headerStyle}>Annualized Returns</div>

                <div className="header">
                    <div className="label" style={riskStyle}>
                        {riskValue}%
                    </div>
                    <div className="sub-label">
                        {this.computeRiskLabel(riskValue)}
                    </div>
                </div>

                <div style={chartContainerStyle}>
                    <C3Chart data={data} color={color} gauge={gauge} tooltip={tooltip} size={ {height: 200} } padding={ {bottom: 10} }/>
                </div>
            </Card>
        );
    }
}

export default AnnualizedReturns;
