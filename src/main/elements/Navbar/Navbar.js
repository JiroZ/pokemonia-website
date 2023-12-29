import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {MenuItems} from '../data/MenuItems';
import {Link} from 'react-router-dom';
import LoginRegisterModal from '../LoginRegisterModal';
import localizedStrings from '../../../localization/common';
import './Navbar.css'
import {useDispatch, useSelector} from 'react-redux';
import {OpenUserModel} from '../../../redux/actions';

import logo from '../../../assets/img/logo.png'
import {LogOutUser} from "../../../Managers/UserManager";
import {HomePath} from '../data/Paths'

const Navbar = () => {
    const dispatch = useDispatch();

    const handleOpenModal = () => {
        dispatch(OpenUserModel())
    };

    const handleLogOut = () => {
        LogOutUser()
        this.props.history.push(HomePath)
    }

    const isSignedIn = useSelector(state => state.isSignedIn)

    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="fixed" color="secondary">
                    <Toolbar className='navbar' style={{opacity: 1}}>

                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                            <img style={{width: 40, height: 40}} src={logo} alt="Logo"/>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            {
                                MenuItems.map((item, index) => {
                                    return (
                                        <>
                                            {
                                                item.authRequired && isSignedIn ?
                                                    <Button key={index} color="inherit">
                                                        <Link style={{textDecoration: 'none', color: 'inherit'}}
                                                              to={item.url} key={index}
                                                              className={item.cName}>{item.title}</Link>
                                                    </Button> :
                                                    <></>
                                            }
                                            {
                                                !item.authRequired ?
                                                    <Button key={index} color="inherit">
                                                        <Link style={{textDecoration: 'none', color: 'inherit'}}
                                                              to={item.url} className={item.cName}
                                                              key={index}>{item.title}</Link>
                                                    </Button> :
                                                    <></>
                                            }
                                        </>
                                    )
                                })
                            }
                        </Typography>

                        {
                            !isSignedIn ?
                                <Button color="inherit"
                                        onClick={handleOpenModal}>
                                    {localizedStrings.getString("login")}
                                </Button> :
                                <Button color="inherit"
                                        onClick={handleLogOut}>
                                    {localizedStrings.getString("logout")}
                                </Button>
                        }
                    </Toolbar>
                </AppBar>
                <LoginRegisterModal/>
            </Box>
        </>
    );
};
export default Navbar;
