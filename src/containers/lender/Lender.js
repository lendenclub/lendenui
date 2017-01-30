import React, { Component } from 'react';
import Header from '../../components/lender/Header';
import LeftNav from '../../components/lender/LeftNav';

const style = {
    height: '100%',
    marginRight: 0
}

class Lender extends Component {
    componentWillMount () {
        let isMobile = this.props.isMobile;

        this.setState({ leftNavOpen: !isMobile });
    }
    toggleLeftNav = () => {
        let leftNavOpen = this.state.leftNavOpen;

        if (this.props.isMobile) {
            this.setState({ leftNavOpen: !leftNavOpen});
        }
    }

    render () {
        const { children, ...otherProps } = this.props;
        return (
            <div className="lender" style={style}>
                <Header {...otherProps} toggleLeftNav={this.toggleLeftNav}/>
                
                <LeftNav {...otherProps} leftNavOpen={this.state.leftNavOpen} toggleLeftNav={this.toggleLeftNav} />

                <div className={ this.props.isMobile ? "padding-main-content-mobile" : "padding-main-content-desktop"}>
                    {React.cloneElement(children, otherProps)}
                </div>
            </div>
        );
    }
}

export default Lender;
