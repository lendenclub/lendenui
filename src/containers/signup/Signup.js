import React, { Component } from 'react';
import handshake from '../../assets/handshake@2x.png'
import headerLogo from '../../assets/Logo-lendenclub.png';
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

const LenderHeader = ({type}) => {
    let text = type === 'lender' ? 'Register as' : 'Register yourself as';
    return (
        <div className="register-header">
            {text}
        </div>
    )
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

const AlreadyMember = () => {
    return (
        <div className="signin-bar">
            Already a member? <Link className="href-link" to={'/app/login'}> Sign In </Link>
        </div>
    )
}

const SignupForm = ( {type, subType, enableButton, disableButton, submitForm, notifyFormError, canSubmit, email, phone, password, register, onChange} ) => {
    let baseText = 'You are signing up as ',
        contextText = type === 'lender' ? (subType === 'individual' ? 'Individual Lender' : 'Institutional Lender') : 'Borrower',
        headerText = `${baseText} ${contextText}!`;

    if ((type === 'lender' && subType !== '') || type === 'borrower') {
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
                        <RaisedButton label="Register" primary={true} type="submit" disabled={!canSubmit}/>
                    </div>
                </Formsy.Form>

                <AlreadyMember />
            </div>
        )
    } else {
        return false;
    }
}

const UserType = ( {type, subType, setType, setSubType} ) => {
    if ((type === 'lender' && subType !== '') || type === 'borrower') {
        return false;
    } else {
        return (
            <div>
                <div className="user-type-form">
                    <LenderHeader type={type} />

                    <div className="button-holder">
                        <LenderButton type={type} subType={subType} setType={setType.bind(this, 'lender')} setSubType={setSubType}/>
                        <BorrowerHeader type={type} setType={setType.bind(this, 'borrower')}/>
                    </div>
                </div>

                <AlreadyMember />
            </div>
        )
    }
}

class Signup extends Component {
    constructor () {
        super();
        this.state = {type: '', subType: '', email: '', phone: '', password: '', otp: '', canSubmit: false};
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

    submitForm (data) {
        alert(JSON.stringify(data, null, 4));
    }

    notifyFormError (data) {
        console.error('Form error:', data);
    }

    registerUser = () => {
        console.log(this.state);
        // send the api call
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render () {
        let { type, subType, email, phone, password, canSubmit } = this.state;

        return (
            <div className="signup">
                <div className="signup-container">
                    <div className="app-logo">
                        <img src={logo} alt="logo" />
                    </div>

                    <UserType type={type} subType={subType} setType={this.setType} setSubType={this.setSubType}/>

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
                    />
                </div>
            </div>
        )
    }
}

export default Signup;
