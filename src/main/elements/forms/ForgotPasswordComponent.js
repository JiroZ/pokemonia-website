import * as React from "react";
import Typography from "@mui/material/Typography";
import localizedStrings from "../../../localization/common";
import {Link} from "react-router-dom";
import {ExtraRoutes} from "../data/ExtraRoutes";
import {CloseUserModel} from "../../../redux/actions";
import {useDispatch} from "react-redux";


export const ForgotPasswordComponent = () => {
    const dispatch = useDispatch();

    const item = ExtraRoutes.find(route => route.url === '/recovery');

    function handleClickOnRecovery() {
        dispatch(CloseUserModel())
    }

    return (
        <>
            <Typography color='secondary'>
                {localizedStrings.getString("forgotPassword")}
                {
                    <Link style={{textDecoration: 'none', color: 'inherit'}}
                          to={item.url}
                          className={item.cName} onClick={handleClickOnRecovery}>{item.title}</Link>

                }
            </Typography>

        </>
    )
}
