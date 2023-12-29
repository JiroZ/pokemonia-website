import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import {MenuItems} from './data/MenuItems';
import {ExtraRoutes} from './data/ExtraRoutes';
import HomePage from "../pages/home/HomePage";
import {useSelector} from "react-redux";
import Footer from "./Footer/Footer";
import './page.css'

const WebsiteRouter = () => {
    const isSignedIn = useSelector(state => state.isSignedIn)

    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <div style={{paddingTop: "65px", paddingBottom: "200px"}} className='page-container'>
                    <div className='content-wrap'>
                        <Routes>
                            {
                                MenuItems.map((item, index) => {
                                    return (
                                        <>
                                            {
                                                (item.authRequired && !isSignedIn) ?
                                                    <Route path="*" element={<HomePage/>}/> :
                                                    <Route key={index} path={item.url} element={item.component} exact/>
                                            }
                                        </>
                                    );
                                })
                            }
                            {
                                ExtraRoutes.map((item, index) => {
                                    return (
                                        <>
                                            {
                                                (item.authRequired && !isSignedIn) ?
                                                    <Route path="*" element={<HomePage/>}/> :
                                                    <Route key={index} path={item.url} element={item.component} exact/>
                                            }
                                        </>
                                    );
                                })
                            }
                            <Route path="*" element={<HomePage/>}/>
                        </Routes>

                        <Footer/>
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
};

export default WebsiteRouter;
