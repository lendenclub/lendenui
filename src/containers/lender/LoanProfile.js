import React, { Component } from 'react';

class LoanProfile extends Component {
    render () {
        let loanId = this.props.params.loan_id;
        return (
            <div>
                Loan Profile - {loanId}
            </div>
        );
    }
}

export default LoanProfile;
