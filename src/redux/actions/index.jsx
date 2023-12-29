const OpenUserModel = () => {
    return {
        type: 'OPEN'
    }
}
const CloseUserModel = () => {
    return {
        type: 'CLOSE'
    }
}
const SignIn = () => {
    return {
        type: 'SIGN_IN'
    }
}

const InitAuthResponse = (authResponse) => {
    return {
        type: 'LOGGED_IN',
        userAuthResponse: authResponse
    }
}

const InitUserData = (userData) => {
    return {
        type: 'USER_DATA',
        userData: userData
    }
}

const Authorities = (adminLevel) => {
    switch (adminLevel) {
        case 0 : {return {type: 'ALPHA_TESTER'}}
        case 1 : {return {type: 'COMMUNITY_MANAGER'}}
        case 2 : {return {type: "USER"}}
        case 3 : {return {type: "DONATOR"}}
        case 4 : {return {type: "CHAT_MODERATOR"}}
        case 5 : {return {type:"MAPPER"}}
        case 6 : {return {type:"MODERATOR"}}
        case 7 : {return {type:"ADMIN"}}
        case 9 : {return {type:"DEVELOPER"}}
        case 10 : {return {type:"NPC"}}
        case 11 : {return {type:"GM"}}
        case 12 : {return {type:"LEVEL_DESIGNER"}}
        case 13 : {return {type:"SCRIPTER"}}
        case 14 : {return {type:"HELPER"}}
        case 15 : {return {type:"SENIOR_MAPPER"}}
        case 16 : {return {type:"ARTIST"}}
        case 17 : {return {type:"SYS"}}
    }
}

export {
    OpenUserModel,
    CloseUserModel,
    SignIn,
    InitAuthResponse,
    Authorities,
    InitUserData
}
