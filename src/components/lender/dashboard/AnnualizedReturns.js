import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import { styleConstants, cardStyle, cardHeaderStyle } from '../../../utils/StyleConstants';
import numeral from 'numeral';

class AnnualizedReturns extends Component {
    render () {
        return (
            <Card className="annualized-returns" style={cardStyle}>
                <div style={cardHeaderStyle}>Annualized Returns</div>

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
