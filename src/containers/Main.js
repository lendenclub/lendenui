import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    palette: {
        canvasColor: '#192930',
        textColor: '#ffffff',
        primary1Color: '#249d5f',
        borderColor: '#9e9e9e'
    },
    textField: {
        floatingLabelColor: '#9e9e9e'
    }
});

class Main extends Component {
    render () {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    {React.cloneElement(this.props.children, this.props)}
                </div>
            </MuiThemeProvider>
        );
    }
}

// use this to pass state as props to the component -  so when state changes, the component will re-render
function mapStateToProps (state) {
    return state.app;
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
