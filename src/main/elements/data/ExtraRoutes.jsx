import React from "react";
import {RecoveryPage} from "../../pages/recovery/RecoveryPage";
import localizedStrings from "../../../localization/common";
import {
    ContactUsPath,
    DisclaimerPath,
    PrivacyPolicyPath,
    RecoveryPath,
    RefundPolicyPath,
    TermsAndConditionsPath,
    VerificationPath
} from "./Paths";
import VerificationPage from "../../pages/verification/VerificationPage";
import PrivacyPolicyPage from "../../pages/privacypolicy/PrivacyPolicyPage";
import TermsAndConditionsPage from "../../pages/terms&conditions/TermsAndConditionsPage";
import DisclaimerPage from "../../pages/disclaimer/DisclaimerPage";
import RefundPolicyPage from "../../pages/refundpolicy/RefundPolicyPage";
import ContactUsPage from "../../pages/ContactUsPage";

export const ExtraRoutes = [
    {
        title: localizedStrings.getString("clickHere"),
        url: RecoveryPath,
        cName: 'nav-links',
        component: <RecoveryPage/>,
        authRequired: false
    },
    {
        title: localizedStrings.getString("verification"),
        url: VerificationPath,
        cName: 'nav-links',
        component: <VerificationPage/>,
        authRequired: false
    },
    {
        title: localizedStrings.getString("termsAndConditions"),
        url: TermsAndConditionsPath,
        cName: 'nav-links',
        component: <TermsAndConditionsPage/>,
        authRequired: false
    },
    {
        title: localizedStrings.getString("privacyPolicy"),
        url: PrivacyPolicyPath,
        cName: 'nav-links',
        component: <PrivacyPolicyPage/>,
        authRequired: false
    },
    {
        title: localizedStrings.getString("disclaimer"),
        url: DisclaimerPath,
        cName: 'nav-links',
        component: <DisclaimerPage/>,
        authRequired: false
    },
    {
        title: localizedStrings.getString("refundPolicy"),
        url: RefundPolicyPath,
        cName: 'nav-links',
        component: <RefundPolicyPage/>,
        authRequired: false
    },
    {
        title: localizedStrings.getString("contactUs"),
        url: ContactUsPath,
        cName: 'nav-links',
        component: <ContactUsPage/>,
        authRequired: false
    }
]
