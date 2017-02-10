import React, { Component } from 'react';
import { connect } from 'react-redux'
import Responsive from 'react-responsive-decorator';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LoadingPage from '../components/LoadingPage';

const muiTheme = getMuiTheme({
    palette: {
        canvasColor: '#081B24',
        textColor: '#ffffff',
        primary1Color: '#118a70',
        borderColor: '#9e9e9e'
    },
    textField: {
        floatingLabelColor: '#9e9e9e'
    },
    raisedButton: {
        disabledColor: '#2E454E',
        secondaryColor: '#192930'
    },
    flatButton: {
        secondaryTextColor: '#B9B8B8'
    },
    checkbox: {
        boxColor: '#284752',
        checkedColor: '#0099CC',
        labelColor: '#A6A6A6'
    },
    chip: {
      backgroundColor: '#182F39'
    },
    datePicker: {
        selectColor: '#118a70'
    }
});

class Main extends Component {
    constructor (props) {
        super();
    }

    componentWillMount () {
        this.props.media({ maxWidth: 1230 }, () => {
            this.setState({
                isMobile: true
            });
        });
        this.props.media({ minWidth: 1230 }, () => {
            this.setState({
                isMobile: false
            });
        });
        this.props.getUser();
    }

    componentDidMount () {
        // if (this.props.router.getCurrentLocation().pathname === '/') {
        //     this.props.router.push('/app');
        // }
    }

    render () {
        let isMobile = this.state ? this.state.isMobile : false;
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <LoadingPage showLoader={this.props.app.showLoader} />

                    { this.props.children !== null ? (
                        React.cloneElement(this.props.children, {...this.props, isMobile})
                    ): (
                        ''
                    )}
                </div>
            </MuiThemeProvider>
        );
    }
}

// use this to pass state as props to the component -  so when state changes, the component will re-render
function mapStateToProps (state) {
    return state;
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}


//Responsive makes the media util available in all components
export default Responsive(connect(mapStateToProps, mapDispatchToProps)(Main));
