import React, { Component } from 'react';

const style = {
    height: '100%'
}

class App extends Component {
    render () {
        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
}

export default App;
