import React from "react";
import { Card, CardContent, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import localizedStrings from "../../../localization/common";
import { WindowsClientDownloadLink } from "../../elements/data/HyperLinks";
import { Window, Android, Apple } from "@mui/icons-material"; // Import Material Icons here


const useStyles = makeStyles((theme) => ({
    card: {
        minWidth: 275,
        textAlign: 'center',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        borderRadius: 8,
        padding: theme.spacing(3),
    },
    platformIcon: {
        fontSize: 48,
        marginBottom: theme.spacing(2),
    },
    downloadButton: {
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
        padding: theme.spacing(1.5, 3),
        borderRadius: 8,
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
}));

const DownloadsPage = () => {
    const classes = useStyles();

    const HandleDownloadLink = () => {
        console.log("Downloading Pokemonia...");
        window.open(WindowsClientDownloadLink);
    };

    return (
        <div style={{ paddingTop: 50 }}>
            <Grid container spacing={10}>
                <Grid item xs={12} sm={6}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Window className={classes.platformIcon} /> {/* Use Windows Icon */}
                            <Typography color="primary" variant="h4">
                                Windows
                            </Typography>
                            <Box mt={3}>
                                <Typography color="secondary" variant="body1">
                                    Download our app for Windows
                                </Typography>
                            </Box>
                            <Box mt={2}>
                                <Button color="primary" variant="contained" onClick={HandleDownloadLink}>
                                    {localizedStrings.getString('download')}
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Android className={classes.platformIcon} /> {/* Use Android Icon */}
                            <Typography color="primary" variant="h4">
                                Android
                            </Typography>
                            <Box mt={3}>
                                <Typography color="secondary" variant="body1">
                                    Download our app for Android
                                </Typography>
                            </Box>
                            <Box mt={2}>
                                <Button color="primary" variant="contained">
                                    {localizedStrings.getString('download')}
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Apple className={classes.platformIcon} /> {/* Use Apple Icon */}
                            <Typography color="primary" variant="h4">
                                macOS
                            </Typography>
                            <Box mt={3}>
                                <Typography color="secondary" variant="body1">
                                    Get our macOS app for Apple users.
                                </Typography>
                            </Box>
                            <Box mt={2}>
                                <Button color="primary" variant="contained">
                                    {localizedStrings.getString('download')}
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default DownloadsPage;
