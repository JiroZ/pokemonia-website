const userAuthReducer = (state = {}, action) => {
    if (action.type === 'LOGGED_IN') {
        return action.userAuthResponse;
    } else {
        return state;
    }
}

const userDataReducer = (state = {}, action) => {
    if(action.type === 'USER_DATA')  {
        return action.userData
    } else {
        return state
    }
}
export {
    userAuthReducer,
    userDataReducer
}
