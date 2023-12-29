import {Fade, Modal} from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';
import {useState} from 'react';
import LoginForm from './forms/LoginForm';

import RegistrationForm from './forms/RegistrationForm.js';
import localizedStrings from '../../localization/common';
import Button from '@mui/material/Button';
import {useDispatch, useSelector} from 'react-redux';
import {CloseUserModel} from '../../redux/actions';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const LoginRegisterModal = () => {
    const isUserModalOpen = useSelector(state => state.isUserModelOpen)
    const dispatch = useDispatch()

    const [loginModal, setLoginModal] = useState(true);

    const handleCloseModal = () => {
        dispatch(CloseUserModel())
    };

    const modalText = loginModal ? localizedStrings.getString('noAccount') : localizedStrings.getString('yesAccount');
    const buttonText = loginModal ? localizedStrings.getString('register') : localizedStrings.getString('login');

    const handleFormChange = () =>  {
        setLoginModal(!loginModal);
    }

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isUserModalOpen}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={isUserModalOpen}>
                    <Box sx={modalStyle}>
                        {loginModal ? <LoginForm/> : <RegistrationForm/>}
                        {<div>{modalText} <Button color='primary' onClick={handleFormChange}>{buttonText}</Button>
                        </div>}
                    </Box>
                </Fade>
            </Modal>
        </>
    );
};
export default LoginRegisterModal;
