import React from 'react';
import { default as Logo } from '../../assets/logo-white.svg';
import './header.scss';

const Header: React.FunctionComponent = () => {
    return (
        <header className="pt-1 row text-center">
            <div className="header-img">
                <img src={Logo} className="header-text shadow" />
            </div>
        </header>
    );
};

export default Header;
