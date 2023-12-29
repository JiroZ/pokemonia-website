import React, {useEffect, useState} from 'react';
import {Card, Grid} from '@mui/material';
import DonationComponent from "./DonationComponent";
import './css/DonationPage.css'
import logo from "../../../assets/img/logo_full.png";

const Message = ({message}) => (
    <section>
        <p>{message}</p>
    </section>
);

const DonationPage = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);

        if (query.get('success')) {
            setMessage('Thank you for your donation.');
        }

        if (query.get('canceled')) {
            setMessage(
                'We hope you will reconsider your decision.',
            );
        }
    }, []);


    return (
        <>
            {
                message ? (
                    <Message message={message}/>
                ) : (
                    <div>
                        <Grid>
                            <Card variant="outlined">
                                <img src={logo} className=' overlay logo centered' alt="Logo"/>
                                {
                                    <DonationComponent/>
                                }
                            </Card>
                        </Grid>
                    </div>
                )
            }
        </>
    );
};
export default DonationPage;
