import React, { Component } from 'react';

const calculatePercentage = (max, value) => {
    return (value * 100) / max;
}

class ProgressBar extends Component {
    render () {
        let progressWidth = calculatePercentage(this.props.max, this.props.value),
            progressStyle = {
                width: `${progressWidth}%`
            };

        return (
            <div className="progress-bar-holder">
                <div className="progress-bar" style={progressStyle}></div>
            </div>
        )
    }
}

export default ProgressBar;
