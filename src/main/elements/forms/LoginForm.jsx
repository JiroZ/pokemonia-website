import {useState} from 'react';
import Button from '@mui/material/Button';
import * as React from 'react';
import {useFormik} from 'formik';
import localizedStrings from '../../../localization/common';
import * as yup from 'yup';
import Typography from '@mui/material/Typography';
import ApiService from '../../api/ApiService';
import {useDispatch} from 'react-redux';
import {InitAuthResponse, SignIn, CloseUserModel, InitUserData} from '../../../redux/actions';
import {SaveAuthToken, SaveAuthResponse} from '../../../redux/ReduxUtils/ReduxPersist';
import {addHeaderToDefaults} from '../../../Utils/AxiosUtils';
import {StyledTextField} from "../../../assets/components/TextField";
import {ForgotPasswordComponent} from "./ForgotPasswordComponent";
import {useToast} from "../ToastProvider";

const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const {addToast} = useToast()
    const [email, setEmail] = useState('');
    const [disableVerificationButton, setDisableVerificationButton] = useState(false)


    const dispatch = useDispatch();

    const [enableResendVerificationButton, setEnableResendVerificationButton] = useState(false)

    const validationSchema = yup.object({
        email: yup
            .string(localizedStrings.getString('enterEmail'))
            .required(localizedStrings.getString('emailRequired')),
        password: yup
            .string(localizedStrings.getString('enterPassword'))
            .min(8, localizedStrings.getString('passwordMin8len'))
            .required(localizedStrings.getString('passRequired')),
    });

    function handleLoginSubmit(values) {
        setEmail(values.email)
        setLoading(true);
        ApiService.loginRoute(values.email, values.password).then(loginResponse => {
            console.log(loginResponse.data);

            switch (loginResponse.data.statusCode) {
                case "VERIFY_YOUR_ACCOUNT": {
                    addToast(localizedStrings.getString('verifyAccount'), 'warning')
                    setEnableResendVerificationButton(true)
                    break;
                }
                case "LOGIN_SUCCESS" : {
                    addToast(localizedStrings.getString('loginSuccess'), 'success')
                    break;
                }
            }

            if (loginResponse.data.loginValid && loginResponse.data.hasPlayer) {
                dispatch(InitAuthResponse(loginResponse.data));
                dispatch(SignIn());
                dispatch(CloseUserModel());
                // let adminLevel = Number(loginResponse.data.adminLevel)
                // dispatch(Authorities(adminLevel))

                addHeaderToDefaults('Authorization', loginResponse.data.token)
                SaveAuthToken(loginResponse.data.token);
                SaveAuthResponse(loginResponse.data);

                setLoading(false)

                return ApiService.getUserDataRoute()
            } else if (loginResponse.data.loginValid && !loginResponse.data.hasPlayer) {
                dispatch(InitAuthResponse(loginResponse.data));
                dispatch(SignIn());
                dispatch(CloseUserModel());

                addHeaderToDefaults('Authorization', loginResponse.data.token)
                SaveAuthToken(loginResponse.data.token);
                SaveAuthResponse(loginResponse.data);

                setLoading(false)
            }else {
                switch (loginResponse.data.statusCode) {
                    case "INVALID_CRED" : {
                        addToast(localizedStrings.getString('invalidCredits'), 'error')
                        break;
                    }
                }
                dispatch(CloseUserModel());

                setLoading(false)
            }
        }).catch(err => {
            console.log('Exception occurred while trying to login ' + err);
            console.log('Exception occurred while trying to login server response : ' + err.response);
        }).then(userDataResponse => {
            console.log("User Data response");
            console.log(`Data ${userDataResponse.data}`);
            dispatch(InitUserData(userDataResponse.data));
        }).catch(info => {
            console.info('No User Found in game' + info.response);
            console.info('No User Found in game server response' + info.response);
        });
    }

    const HandleResendVerificationMail = () => {
        setDisableVerificationButton(true);
        ApiService.getResendVerificationRoute(email).then(response => {
                switch (response.data.registrationCode) {
                    case "VERIFICATION_SENT": {
                        addToast(localizedStrings.getString('verificationSent'), 'success')
                        break;
                    }
                    default: {
                        console.log(response)
                        addToast(localizedStrings.getString('verificationDefaultError'), 'error')
                    }
                }
            }
        ).catch(err => {
            console.error('Exception occurred while sending verification' + err.response);
            console.error('Exception occurred while sending verification server response' + err.response);
        });
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            handleLoginSubmit(values);
        },
    });


    return (
        <>
            <div>
                <Typography variant="h6" component="div" color='primary'
                            sx={{flexGrow: 1}}>{localizedStrings.getString('login')}</Typography>
                <br/>
                <form onSubmit={formik.handleSubmit}>
                    <StyledTextField
                        fullWidth
                        id="email"
                        name="email"
                        label="E-Mail"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <br/>
                    <br/>
                    <StyledTextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <br/>
                    <br/>
                    <Button disabled={!(formik.isValid && formik.dirty) || loading} color="primary" variant="contained"
                            fullWidth type="submit">
                        {localizedStrings.getString("login")}
                    </Button>
                </form>

                {
                    enableResendVerificationButton ?
                        <Button disabled={disableVerificationButton} color='secondary' variant="contained" fullWidth onClick={HandleResendVerificationMail}
                                type="submit">
                            {localizedStrings.getString("resendVerification")}
                        </Button> : <></>
                }

                <ForgotPasswordComponent/>
            </div>
        </>
    );
};
export default LoginForm;
