import loggedReducer from "./isSignedIn";
import {combineReducers} from "redux";
import modelReducer from "./isModelOpen";
import {userAuthReducer, userDataReducer} from './User';
import userAuthority from './UserAuthorties';

const allReducers = combineReducers({
    isSignedIn: loggedReducer,
    isUserModelOpen: modelReducer,
    getUserAuth: userAuthReducer,
    userAuthority: userAuthority,
    getUserData: userDataReducer
})

export default allReducers
