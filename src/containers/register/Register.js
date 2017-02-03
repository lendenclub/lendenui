import React, { Component } from 'react';

class Register extends Component {
    render () {
        const { children, ...otherProps } = this.props;
        return (
            <div className="register">
                {React.cloneElement(children, otherProps)}
            </div>
        );
    }
}

export default Register;
