import React, { useEffect, useState } from 'react';

import './navigation.scss';

const Navigation: React.FunctionComponent = () => {
    const [stickyClass, setStickyClass] = useState('hidden-nav');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    const convertVhToPx = (vh = 50) => {
        const oneVhInPx = window.innerHeight / 100;
        return oneVhInPx * vh;
    };

    const stickNavbar = () => {
        if (window !== undefined) {
            const windowHeight = window.scrollY;
            // window height changed for the demo
            return windowHeight > convertVhToPx(100)
                ? setStickyClass('sticky-nav')
                : setStickyClass('hidden-nav');
        }
    };

    return (
        <div className={`navbar ${stickyClass}`}>
            <div className="row container">
                <div className="col">
                    <div className="title">The Dream Bite</div>
                </div>
                <div className="col links">
                    <a>Posts</a>
                    <a>Recipes</a>
                    <a>Our Journey</a>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
