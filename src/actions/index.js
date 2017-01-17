import investMockData from '../data/invest';
import myInvestmentsMockData from '../data/my-investments';
import AccountMockData from '../data/account';
// These actions are typically called from the components
// You need to make api calls, get the data and pass it on to the reducers so that the reducer will update the states which inturn will cause a re-render of relevant components
export const requestLogin = () => ({
    type: 'NEED_LOGIN'
})

export const setUserLoggedIn = (loggedInStatus) => ({
    type: 'USER_LOGGEDIN',
    loggedInStatus
})

export const setUserCreds = (responseObj) => ({
    type: 'SET_USER_CREDS',
    username: responseObj.username,
    token: responseObj.token
})

export const loginUser = (username, password) => (dispatch, getState) => {
    //make api call here and on response set the user credentials
    console.log('Make Api Call');
    var responseObj = {
        username: 'Arjun Sasikumar',
        token: 'asdfsadfasdfasdfsadfasdff'
    }
    console.log('Dispatching action on user authentication');
    dispatch(setUserLoggedIn(true));    // dispatching an action with relevant params
    dispatch(setUserCreds(responseObj));
}

/*
    Invest Actions
*/
export const receiveLoans = (loans) => ({
    type: 'UPDATE_LOANS',
    loans
})

export const fetchLoans = () => (dispatch, getState) => {
    // return fetch(`http://192.168.0.104:8000/invest-api`)
    // .then( response => response.json() )
    // .then( json => dispatch(receiveLoans(tempData)) )
    dispatch(receiveLoans(investMockData))
}

export const updateRowActive = (loan_id) => ({
    type: 'UPDATE_ROW_ACTIVE',
    loan_id
})


/*
    My Investment Action
*/
export const receiveMyInvestments = (myInvestments) => ({
    type: 'UPDATE_MY_INVESTMENTS',
    myInvestments
})

export const fetchMyInvestments = () => (dispatch, getState) => {
    dispatch(receiveMyInvestments(myInvestmentsMockData))
}

export const updateMyInvestmentRowActive = (loan_id) => ({
    type: 'UPDATE_MY_INVESTMENT_ROW_ACTIVE',
    loan_id
})

/*
    Lender Account
*/
export const receiveAccountInfo = (accountInfo) => ({
    type: 'UPDATE_ACCOUNT_INFO',
    accountInfo
})

export const fetchAccountInfo = () => (dispatch, getState) => {
    dispatch(receiveAccountInfo(AccountMockData))
}
