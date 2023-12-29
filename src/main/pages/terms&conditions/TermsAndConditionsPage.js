import React from 'react';
import { Typography, List, ListItem, ListItemText } from "@mui/material";

const TermsAndConditionsPage = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom color="inherit">
                Terms and Conditions
            </Typography>
            <Typography variant="body1" paragraph color="inherit">
                By accessing this website or any other website controlled and provided to you by Monia (Pokemonia), you agree
                to be bound by these website Terms and Conditions, all applicable laws and regulations, and agree that you are responsible
                for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using
                or accessing these websites.
            </Typography>

            <Typography variant="h5" gutterBottom color="inherit">
                User License
            </Typography>
            <Typography variant="body1" paragraph color="inherit">
                Permission is granted to temporarily download one copy of the materials (information or software) from Pokemonia's websites for
                personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this
                license you may not:
            </Typography>
            <List component="ul">
                <ListItem>
                    <ListItemText primary="Modify or copy the materials." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Use the materials for any commercial purpose, or for any public display (commercial or non-commercial)." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Attempt to decompile or reverse engineer any software contained on Pokemonia's websites." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Remove any copyright or other proprietary notations from the materials." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Transfer the materials to another person or 'mirror' the materials on any other server." />
                </ListItem>
            </List>
            <Typography variant="body1" paragraph color="inherit">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by Pokemonia at any time.
                Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials
                in your possession whether in electronic or printed format.
            </Typography>

            <Typography variant="h5" gutterBottom color="inherit">
                Disclaimer
            </Typography>
            <Typography variant="body1" paragraph color="inherit">
                The materials on Pokemonia's websites are provided "as is". Pokemonia make no warranties, expressed or implied, and hereby disclaim and
                negate all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a
                particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Pokemonia do not warrant or make
                any representations concerning the accuracy, likely results, or reliability of the use of the materials on the websites or otherwise
                relating to such materials or on any sites linked to these websites.
            </Typography>

            <Typography variant="h5" gutterBottom color="inherit">
                Limitations
            </Typography>
            <Typography variant="body1" paragraph color="inherit">
                In no event shall Pokemonia be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business
                interruption) arising out of the use or inability to use the materials on Pokemonia's websites, even if Pokemonia or a Pokemonia authorised representative
                have been notified or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties,
                or limitations of liability for consequential or incidental damages, these limitations may not apply to you. While using any service provided
                to you by Pokemonia, your activities may be monitored if you partake in any actions considered to be questionable or suspicious by Pokemonia and its staff.
                In the event your account is placed under supervision, you grant Pokemonia permission to monitor any activity that occurs on any main and alternative
                accounts. Pokemonia will not record, share, or otherwise make use of any gathered information or materials in any way that does not directly protect
                the integrity of the service.
            </Typography>

            <Typography variant="h5" gutterBottom color="inherit">
                Revisions and Errata
            </Typography>
            <Typography variant="body1" paragraph color="inherit">
                The materials appearing on Pokemonia's websites may include technical, typographical, or photographic errors. Pokemonia does not warrant that any of the materials
                on the websites are accurate, complete, or current. Pokemonia may make changes to the materials contained on the websites at any time without notice.
                Pokemonia does not, however, make any commitment to update the materials.
            </Typography>

            <Typography variant="h5" gutterBottom color="inherit">
                Links
            </Typography>
            <Typography variant="body1" paragraph color="inherit">
                Pokemonia has not reviewed all of the sites linked in its domain and are not responsible for the contents of any site that may be linked.
                The inclusion of any link does not imply endorsement by Pokemonia of the site. Use of any such linked website is at the user's own risk.
            </Typography>

            <Typography variant="h5" gutterBottom color="inherit">
                Site Terms of Use Modifications
            </Typography>
            <Typography variant="body1" paragraph color="inherit">
                Pokemonia may revise these terms of use for the websites at any time without notice. By using the websites you are agreeing to be bound by
                the then current version of these Terms and Conditions of Use.
            </Typography>
        </div>
    );
};

export default TermsAndConditionsPage;