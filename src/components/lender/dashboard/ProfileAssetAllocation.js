import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import { styleConstants } from '../../../utils/StyleConstants';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import { RiskCategories } from '../../../utils/RiskColors';
import numeral from 'numeral';

const cardStyle = {
    backgroundColor: styleConstants.cardBGColor
}

const headerStyle = {
    padding: '15px',
    color: styleConstants.textHeaderGrey
}

const donut = {
    label: {
        show: false
    }
}

const colors = {
    'Very Low Risk': '#8BBE47',
    'Low Risk': '#5A78CF',
    'Moderate Risk': '#FDFB66',
    'High Risk': '#FFA61A',
    'Very High Risk': '#F76162'
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
                    ₹ ${numeral(dataObject.value).format('0,0.00')}
                </div>
            </div>`;
        console.log(dataObject.name, riskColor);
        return html;
    }
}

const constructChartData = (portfolioAssetAllocation) => {
    let columnLabels = {high: 'High Risk', low: 'Low Risk', moderate: 'Moderate Risk', very_high: 'Very High Risk', very_low: 'Very Low Risk'},
        columns = Object.keys(portfolioAssetAllocation || []).map( (item) => {
            return [ columnLabels[item], portfolioAssetAllocation[item].sum || 0 ]
        });

    return {
        columns,
        type: 'donut',
        colors
    }
}

class ProfileAssetAllocation extends Component {
    render () {
        let portfolioAssetAllocation = this.props.portfolioAssetAllocation,
            chartData = constructChartData(portfolioAssetAllocation);
        return (
            <Card style={cardStyle} className="profile-asset-allocation">
                <div style={headerStyle}>Profile Asset Allocation</div>

                <div>
                    <C3Chart data={chartData} size={ {height: 250} } donut={donut} tooltip={tooltip} legend={legend}/>
                </div>
            </Card>
        );
    }
}

export default ProfileAssetAllocation;
