function lenderActions (state = {totalLoans: 0, loans: [], myInvestments: [], accountInfo: {} }, action) {
    switch (action.type) {
        case 'UPDATE_LOANS':
            return {
                ...state,
                loans: action.loans,
                totalLoans: action.totalLoans
            }

        case 'UPDATE_ROW_ACTIVE':
            let loans = state.loans;
            loans.forEach( (loan) => {
                if (loan.required_loan_id === action.loan_id) {
                    loan.active = !loan.active;
                } else {
                    loan.active = false;
                }
            });
            return {
                ...state,
                loans
            }

        case 'UPDATE_MY_INVESTMENTS':
            return {
                ...state,
                myInvestments: action.myInvestments
            }

        //TODO: Refactor this and UPDATE_ROW_ACTIVE into one function
        case 'UPDATE_MY_INVESTMENT_ROW_ACTIVE':
            let myInvestments = state.myInvestments;
            myInvestments.forEach( (myInvestment) => {
                if (myInvestment.required_loan_id === action.loan_id) {
                    myInvestment.active = !myInvestment.active;
                } else {
                    myInvestment.active = false;
                }
            });
            return {
                ...state,
                myInvestments
            }

        case 'UPDATE_ACCOUNT_INFO':
            return {
                ...state,
                accountInfo: action.accountInfo
            }

        default:
            return state;
    }
}

export default lenderActions;
