import React, { Component } from 'react';
import RegistrationSteps from '../../../utils/RegistrationSteps';
import headerLogo from '../../../assets/Logo-lendenclub.png';
import IndividualLenderRegister from '../../../components/register/lender/IndividualLenderRegister';
import InstitutionLenderRegister from '../../../components/register/lender/InstitutionLenderRegister';

const Header = ( {subType} ) => {
    return (
        <div className="header">
            <img src={headerLogo} alt="logo" />
            <div>
                <span className="text-capitalize">{subType}</span> Lender Register
            </div>
        </div>
    )
}

class RegisterLender extends Component {
    render () {
        let user = this.props.app.user,
            subType = user.subType,
            registerObj = RegistrationSteps.find( (item) => item.type === 'lender' && item.subType === subType),
            steps = registerObj ? registerObj.steps : [];

        return (
            <div className="lender-register">
                <Header subType={subType}/>

                <div className="register-component">
                    { subType === 'individual' ? (
                        <IndividualLenderRegister steps={steps} />
                    ) : (
                        <InstitutionLenderRegister steps={steps} />
                    )}
                </div>
            </div>
        );
    }
}

export default RegisterLender;
