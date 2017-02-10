import React, { Component } from 'react';
import InvestHeaderRow from '../../components/lender/invest/InvestHeaderRow';
import InvestRow from '../../components/lender/invest/InvestRow';
import BorrowerInfo from '../../components/lender/invest/BorrowerInfo';
import WebComponent from '../../components/WebComponent';
import MobileComponent from '../../components/MobileComponent';
import InvestCard from '../../components/lender/invest/mobile/InvestCard';

import loanProfile from '../../data/loan-profile';

const investRowStyle = {
    marginTop: '90px'
}

const investCardStyle = {
    marginBottom: 0
}

class LoanProfile extends Component {
    showInvestModal = () => {

    }

    render () {
        // let loanId = this.props.params.loan_id;
        return (
            <div>
                <WebComponent>
                    <div>
                        <InvestHeaderRow />

                        <div style={investRowStyle}>
                            <InvestRow loan={loanProfile} invest={this.showInvestModal.bind(this)} isMobile={this.props.isMobile}/>
                        </div>
                    </div>
                </WebComponent>

                <MobileComponent>
                    <InvestCard loan={loanProfile} invest={this.showInvestModal.bind(this)} isMobile={this.props.isMobile} style={investCardStyle} />
                </MobileComponent>

                <BorrowerInfo loan={loanProfile} isMobile={this.props.isMobile}/>
            </div>
        );
    }
}

export default LoanProfile;
