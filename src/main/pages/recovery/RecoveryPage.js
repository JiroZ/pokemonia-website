import {Card, CircularProgress, Grid, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useFormik} from "formik";
import * as React from "react";
import ApiService from "../../api/ApiService";
import {useState} from "react";
import localizedStrings from "../../../localization/common";
import logo from "../../../assets/img/logo_full.png";
import {useSearchParams} from "react-router-dom";
import * as yup from 'yup';
import {useNavigate} from "react-router-dom";
import {HomePath} from "../../elements/data/Paths";
import {useToast} from "../../elements/ToastProvider";

export const RecoveryPage = () => {
    const {addToast} = useToast()

    const navigate = useNavigate()

    const [name, setName] = useState(localizedStrings.getString("submit"))
    const [submitting, setSubmitting] = useState(false)
    const [submittingReset, setSubmittingReset] = useState(false)

    const [searchParams, setSearchParams] = useSearchParams();

    const resetToken = searchParams.get("token")

    const HandleMailSubmit = (values) => {
        setSubmitting(true)

        ApiService.getRecoveryRoute(values.email).catch(err => {
            console.log('Exception occurred while trying to login ' + err);
            console.log('Exception occurred while trying to login server response : ' + err.response);

            addToast(localizedStrings.getString('errorMail'), 'error')

            setSubmitting(false)
        }).then(recoveryResponse => {
                console.log("User Data response");
                console.log(`Data ${recoveryResponse.data}`);

                setName(localizedStrings.getString("checkMail"));
                addToast(localizedStrings.getString('checkMail'), 'success')

                setSubmitting(false)
            }
        )
    }

    const HandleResetSubmit = (values) => {

        setSubmittingReset(true);

        console.log(values.password + " " + resetToken)

        ApiService.getResetPasswordRoute(values.password, resetToken).then(response => {
            console.log(response.data.code)

            switch (response.data.code) {
                case "RESET_SUCCESS": {
                    setName(localizedStrings.getString('resetSuccess'));
                    addToast(localizedStrings.getString('resetSuccess'), 'success')

                    setTimeout(() => {
                        navigate(HomePath)
                    }, 2000)

                    break;
                }
                default: {
                    setName(localizedStrings.getString("resetFailed"));
                    addToast(localizedStrings.getString('resetFailed'), 'error')

                    setTimeout(() => {
                        navigate(HomePath)
                    }, 2000)
                }
                    setSubmittingReset(false);
            }

        }).catch(err => {
            console.error('Exception occurred while resetting password' + err.response);
            console.error('Exception occurred while resetting password server response' + err.response);
        })
    }

    const resetSchema = yup.object({
        password: yup.string().required('Password is required'),
        confirmPassword: yup.string().test('passwords-match', localizedStrings.getString("passwordMatch"), function (value) {
            return this.parent.password === value
        })
    })

    const mailSchema = yup.object({
        email: yup.string().email(localizedStrings.getString('invalidEmail')).required('Required')
    })

    const mailFormik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: mailSchema,
        onSubmit: (values) => {
            HandleMailSubmit(values);
        },
    });

    const resetPasswordFormik = useFormik({
        initialValues: {
            token: resetToken,
            password: '',
            confirmPassword: ''
        },
        validationSchema: resetSchema,
        onSubmit: (values) => {
            HandleResetSubmit(values);
        },
    });

    return (searchParams.get("token") == null) ?
        <Grid>
            <Grid alignSelf='center'>
                <img src={logo} className=' overlay logo' alt="Logo"/>
            </Grid>
            <Grid item xs={10}>
                <Card sx={{padding: 5}}>
                    <Grid paddingBottom={4}>
                        <Typography color='primary' variant={'h4'}>
                            {localizedStrings.getString("forgotPassword")}
                        </Typography>
                    </Grid>

                    <form onSubmit={mailFormik.handleSubmit}>
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email Address"
                            type="email"
                            value={mailFormik.values.email}
                            onChange={mailFormik.handleChange}
                            error={mailFormik.touched.email && Boolean(mailFormik.errors.email)}
                            helperText={mailFormik.touched.email && mailFormik.errors.email}
                        />
                        <Grid paddingY={2}>
                            <Button variant="contained" color="primary" fullWidth type="submit"
                                    disabled={(!(resetPasswordFormik.isValid && resetPasswordFormik.dirty) || submitting) && (name !== localizedStrings.getString('submit'))}>
                                {(submitting) ? <CircularProgress/> : name}
                            </Button>
                        </Grid>
                    </form>

                </Card>

            </Grid>
        </Grid>
        :
        <Grid>
            <Grid alignSelf='center'>
                <img src={logo} className=' overlay logo' alt="Logo"/>
            </Grid>
            <Grid item xs={10}>
                <Card sx={{padding: 5}}>

                    <Grid paddingBottom={4}>
                        <Typography color='primary' variant={'h4'}>
                            {localizedStrings.getString("resetPassword")}
                        </Typography>
                    </Grid>

                    <form onSubmit={resetPasswordFormik.handleSubmit}>
                        <Grid>
                            <Grid item paddingBottom={2}>
                                <TextField
                                    fullWidth
                                    id="token"
                                    name="Token"
                                    label={localizedStrings.getString("token")}
                                    type="token"
                                    value={resetPasswordFormik.values.token}
                                    onChange={resetPasswordFormik.handleChange}
                                    error={resetPasswordFormik.touched.token && Boolean(resetPasswordFormik.errors.token)}
                                    helperText={resetPasswordFormik.touched.token && resetPasswordFormik.errors.token}
                                    disabled={true}
                                />
                            </Grid>

                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        id="password"
                                        name="password"
                                        label={localizedStrings.getString("newPassword")}
                                        type="password"
                                        value={resetPasswordFormik.values.password}
                                        onChange={resetPasswordFormik.handleChange}
                                        error={resetPasswordFormik.touched.password && Boolean(resetPasswordFormik.errors.password)}
                                        helperText={resetPasswordFormik.touched.password && resetPasswordFormik.errors.password}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        label={localizedStrings.getString("confirmPassword")}
                                        type="password"
                                        value={resetPasswordFormik.values.confirmPassword}
                                        onChange={resetPasswordFormik.handleChange}
                                        error={resetPasswordFormik.touched.confirmPassword && Boolean(resetPasswordFormik.errors.confirmPassword)}
                                        helperText={resetPasswordFormik.touched.confirmPassword && resetPasswordFormik.errors.confirmPassword}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid paddingY={2}>
                            <Button variant="contained" color="primary" fullWidth type="submit"
                                    disabled={(!(resetPasswordFormik.isValid && resetPasswordFormik.dirty) || submittingReset) && (name !== localizedStrings.getString('submit'))}>
                                {(submittingReset) ? <CircularProgress/> : name}
                            </Button>
                        </Grid>

                    </form>
                </Card>
            </Grid>
        </Grid>
}
