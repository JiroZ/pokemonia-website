import React, { useState, useEffect } from 'react';

function ErrorBoundary(props) {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const errorHandler = (error) => {
            console.error(error);
            setHasError(true);
        };
        window.addEventListener('error', errorHandler);
        return () => {
            window.removeEventListener('error', errorHandler);
        };
    }, []);

    if (hasError) {
        return <h1>Something went wrong.</h1>;
    }

    return props.children;
}

export default ErrorBoundary;
