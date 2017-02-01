import React, { Component } from 'react';
import logo from '../../assets/login-logo.png';
import individual from '../../assets/individual@2x.png';
import institutional from '../../assets/institutional@2x.png';
import RaisedButton from 'material-ui/RaisedButton';
import { styleConstants } from '../../utils/StyleConstants';
import { Link } from 'react-router';
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';
import { Row, Col } from 'react-flexbox-grid';

const capsuleStyle = {
    borderRadius: '30px',
    width: '170px'
}

const buttonStyle = {
    borderRadius: '30px',
    height: '50px'
}

const overlayStyle = {
    backgroundColor: 'transparent'
}

const borrowerButtonStyle = {
    ...buttonStyle,
    backgroundColor: styleConstants.accentBlue
}

const errorMessages = {
    emailError: "Please enter a valid email address",
    phoneNumberError: "Please enter a valid phone number"
}

const LenderHeader = ({type, showOTPForm}) => {
    let text = type === 'lender' ? 'Register as' : 'Register yourself as';

    if (!showOTPForm) {
        return (
            <div className="register-header">
                {text}
            </div>
        )
    } else {
        return false;
    }
}

const BorrowerHeader = ( {type, setType} ) => {
    let text = type === 'lender' ? 'Register as' : '';

    return (
        <div>
            { type === 'lender' ? (
                <div className="borrower-header"> {text} <span>Borrower</span> </div>
            ) : (
                ''
            )}
            { type === '' ? (
                <RaisedButton label="Borrower" primary={true} style={capsuleStyle} overlayStyle={overlayStyle} buttonStyle={borrowerButtonStyle} onClick={setType} />
            ) : (
                ''
            )}
        </div>
    )
}

const LenderButton = ( {type, subType, setType, setSubType} ) => {
    if ( type === '' && subType === '') {
        return (
            <div className="lender-button">
                <RaisedButton label="Lender" primary={true} style={capsuleStyle} overlayStyle={overlayStyle} buttonStyle={buttonStyle} onClick={setType} />
            </div>
        )
    } else if (type === 'lender' && subType === '') {
        return (
            <div className="lender-options">
                <div className="options">
                    <div className="individual" onClick={setSubType.bind(this, 'individual')}>
                        <img src={individual} alt="individual" />
                        <div>Individual Lender</div>
                    </div>
                    <div className="institutional" onClick={setSubType.bind(this, 'institutional')}>
                        <img src={institutional} alt="professional" />
                        <div>Institutional Lender</div>
                    </div>
                </div>
                <div className="or-option">
                    OR
                </div>
            </div>
        )
    } else {
        return false;
    }
}

const AlreadyMember = ( {showOTPForm} ) => {
    if (!showOTPForm) {
        return (
            <div className="signin-bar">
                Already a member? <Link className="href-link" to={'/app/login'}> Sign In </Link>
            </div>
        )
    } else {
        return false;
    }
}

const SignupForm = ( {type, subType, enableButton, disableButton, submitForm, notifyFormError, canSubmit, email, phone, password, register, onChange, showOTPForm} ) => {
    let baseText = 'You are signing up as ',
        contextText = type === 'lender' ? (subType === 'individual' ? 'Individual Lender' : 'Institutional Lender') : 'Borrower',
        headerText = `${baseText} ${contextText}!`;

    if ( ((type === 'lender' && subType !== '') || type === 'borrower') && !showOTPForm) {
        return (
            <div className="signup-form">
                <div className="header">
                    {headerText}
                </div>

                <Formsy.Form
                    onValid={enableButton}
                    onInvalid={disableButton}
                    onValidSubmit={register}
                    onInvalidSubmit={notifyFormError}
                >
                    <Row center="xs">
                        <Col xs={10} sm={10} md={8} lg={8}>
                            <FormsyText
                                name="email"
                                validations="isEmail"
                                validationError={errorMessages.emailError}
                                required
                                floatingLabelText="Email ID"
                                fullWidth={true}
                                className="text-align-left"
                                onChange={onChange}
                                value={email}
                            />
                        </Col>
                    </Row>
                    <Row center="xs">
                        <Col xs={10} sm={8} md={8} lg={8}>
                            <FormsyText
                                name="phone"
                                validations="isNumeric"
                                validationError={errorMessages.phoneNumberError}
                                required
                                floatingLabelText="Phone Number"
                                fullWidth={true}
                                className="text-align-left"
                                value={phone}
                                onChange={onChange}
                            />
                        </Col>
                    </Row>
                    <Row center="xs">
                        <Col xs={10} sm={10} md={8} lg={8}>
                            <FormsyText
                                name="password"
                                type="password"
                                required
                                floatingLabelText="Password"
                                fullWidth={true}
                                className="text-align-left"
                                value={password}
                                onChange={onChange}
                            />
                        </Col>
                    </Row>

                    <div className="login-button">
                        <RaisedButton label="Continue" primary={true} type="submit" disabled={!canSubmit}/>
                    </div>
                </Formsy.Form>
            </div>
        )
    } else {
        return false;
    }
}

const UserType = ( {type, subType, setType, setSubType, showOTPForm} ) => {
    if ((type === 'lender' && subType !== '') || type === 'borrower') {
        return false;
    } else {
        return (
            <div>
                <div className="user-type-form">
                    <LenderHeader type={type} showOTPForm={showOTPForm}/>

                    <div className="button-holder">
                        <LenderButton type={type} subType={subType} setType={setType.bind(this, 'lender')} setSubType={setSubType}/>
                        <BorrowerHeader type={type} setType={setType.bind(this, 'borrower')}/>
                    </div>
                </div>
            </div>
        )
    }
}

const OTPForm = ( {showOTPForm, phone, enableOTPButton, disableOTPButton, createUser, notifyOTPFormError, canSubmitOTP, otp, onChange} ) => {
    if (showOTPForm) {
        return (
            <div className="opt-form">
                <div className="header"> Verification Code </div>
                <div className="info"> Please type the verification code sent to {phone} </div>
                <div className="otp-input">
                    <Row center="xs">
                        <Col xs={6} sm={6} md={4} lg={4}>
                            <Formsy.Form
                                onValid={enableOTPButton}
                                onInvalid={disableOTPButton}
                                onValidSubmit={createUser}
                                onInvalidSubmit={notifyOTPFormError}
                            >
                                <FormsyText
                                    name="otp"
                                    validations={{
                                        otpValidation: function (values, value) {
                                            return !isNaN(value) && value.length === 6
                                        }
                                    }}
                                    validationError={errorMessages.otpError}
                                    required
                                    fullWidth={true}
                                    className="text-align-center"
                                    value={otp}
                                    maxLength="6"
                                    onChange={onChange}
                                    style={ {fontSize: '30px', paddingBottom: '10px'} }
                                    inputStyle={ {textAlign: 'center', letterSpacing: '3px'} }
                                />

                                <div className="login-button">
                                    <RaisedButton label="Register" primary={true} type="submit" disabled={!canSubmitOTP}/>
                                </div>
                            </Formsy.Form>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    } else {
        return false;
    }
}

class Signup extends Component {
    constructor () {
        super();
        this.state = {type: '', subType: '', email: '', phone: '', password: '', otp: '', canSubmit: false, showOTPForm: false, canSubmitOTP: false};
    }

    setType = (type) => {
        this.setState({
            type
        });
    }

    setSubType = (subType) => {
        this.setState({
            subType
        });
    }

    // Register form actions
    enableButton = () => {
        this.setState({
            canSubmit: true
        });
    }

    disableButton = () => {
        this.setState({
            canSubmit: false
        });
    }

    submitForm (data) {
        alert(JSON.stringify(data, null, 4));
    }

    notifyFormError (data) {
        console.error('Form error:', data);
    }

    registerUser = () => {
        this.setState({
            showOTPForm: true
        });
        // Make api call for getting OTP
    }

    // OTP form actions
    enableOTPButton = () => {
        this.setState({
            canSubmitOTP: true
        });
    }

    disableOTPButton = () => {
        this.setState({
            canSubmitOTP: false
        });
    }

    createUser = () => {
        console.log("dispatch create user");
    }

    notifyOTPFormError = () => {

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render () {
        let { type, subType, email, phone, password, canSubmit, showOTPForm, canSubmitOTP, otp } = this.state;

        return (
            <div className="signup">
                <div className="signup-container">
                    <div className="app-logo">
                        <img src={logo} alt="logo" />
                    </div>

                    <UserType type={type} subType={subType} setType={this.setType} setSubType={this.setSubType} showOTPForm={showOTPForm} />

                    <SignupForm
                        type={type}
                        subType={subType}
                        enableButton={this.enableButton}
                        disableButton={this.disableButton}
                        submitForm={this.submitForm}
                        notifyFormError={this.notifyFormError}
                        canSubmit={canSubmit}
                        email={email}
                        phone={phone}
                        password={password}
                        register={this.registerUser}
                        onChange={this.handleChange}
                        showOTPForm={showOTPForm}
                    />
                    <AlreadyMember showOTPForm={showOTPForm} />

                    <OTPForm
                        showOTPForm={showOTPForm}
                        phone={phone}
                        enableOTPButton={this.enableOTPButton}
                        disableOTPButton={this.disableOTPButton}
                        createUser={this.createUser}
                        notifyOTPFormError={this.notifyOTPFormError}
                        canSubmitOTP={canSubmitOTP}
                        opt={otp}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        )
    }
}

export default Signup;
