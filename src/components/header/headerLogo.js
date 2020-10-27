import React from 'react';
import './headerLogo.css';

const HeaderLogo = ({ logo, name }) => {
    return (
        <div className="logo-container">
            <h1 className="accessibility">Light of Asia Indian Restaurant Andover</h1>
            <a href="/"><img className="main-logo" src={logo} alt={`${name} logo`} /></a>
        </div>
    )
}

export default HeaderLogo;