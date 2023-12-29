import Typography from "@mui/material/Typography";
import localizedStrings from "../../../localization/common";
import {Link} from "react-router-dom";
import * as React from "react";
import ApiService from "../../api/ApiService";
import {ExtraRoutes} from "../data/ExtraRoutes";

export const ResendVerificationMailComponent = () => {

    const item = ExtraRoutes.find(route => route.url === '/resend-verification');

    return  <Typography color='secondary'>
        {localizedStrings.getString("forgotPassword")}
        {
            <Link style={{textDecoration: 'none', color: 'inherit'}}
                  to={item.url}
                  className={item.cName} onClick={HandleResendVerificationMail}>{item.title}</Link>

        }
    </Typography>
}
