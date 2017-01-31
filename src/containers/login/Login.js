import React, { Component } from 'react';
import logo from '../../assets/login-logo.png';
import { Link } from 'react-router';
import { Row, Col } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';

const errorMessages = {
    emailError: "Please enter a valid email address"
}

class Login extends Component {
    constructor (props) {
        super(props);
        this.state = { username: '', password: '', canSubmit: false };    // setting default props for the component
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });     // React does not support 2 way binding - so we need to manually update values in state
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.loginUser(this.state.username, this.state.password);     // get the submitted info and dispatch an action  - control will go to loginUser func in actions.js
    }

    enableButton = () => {
        this.setState({
            canSubmit: true,
        });
    }

    disableButton = () => {
        this.setState({
            canSubmit: false,
        });
    }

    submitForm(data) {
        alert(JSON.stringify(data, null, 4));
    }

    notifyFormError(data) {
        console.error('Form error:', data);
    }

    render () {
        let { emailError } = errorMessages;

        return (
            <div className="card-center-holder">
                <div className="app-logo">
                    <img src={logo} alt="logo" />
                </div>
                <Formsy.Form
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    onValidSubmit={this.submitForm}
                    onInvalidSubmit={this.notifyFormError}
                >
                    <Row center="xs">
                        <Col xs={10} sm={8} md={3} lg={3}>
                            <FormsyText
                                name="username"
                                validations="isEmail"
                                validationError={emailError}
                                required
                                floatingLabelText="Email ID"
                                fullWidth={true}
                                className="text-align-left"
                            />
                        </Col>
                    </Row>
                    <Row center="xs">
                        <Col xs={10} sm={8} md={3} lg={3}>
                            <FormsyText
                                name="password"
                                type="password"
                                required
                                floatingLabelText="Password"
                                fullWidth={true}
                                className="text-align-left"
                            />
                        </Col>
                    </Row>

                    <div className="login-button">
                        <RaisedButton label="Login" primary={true} type="submit" disabled={!this.state.canSubmit}/>
                    </div>

                    <div className="signup-bar">
                        Not a member yet? <Link className="href-link" to={'/app/signup'}> Register Now </Link>
                    </div>
                </Formsy.Form>
            </div>
        )
    }
}

export default Login;
