import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import { styleConstants } from '../../../utils/StyleConstants';
import numeral from 'numeral';

const cardStyle = {
    backgroundColor: styleConstants.cardBGColor
}

const headerStyle = {
    padding: '15px',
    color: styleConstants.textHeaderGrey
}

class AnnualizedReturns extends Component {
    render () {
        return (
            <Card className="annualized-returns" style={cardStyle}>
                <div style={headerStyle}>Annualized Returns</div>

                <div className="header">
                    <div className="label">
                        Total Investments
                        <div className="sub-label">
                            ₹ {numeral(this.props.totalInvestment).format('0,0.00')}
                        </div>
                    </div>
                </div>

                <div className="annualized-return-value">
                    {this.props.annualizedReturn || 0}%
                </div>
            </Card>
        );
    }
}

export default AnnualizedReturns;
