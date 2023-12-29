import {CurrentAuthToken, IsTokenValid} from "./JWTManager";
import {RemoveAuthResponse, RemoveAuthToken} from "../redux/ReduxUtils/ReduxPersist"
import axios from "axios";

const IsUserAuthValid = () => {
    if(CurrentAuthToken() == null) {
        return false
    }
    else {
        return IsTokenValid(CurrentAuthToken())
    }
}

const LogOutUser = () => {
    RemoveAuthResponse()
    RemoveAuthToken()
    delete axios.defaults.headers.common['Authorization'];

    window.location.reload();
}
export {
    IsUserAuthValid,
    LogOutUser
}
