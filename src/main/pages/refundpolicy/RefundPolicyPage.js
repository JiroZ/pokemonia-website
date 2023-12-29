import React from 'react';
import { Typography, List, ListItem, ListItemText } from "@mui/material";

const RefundPolicyPage = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom color="inherit">
                Refund Policy
            </Typography>
            <Typography variant="body1" paragraph color="inherit">
                Full Refund
            </Typography>
            <Typography variant="body1" paragraph color="inherit">
                Our refund policy lasts 30 days. If 30 days have passed since your purchase then we cannot offer you any support, refund or exchange.
                Once your request for a refund has been received and investigated, we will notify you of the outcome.
                If your request is approved, your refund will be processed and the appropriate credit will be automatically applied to your PayPal account
                (or original payment method). This can take a few days to process.
            </Typography>
            <Typography variant="body1" paragraph color="inherit">
                *In order to be eligible for a full refund, your item/s must be unused and you must be able to provide a receipt or proof of purchase.
            </Typography>

            <Typography variant="body1" paragraph color="inherit">
                Partial Refund
            </Typography>
            <Typography variant="body1" paragraph color="inherit">
                There may be occasions where a partial refund is granted:
            </Typography>
            <List component="ul">
                <ListItem>
                    <ListItemText primary="You have an active Membership and you wish to give back the remainder of your Membership time." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="You have Game Currencies that are partially spent and you wish to give back the remainder of your Game Currencies." />
                </ListItem>
            </List>

            <Typography variant="body1" paragraph color="inherit">
                Not received your Refund?
            </Typography>
            <Typography variant="body1" paragraph color="inherit">
                There are a few steps to carry out prior to contacting staff regarding your refund:
            </Typography>
            <List component="ul">
                <ListItem>
                    <ListItemText primary="Contact your credit card company as it may take some time before your refund is officially posted." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Contact your bank as there is often some processing time before a refund is posted." />
                </ListItem>
            </List>
            <Typography variant="body1" paragraph color="inherit">
                If the above has been carried out and you have still not received your refund, please reach out to an Administrator on the discord.
            </Typography>
        </div>
    );
};

export default RefundPolicyPage;