import React, { Component } from 'react';

class LoadingPage extends Component {
    render () {
        let showLoaderStyle = this.props.showLoader ? { display: 'block' } : { display: 'none' };
        return (
            <div style={showLoaderStyle} className="universal-loader-container">
                <div className="universal-load-bar">
                    <div className="load-bar"></div>
                </div>
            </div>
        )
    }
}

export default LoadingPage;
