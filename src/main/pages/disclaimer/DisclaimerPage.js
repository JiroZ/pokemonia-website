import React from 'react';
import { Typography } from "@mui/material";

const DisclaimerPage = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom color="inherit">
                Disclaimer
            </Typography>
            <Typography variant="body1" paragraph color="inherit">
                Despite our efforts to present current and accurate information, we cannot assume responsibility for information from any external links.
                The author of each web page is solely responsible for the content of their corresponding page.
            </Typography>
            <Typography variant="body1" paragraph color="inherit">
                Monia neither owns nor claims to own any portion of the Pokémon Franchise. Monia is an unaffiliated, fan-created game based off of products
                owned by the companies aforementioned. All custom artwork and coding for Monia is credited to their creators, but intellectual property is owned
                by the above as well. Donations towards Monia goes towards server maintenance and its future development. All staff members and developers are unpaid
                fans and volunteers.
            </Typography>
            <Typography variant="body1" paragraph color="inherit">
                © 2020 Pokémon. © 1995-2020 Nintendo/Creatures, Inc./GAME FREAK inc.
            </Typography>
            <Typography variant="body1" paragraph color="inherit">
                Pokémon and Pokémon character names are trademarks of Nintendo, © 2020 Nintendo
            </Typography>
        </div>
    );
};

export default DisclaimerPage;