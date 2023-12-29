import './App.css';
import React from 'react';

import {useState} from 'react';

import WebsiteRouter from './main/elements/WebsiteRouter';
import {blue, orange} from '@mui/material/colors';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import {LoadAuthResponse, LoadAuthToken} from './redux/ReduxUtils/ReduxPersist';
import {IsUserAuthValid} from './Managers/UserManager';
import {useDispatch} from 'react-redux';

import {InitAuthResponse, SignIn} from './redux/actions';
import axios from 'axios';
import Button from "@mui/material/Button";
import {GlobalStyles} from "@mui/material";

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Footer from "./main/elements/Footer/Footer";
import ErrorBoundary from "./Managers/GlobalExceptionHandler";

export const globalStyles = {}

export const light = {
    palette: {
        mode: 'light',
        secondary: {
            main: blue[700],
        },
    },
};

export const dark = {
    palette: {
        mode: 'dark',
        body: {
            background: '#222222'
        },
        background: {
            default: '#222222',
            paper: '#272727',
        },
        primary: {
            main: orange[50],
        },
        secondary: {
            main: orange[500],
        },
    },
    backgroundImage: 'url()'
};


function App() {

    const [theme, setTheme] = useState(false);
    const appliedTheme = createTheme(theme ? light : dark);

    const dispatch = useDispatch();

    (function () {

        const token = LoadAuthToken();
        if (IsUserAuthValid()) {
            axios.defaults.headers.common['Authorization'] = token;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    })();

    if (IsUserAuthValid()) {
        dispatch(SignIn());
        dispatch(InitAuthResponse(LoadAuthResponse()));
    }

    return (
        <>
            <div className='App'>
                <ErrorBoundary>
                    <GlobalStyles styles={globalStyles}/>
                    <ThemeProvider theme={appliedTheme}>
                        <CssBaseline enableColorScheme/>

                        <WebsiteRouter/>
                    </ThemeProvider>
                </ErrorBoundary>
            </div>

            ` <Button onClick={() => setTheme((prev) => !prev)}>Toggle Theme</Button>
        </>
    );
}

export default App;
