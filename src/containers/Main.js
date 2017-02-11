import React, { Component } from 'react';
import { connect } from 'react-redux'
import Responsive from 'react-responsive-decorator';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LoadingPage from '../components/LoadingPage';
import { styleConstants } from '../utils/StyleConstants';

const muiTheme = getMuiTheme({
    palette: {
        canvasColor: styleConstants.bodyBgColor,
        textColor: styleConstants.grayDark,
        primary1Color: styleConstants.accentGreen,
        borderColor: styleConstants.borderGray
    },
    textField: {
        floatingLabelColor: styleConstants.accentGreen
    },
    raisedButton: {
        disabledColor: styleConstants.colorPalette200,
        secondaryColor: styleConstants.colorPalette500
    },
    flatButton: {
        secondaryTextColor: styleConstants.grayDarker
    },
    checkbox: {
        boxColor: styleConstants.grayDarker,
        checkedColor: styleConstants.colorPalette500,
        labelColor: styleConstants.grayDark
    },
    chip: {
      backgroundColor: styleConstants.colorPalette500,
      textColor: styleConstants.textWhite,
      deleteIconColor: styleConstants.textWhite
    },
    datePicker: {
        selectColor: styleConstants.colorPalette500
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
