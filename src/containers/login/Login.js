import React, { Component } from 'react';
import logo from '../../assets/lendenclub.png';

import { Row, Col } from 'react-flexbox-grid';

import { Card, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
    width: '100%'
}

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
            <Card className="card-center-holder">
                <div className="app-logo">
                    <img src={logo} alt="logo" />
                </div>
                <CardText>
                    <form onSubmit={this.handleSubmit}>
                        <Row center="xs">
                            <Col xs={12} md={7} lg={6}>
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
                            <Col xs={12} md={7} lg={6}>
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
                        <Row center="xs">
                            <Col xs={12} md={7} lg={6}>
                                <RaisedButton label="Login" primary={true} style={buttonStyle} type="submit"/>
                            </Col>
                        </Row>
                    </form>
                </CardText>
            </Card>
        )
    }
}

export default Login;
