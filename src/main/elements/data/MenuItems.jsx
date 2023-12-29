import React  from 'react';
import HomePage from '../../pages/home/HomePage';
import DownloadsPage from '../../pages/downloads/DownloadsPage';
import DonationPage from '../../pages/donation/DonationPage';
import localizedStrings from "../../../localization/common";
import {DonationPath, DownloadsPath, HomePath} from "./Paths";

export const MenuItems = [
    {
        title: localizedStrings.getString('home'),
        url: HomePath,
        cName: 'nav-links',
        component: <HomePage/>,
        authRequired: false
    },
    {
        title: localizedStrings.getString('downloads'),
        url: DownloadsPath,
        cName: 'nav-links',
        component: <DownloadsPage/>,
        authRequired: false
    },
    {
        title: localizedStrings.getString('donate'),
        url: DonationPath,
        cName: 'nav-links',
        component: <DonationPage/>,
        authRequired: true
    },
];
