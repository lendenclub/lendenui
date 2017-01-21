import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import { styleConstants } from '../../../utils/StyleConstants';

const cardStyle = {
    backgroundColor: styleConstants.cardBGColor
}

const headerStyle = {
    padding: '15px',
    color: styleConstants.textHeaderGrey
}

class PortfolioSummary extends Component {
    render () {
        return (
            <Card className="portfolio-summary" style={cardStyle}>
                <div style={headerStyle}>Portfilio Summary</div>

                <div className="content">
                    <div className="row">
                        <div className="label">Committed</div>
                        <div className="value">16</div>
                    </div>
                    <div className="row">
                        <div className="label">Funded</div>
                        <div className="value">16</div>
                    </div>
                    <div className="row">
                        <div className="label">Current</div>
                        <div className="value">16</div>
                    </div>
                    <div className="row">
                        <div className="label">In Delay 1</div>
                        <div className="value">16</div>
                    </div>
                    <div className="row">
                        <div className="label">In Delay 2</div>
                        <div className="value">16</div>
                    </div>
                    <div className="row">
                        <div className="label">In Delay 3</div>
                        <div className="value">16</div>
                    </div>
                    <div className="row">
                        <div className="label">Default</div>
                        <div className="value">16</div>
                    </div>
                    <div className="row">
                        <div className="label">Written Off</div>
                        <div className="value">16</div>
                    </div>
                    <div className="row">
                        <div className="label">Closed</div>
                        <div className="value">16</div>
                    </div>
                    <div className="row">
                        <div className="label">Total</div>
                        <div className="value">92</div>
                    </div>
                </div>
            </Card>
        );
    }
}

export default PortfolioSummary;
