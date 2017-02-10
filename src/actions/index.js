import AccountMockData from '../data/account';
// These actions are typically called from the components
// You need to make api calls, get the data and pass it on to the reducers so that the reducer will update the states which inturn will cause a re-render of relevant components
export const pageLoading = (status) => ({
    type: 'PAGE_LOADING',
    status
})

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

export const setupUser = (user) => {
    return {
        type: 'SETUP_USER',
        user
    }
}

export const getUser = () => (dispatch, getState) => {
    let user = {
        username: 'abc@abc.com',
        fname: 'Arjun',
        lname: 'Sasikumar',
        registered: false,
        registrationStep: 5,
        type: 'borrower',
        subType: 'individual'
    }
    dispatch(setupUser(user));
}

/*
    Invest Actions
*/
export const receiveLoans = (response) => ({
    type: 'UPDATE_LOANS',
    loans: response.loans,
    totalLoans: response.record_count
})

export const fetchLoans = (filterQuery) => (dispatch, getState) => {
    dispatch(pageLoading(true));
    return fetch(`http://192.168.0.101:8000/api/listings?${filterQuery}`)
    .then( response => response.json() )
    .then( json => {
        dispatch(pageLoading(false));
        dispatch(receiveLoans(json.response))
    });
}

export const updateRowActive = (loan_id) => {
    return {
        type: 'UPDATE_ROW_ACTIVE',
        loan_id
    }
}


/*
    My Investment Action
*/
export const receiveMyInvestments = (myInvestments) => ({
    type: 'UPDATE_MY_INVESTMENTS',
    myInvestments
})

export const fetchMyInvestments = () => (dispatch, getState) => {
    dispatch(pageLoading(true));
    return fetch(`http://192.168.0.101:8000/api/my-investments`, {
        headers: {
            'Authorization': 'Token dbfec9b49b7ac9be72fa1febafaa3d88e1826c3f'
        }
    })
    .then( response => response.json() )
    .then( json => {
        dispatch(pageLoading(false));
        dispatch(receiveMyInvestments(json.response.my_investments));
    });
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



/*
    Dashboard
*/
export const receiveDashboardData = (dashboardData) => ({
    type: 'UPDATE_DASHBOARD_DATA',
    dashboardData
})

export const fetchDashboardData = () => (dispatch, getState) => {
    dispatch(pageLoading(true));
    return fetch('http://192.168.0.101:8000/api/lender-dashboard', {
        headers: {
            'Authorization': 'Token dbfec9b49b7ac9be72fa1febafaa3d88e1826c3f'
        }
    })
    .then( response => response.json() )
    .then( json => {
        dispatch(pageLoading(false));
        dispatch(receiveDashboardData(json));
    });
}
