import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import { styleConstants } from '../../../utils/StyleConstants';

const cardStyle = {
    backgroundColor: styleConstants.cardBGColor,
    height: '100%'
}

const headerStyle = {
    padding: '15px',
    color: styleConstants.textHeaderGrey
}

class PortfolioSummary extends Component {
    render () {
        let portfolioSummary = this.props.portfolioSummary || {},
            total = Object.keys(portfolioSummary || []).reduce( (acc, item) => {
                return acc + portfolioSummary[item];
            }, 0);

        return (
            <Card className="portfolio-summary" style={cardStyle}>
                <div style={headerStyle}>Portfilio Summary</div>

                <div className="content">
                    <div className="row">
                        <div className="label">Committed</div>
                        <div className="value">{portfolioSummary.commited}</div>
                    </div>
                    <div className="row">
                        <div className="label">Regular</div>
                        <div className="value">{portfolioSummary.regular}</div>
                    </div>
                    <div className="row">
                        <div className="label">In Delay 1</div>
                        <div className="value">{portfolioSummary.delayed_1}</div>
                    </div>
                    <div className="row">
                        <div className="label">In Delay 2</div>
                        <div className="value">{portfolioSummary.delayed_2}</div>
                    </div>
                    <div className="row">
                        <div className="label">In Delay 3</div>
                        <div className="value">{portfolioSummary.delayed_3}</div>
                    </div>
                    <div className="row">
                        <div className="label">Default</div>
                        <div className="value">{portfolioSummary.default}</div>
                    </div>
                    <div className="row">
                        <div className="label">Written Off</div>
                        <div className="value">{portfolioSummary.written_off}</div>
                    </div>
                    <div className="row">
                        <div className="label">Closed</div>
                        <div className="value">{portfolioSummary.closed}</div>
                    </div>
                    <div className="row">
                        <div className="label">Total</div>
                        <div className="value">{total}</div>
                    </div>
                </div>
            </Card>
        );
    }
}

export default PortfolioSummary;
