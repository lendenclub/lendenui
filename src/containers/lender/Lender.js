import React, { Component } from 'react';
import Header from './Header';
import LeftNav from './LeftNav';

const style = {
    height: '100%',
    marginRight: 0
}

class Lender extends Component {
    render () {
        const { children, ...otherProps } = this.props;
        return (
            <div style={style}>
                <Header/>

                <LeftNav />

                <div className="padding-main-content">
                    {React.cloneElement(children, otherProps)}
                </div>
            </div>
        );
    }
}

export default Lender;
