import React from 'react';
import Typography from "@mui/material/Typography";
import {List, ListItem, ListItemText} from "@mui/material";

const PrivacyPolicyPage = () => {
    return (
        <div>
            <Typography variant="h4" color='inherit'  gutterBottom>
                Privacy Policy
            </Typography>
            <Typography variant="body1" color='inherit' paragraph>
                Your privacy and personal information is very important to us at Pokemonia (Monia). Establishing and maintaining
                a trusting relationship between our service and the community is crucial to the success of the project. It's
                important for you to know that we care about your personal data and how it is used, and we want you to trust
                that Monia uses your personal data carefully as well as why we collect it and what we do with it. We demonstrate
                this by enforcing these policies.
            </Typography>
            <Typography variant="body1" color='inherit' paragraph>
                Should you feel that Monia is not abiding by its posted policies or they are being neglected, you should contact
                an Administrator via the Monia Team Page.
            </Typography>
            <Typography variant="body1" color='inherit' paragraph>
                This Privacy Policy is part of our End-User Licence Agreement and Terms of Service Agreement. By participating
                in any portion of the services that Monia offers, you agree to be bound by its terms and conditions. This Privacy
                Policy only addresses activities conducted within our services. Any other services (including those to which we may link)
                may have their own policies, which we do not control, and therefore are not addressed, controlled or influenced by this policy.
            </Typography>

            <Typography variant="h5" color='inherit' gutterBottom>
                Collection of your Personal Data and Information
            </Typography>
            <Typography variant="body1" color='inherit' paragraph>
                Upon registering to Monia, you provide us with personal information, this includes the personal data you give us directly,
                personal information we collect automatically, and personal data we collect from other sources. You may also provide us
                with further information via support tickets, via questionnaires, or through forms which you send to us.
            </Typography>

            <Typography variant="h5" color='inherit' gutterBottom>
                How your Personal Data and Information may be handled or used
            </Typography>
            <Typography variant="body1" color='inherit' paragraph>
                We collect, process, and disclose your personal data only for specific and limited purposes. By agreeing to the Privacy Policy,
                you agree to our methods of handling your data.
            </Typography>
            <Typography variant="body1" color='inherit' paragraph>
                This could include, but is not limited to:
            </Typography>
            <List component="ul" color='inherit' >
                <ListItem>
                    <ListItemText color='inherit' primary="Helping us identify the rightful possession of an account in the event of a lost or stolen password." />
                </ListItem>
                <ListItem>
                    <ListItemText color='inherit' primary="Identifying multiple accounts that fall under the possession of one individual." />
                </ListItem>
                <ListItem>
                    <ListItemText color='inherit' primary="Preventing those in possession of terminated accounts future access to the service." />
                </ListItem>
                <ListItem>
                    <ListItemText color='inherit' primary="Providing optional e-mail updates from either our website or forums, at the sole discretion of you, the user." />
                </ListItem>
                <ListItem>
                    <ListItemText color='inherit' primary="Verifying the status of any donations made to Monia." />
                </ListItem>
                <ListItem>
                    <ListItemText color='inherit' primary="In the event that legal authorities request Monia to provide such personal information for use in any legal context, Monia
          will be required to oblige the requests of said authorities. This information will not be shared or sold to any third-party source,
          with the exception of law enforcement as aforementioned. This information will not be gathered unwillingly or without the knowledge
          of its provider under any circumstance. All information collected by Monia must be consented by its source." />
                </ListItem>
            </List>

            <Typography variant="h5" color='inherit' gutterBottom>
                Protection of minors
            </Typography>
            <Typography variant="body1" color='inherit' paragraph>
                In order to protect the privacy interests of minors, we do not allow children under the age of 18 to participate in any service provided
                by Monia, including both forums and games, without the consent of a parent or guardian.
            </Typography>

            <Typography variant="h5" color='inherit' gutterBottom>
                Monia staff's access to your account
            </Typography>
            <Typography variant="body1" color='inherit' paragraph>
                Monia staff may be required to access your account. This access is required for our services to identify any errors and to monitor
                suspicious activity. Staff may be required to monitor your activity whilst in-game. Private messages cannot be viewed and your
                password will not be required. Monia staff will never ask you for your password.
            </Typography>

            <Typography variant="h5" color='inherit' gutterBottom>
                How we protect your Personal Data and Information
            </Typography>
            <Typography variant="body1" color='inherit' paragraph>
                Monia maintains and ensures reasonable security procedures to protect the confidentiality and integrity of your personal data.
                We make every effort to protect your personal data from misuse, interference, loss, unauthorized access, modification, or disclosure.
                Access to personal information collected is limited to a very small number of people, and our staff is routinely updated and debriefed
                as our security practices develop and evolve. Staffs are limited in the type of personal information they can access depending on the
                access level that staff member has.
            </Typography>
            <Typography variant="body1" color='inherit' paragraph>
                By participating in any Monia service, you acknowledge that perfect security does not exist on the internet and Monia will execute to
                the fullest extent of their power to offer the best security and protection possible.
            </Typography>
        </div>
    );
};

export default PrivacyPolicyPage;