import {Button, Card, Grid, TextField, Typography} from "@mui/material";
import logo from "../../../assets/img/logo_full.png";
import * as React from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import localizedStrings from "../../../localization/common";
import ApiService from "../../api/ApiService";
import {useEffect, useState} from "react";
import {HomePath} from "../../elements/data/Paths";
import {useToast} from "../../elements/ToastProvider";


const VerificationPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const verificationToken = searchParams.get("token")

    const [verificationSent, setVerificationSent] = useState(false)

    const navigate = useNavigate()
    const {addToast} = useToast()

    const [verificationSuccess, setVerificationSuccess] = useState(false)

    const HandleAccountVerification = () => {
        setVerificationSent(true)
        ApiService.getAccountVerificationRoute(verificationToken).then(verificationResponse => {
            console.log(verificationResponse.data)
            switch (verificationResponse.data.registrationCode) {
                case "VERIFICATION_SUCCESS": {
                    setVerificationSuccess(true)
                    addToast(localizedStrings.getString('registerSuccess'), 'success')

                    setTimeout(() => {
                        navigate(HomePath)
                    }, 5000)
                    break;
                }
            }
        }).catch(err => {
            console.error('Exception occurred while resetting password' + err.response);
            console.error('Exception occurred while resetting password server response' + err.response);
        })
    }

    useEffect(() => {
        if (verificationToken == null) {
            navigate(HomePath)
        }
    }, [])

    const VerificationSuccess = () => {
        return <Grid>
            <Grid alignSelf='center'>
                <img src={logo} className=' overlay logo' alt="Logo"/>
            </Grid>
            <Typography color='green' variant={'h4'}>
                {localizedStrings.getString("verificationSuccess")}
            </Typography>
        </Grid>
    }

    const VerificationForm = () => {
        return <Grid>
            <Grid container justifyContent="center">
                <img src={logo} className="overlay logo" alt="Logo"/>
            </Grid>

            <Grid  justifyContent="center">
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Card sx={{padding: 5}}>
                        <Grid container justifyContent="left" paddingBottom={4}>
                            <Typography color="primary" variant="h4">
                                {localizedStrings.getString("verification")}
                            </Typography>
                        </Grid>

                        <Grid container justifyContent="center" paddingY={2}>
                            <Grid item xs={12}>
                                <TextField
                                    disabled={true}
                                    id="token"
                                    name="Token"
                                    label={localizedStrings.getString("token")}
                                    type="token"
                                    value={verificationToken}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>

                        <Grid container justifyContent="center" paddingY={2}>
                            <Grid item >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={HandleAccountVerification}
                                    disabled={verificationSent}
                                >
                                    {localizedStrings.getString("verify")}
                                </Button>
                            </Grid>
                        </Grid>

                    </Card>
                </Grid>
            </Grid>
        </Grid>
    }

    return verificationSuccess ? <VerificationSuccess/> : <VerificationForm/>
}


export default VerificationPage
