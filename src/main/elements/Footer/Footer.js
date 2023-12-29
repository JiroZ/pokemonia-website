import React from 'react';
import {Grid, Button, Typography, Link, Container} from '@mui/material';
import {
    Language,
    Brightness4,
    Brightness7,
    Twitter,
    Facebook,
    Instagram,
    ChatBubble,
    ChatBubbleOutlined
} from '@mui/icons-material';
import Box from "@mui/material/Box";
import {
    ContactUsPath,
    DisclaimerPath,
    PrivacyPolicyPath,
    RefundPolicyPath,
    TermsAndConditionsPath
} from "../data/Paths";
import {DiscordServerLink} from "../data/HyperLinks";
import './Footer.css'
import localizedStrings from "../../../localization/common";

const Footer = () => {

    const discordButtonStyle = {
        backgroundColor: '#7289DA',
        color: 'white',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#5c6f8d',
        },
    };

    function HandleDiscordButtonClick() {
        window.open(DiscordServerLink)
    }

    return (
        <Box className='footerBox'
            component="footer"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
                p: 6,
                display: 'flex'
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Pokemonia is a Pokemon MMORPG game
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Policies
                        </Typography>
                        <Grid item >
                            <Link href={PrivacyPolicyPath} variant="body2" paddingRight={3} color="primary">
                                {localizedStrings.getString('privacyPolicy')}
                            </Link>
                            <Link href={RefundPolicyPath} variant="body2" paddingRight={3} color="primary">
                                {localizedStrings.getString('refundPolicy')}
                            </Link>
                        </Grid>
                        <Grid item >
                            <Link href={TermsAndConditionsPath} variant="body2" paddingRight={3} color="primary">
                                {localizedStrings.getString('termsAndConditions')}
                            </Link>
                            <Link href={DisclaimerPath} variant="body2"  paddingRight={3}  color="primary">
                                {localizedStrings.getString('disclaimer')}
                            </Link>
                            <Link href={ContactUsPath} variant="body2"  paddingRight={3}  color="primary">
                                {localizedStrings.getString('contactUs')}
                            </Link>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Follow Us
                        </Typography>
                        {/*<Link href="https://www.facebook.com/" color="inherit">*/}
                        {/*    <Facebook />*/}
                        {/*</Link>*/}
                        {/*<Link*/}
                        {/*    href="https://www.instagram.com/"*/}
                        {/*    color="inherit"*/}
                        {/*    sx={{ pl: 1, pr: 1 }}*/}
                        {/*>*/}
                        {/*    <Instagram />*/}
                        {/*</Link>*/}
                        {/*<Link href="https://www.twitter.com/" color="inherit">*/}
                        {/*    <Twitter />*/}
                        {/*</Link>*/}
                        <Grid item>
                            <Button style={discordButtonStyle} onClick={HandleDiscordButtonClick} variant="contained" startIcon={<ChatBubbleOutlined />}>
                                Join our Discord
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;