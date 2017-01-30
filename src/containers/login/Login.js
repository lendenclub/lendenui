import React, { Component } from 'react';
import logo from '../../assets/login-logo.png';
import { Link } from 'react-router';
import { Row, Col } from 'react-flexbox-grid';
import { Card, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component {
    constructor (props) {
        super(props);
        this.state = { username: '', password: '' };    // setting default props for the component
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });     // React does not support 2 way binding - so we need to manually update values in state
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.loginUser(this.state.username, this.state.password);     // get the submitted info and dispatch an action  - control will go to loginUser func in actions.js
    }

    render () {
        return (
            <div className="card-center-holder">
                <div className="app-logo">
                    <img src={logo} alt="logo" />
                </div>
                <form onSubmit={this.handleSubmit}>
                    <Row center="xs">
                        <Col xs={12} md={5} lg={5}>
                            <TextField
                                floatingLabelText="Email or Mobile Number"
                                fullWidth={true}
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                        </Col>
                    </Row>
                    <Row center="xs">
                        <Col xs={12} md={5} lg={5}>
                            <TextField
                                floatingLabelText="Password"
                                type="password"
                                name="password"
                                fullWidth={true}
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </Col>
                    </Row>

                    <div className="login-button">
                        <RaisedButton label="Login" primary={true} type="submit"/>
                    </div>

                    <div className="signup-bar">
                        Not a member yet? <Link className="href-link" to={'/app/signup'}> Register Now </Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;
