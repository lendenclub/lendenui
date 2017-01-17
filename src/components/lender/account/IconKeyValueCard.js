import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import { styleConstants } from '../../../utils/StyleConstants';

const contentDesktopContainer = {
    display: 'flex',
    justifyContent: 'space-around',
    height: '100px',
}

const contentMobileContainer = {
    ...contentDesktopContainer,
    height: '70px',
    justifyContent: 'space-between',
    padding: '0 15px'
}

const iconHolder = {
    alignSelf: 'center'
}

const keyValueHolder = {
    alignSelf: 'center',
    textAlign: 'right'
}

const valueStyle = {
    fontSize: '20px',
    paddingBottom: '5px'
}

const keyStyle = {
    paddingRight: '4px',
    fontSize: '14px',
    color: styleConstants.textHeaderGrey
}

class IconKeyValueCard extends Component {
    render () {
        let { value, keyLabel, color, icon, isMobile } = this.props,
            contentContainer = isMobile ? contentMobileContainer : contentDesktopContainer;

        icon.props.style.color = color;
        valueStyle.color = color;

        return (
            <Card className="icon-key-value-card" style={this.props.style}>
                <div style={contentContainer}>
                    <div style={iconHolder}>
                        {icon}
                    </div>
                    <div style={keyValueHolder}>
                        <div style={valueStyle}>
                            {value}
                        </div>
                        <div style={keyStyle}>
                            {keyLabel}
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default IconKeyValueCard;
