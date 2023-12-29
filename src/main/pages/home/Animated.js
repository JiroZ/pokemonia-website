import React, {useEffect, useState} from 'react';

import '../downloads/css/Animations.css'

const Pikachu = () => {

    return (
        <>
            <div className="pokeball">
                <div className="half half-top"/>
                <div className="half half-bottom"/>
                <div className="button"/>
            </div>
        </>
    );
};

const Pokeball = () => {
    const [top, setTop] = useState(0);

    useEffect(() => {
        const animate = () => {
            setTop(top => (top + 5) % 100);
        };
        const intervalId = setInterval(animate, 50);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="center-on-page">

            <div className="pokeball">
                <div className="pokeball__button"/>
            </div>

        </div>
    );
};

export {
    Pikachu, Pokeball
};
