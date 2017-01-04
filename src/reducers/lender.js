function lenderActions (state = {loans: [] }, action) {
    switch (action.type) {
        case 'UPDATE_LOANS':
            return {
                ...state,
                loans: action.loans
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
        default:
            return state;
    }
}

export default lenderActions;
