function loginActions (state = {username: '', token: null }, action) {
    switch (action.type) {
        case 'SET_USER_CREDS':
            return {
                ...state,
                username: action.username,
                token: action.token
            }
        default:
            return state;
    }
}

export default loginActions;
