import React, { useState, createContext, useContext } from 'react';
import {Alert, Snackbar} from "@mui/material";

const ToastContext = createContext("This is a toast message!");

export const useToast = () => {
    return useContext(ToastContext);
};

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = (message, severity = 'success') => {
        setToasts((prevState) => [
            ...prevState,
            {
                message,
                severity,
                id: new Date().getTime(),
            },
        ]);
    };

    const removeToast = (id) => {
        setToasts((prevState) => prevState.filter((t) => t.id !== id));
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            {toasts.map((t) => (
                <Snackbar
                    key={t.id}
                    open={true}
                    autoHideDuration={3000}
                    onClose={() => removeToast(t.id)}
                >
                    <Alert variant="filled" severity={t.severity}>
                        {t.message}
                    </Alert>
                </Snackbar>
            ))}
        </ToastContext.Provider>
    );
};
