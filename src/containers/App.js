import React, { Component } from 'react';

const style = {
    height: '100%'
}

class App extends Component {
    render () {
        const { children, ...otherProps } = this.props;
        return (
            <div style={style}>
                {React.cloneElement(children, otherProps)}
            </div>
        );
    }
}

export default App;
