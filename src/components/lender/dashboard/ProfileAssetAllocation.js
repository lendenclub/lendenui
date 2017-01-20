import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import { styleConstants } from '../../../utils/StyleConstants';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import { RiskCategories, RiskColorsArray } from '../../../utils/RiskColors';

const cardStyle = {
    backgroundColor: styleConstants.cardBGColor
}

const headerStyle = {
    padding: '15px',
    color: styleConstants.textHeaderGrey
}

const data = {
    columns: [
        ['Very Low Risk', 10],
        ['Low Risk', 20],
        ['Medium Risk', 25],
        ['High Risk', 30],
        ['Very High Risk', 5]
    ],
    type: 'donut'
}

const donut = {
    label: {
        show: false
    }
}

const color = {
    pattern: RiskColorsArray
}

const legend = {
    item: {
        onmouseover: function (id) {  }
    }
}

const tooltip = {
    contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
        let dataObject = d[0],
            riskColor = `color: ${RiskCategories.find( item => item.label === dataObject.name).color}`,
            html = `<div class="tooltip-container">
                <div class="tooltip-header" style="${riskColor}">
                    ${dataObject.name}
                </div>
                <div class="value">
                    ${dataObject.value}%
                </div>
            </div>`;

        return html;
    }
}

class ProfileAssetAllocation extends Component {
    render () {
        return (
            <Card style={cardStyle} className="profile-asset-allocation">
                <div style={headerStyle}>Profile Asset Allocation</div>

                <div>
                    <C3Chart data={data} size={ {height: 250} } donut={donut} tooltip={tooltip} color={color} legend={legend}/>
                </div>
            </Card>
        );
    }
}

export default ProfileAssetAllocation;
