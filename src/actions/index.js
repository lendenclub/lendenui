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
