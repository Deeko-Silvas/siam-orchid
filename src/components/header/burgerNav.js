import React from 'react';
import './burgerNav.css'

const BurgerNav = ({ phone, burgerOpen, setBurgerOpen }) => {

    const burgerClick = () => {
        setBurgerOpen(!burgerOpen);
    }

    return (
        <div className="header-nav-mobile">
            <a id="header-phone" href={`tel:${phone}`}><i className="fas fa-mobile-alt"></i></a>
            <div className={`burger-nav ${burgerOpen ? "open" : null}`} onClick={burgerClick}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default BurgerNav;