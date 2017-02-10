import React, { Component } from 'react';
import RegistrationSteps from '../../../utils/RegistrationSteps';
import headerLogo from '../../../assets/Logo-lendenclub.png';
import BorrowerRegister from '../../../components/register/borrower/BorrowerRegister';

const Header = () => {
    return (
        <div className="header">
            <img src={headerLogo} alt="logo" />
            <div>
                Borrower Register
            </div>
        </div>
    )
}

class RegisterBorrower extends Component {
    render () {
        let registerObj = RegistrationSteps.find( (item) => item.type === 'borrower'),
            steps = registerObj ? registerObj.steps : [],
            registrationStep = this.props.app.user.registrationStep || 0;

        return (
            <div className="borrower-register">
                <Header/>

                <div className="register-component">
                    <BorrowerRegister steps={steps} currentStep={registrationStep}/>
                </div>
            </div>
        );
    }
}

export default RegisterBorrower;
