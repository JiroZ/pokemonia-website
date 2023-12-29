import React, {useState} from 'react';
import './css/HomePage.css'

import MainCarousal from "./Carousal.jsx";
import NewsBox from "./NewsBox.jsx";

import logo from '../../../assets/img/logo_full.png'
import {Grid, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import PostingSystem from "./PostingSystem";


const HomePage = () => {

    return (
        <>
            <img src={logo} className=' overlay logo' alt="Logo"/>
            <div className='bannerArea'>
                {/*<div className='newsBox box overlay'>*/}
                {/*    <NewsBox/>*/}
                {/*</div>*/}
                <MainCarousal/>
            </div>
            <PostingSystem />
        </>
    );
}

export default HomePage
