import React, { Component } from 'react';
import Header from '../components/lender/Header';

const style = {
    height: '100%'
}

class App extends Component {
    render () {
        const { children, ...otherProps } = this.props;
        return (
            <div style={style} className="app">
                {React.cloneElement(children.props.children, otherProps)}
            </div>
        );
    }
}

export default App;
