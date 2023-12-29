import * as yup from 'yup';
import localizedStrings from '../../../localization/common';
import {useFormik} from 'formik';
import Typography from '@mui/material/Typography';
import {CircularProgress, TextField} from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';
import ApiService from "../../api/ApiService";
import {useState} from "react";
import {useToast} from "../ToastProvider";
import {useDispatch} from "react-redux";
import {CloseUserModel} from "../../../redux/actions";


const RegistrationForm = () => {
    const [loading, setLoading] = useState(false);
    const {addToast} = useToast()
    const dispatch = useDispatch();

    const validationSchema = yup.object({
        email: yup
            .string(localizedStrings.getString('enterEmail'))
            .email(localizedStrings.getString('emailError'))
            .required(localizedStrings.getString('emailRequired')),
        password: yup
            .string(localizedStrings.getString('enterPassword'))
            .min(8, localizedStrings.getString('passwordMin8len'))
            .required(localizedStrings.getString('passRequired')),
    });

    function handleRegisterSubmit(values) {
        setLoading(true);
        console.log(JSON.stringify(values, null, 2));

        ApiService.registerRoute(values.email, values.password).then(registrationResponse => {
            console.log(registrationResponse.data);

            switch (registrationResponse.data.registrationCode) {
                case 'REGISTRATION_SUCCESS': {
                    dispatch(CloseUserModel());
                    addToast(localizedStrings.getString('registerSuccess'), 'success')
                    break;
                }
                case 'EMAIL_ALREADY_USED': {
                    addToast(localizedStrings.getString('emailUsed'), 'error')
                    break;
                }
                case 'LIMIT_EXCEEDED': {
                    addToast(localizedStrings.getString('regLimitExceeded'), 'warning')
                    break;
                }
                case 'IP_BANNED': {
                    addToast(localizedStrings.getString('ipBanned'), 'warning')
                    break;
                }
                default: {
                    addToast(localizedStrings.getString('contactSupport'), 'error')
                    break;
                }
            }

            setLoading(false)
        }).catch(err => {
            console.log('Exception occurred while trying to Register ' + err);
            console.log('Exception occurred while trying to Register server response : ' + err.response);
        })
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            handleRegisterSubmit(values)
        },
    });

    return (
        <>
            <div>
                <Typography variant="h6" component="div"
                            sx={{flexGrow: 1}}>{localizedStrings.getString('register')}</Typography>
                <br/>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="E-mail"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <br/>
                    <br/>
                    <TextField
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
                    <Button disabled={(!(formik.isValid && formik.dirty) && !loading)} color="primary"
                            variant="contained" fullWidth
                            type="submit">
                        {loading ? <CircularProgress color='inherit'/> : <>{localizedStrings.getString("register")}</>}
                    </Button>
                </form>
            </div>
        </>

    );
};
export default RegistrationForm;
