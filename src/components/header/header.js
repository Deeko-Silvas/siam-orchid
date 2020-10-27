import React, {useState} from 'react';
import HeaderLogo from './headerLogo';
import BurgerNav from './burgerNav';
import Navigation from './navigation';
import './header.css';

const Header = ({ logo, name, phone, pages }) => {
    const [burgerOpen, setBurgerOpen] = useState(false)

    return (
        <header>
            <div className="header-container">
                <div className="logo-menu-container">
                    <HeaderLogo 
                        logo={logo}
                        name={name}
                    />
                    <BurgerNav 
                        phone={phone}
                        burgerOpen={burgerOpen}
                        setBurgerOpen={setBurgerOpen} 
                    />
                </div>
                <Navigation 
                    pages={pages}
                    burgerOpen={burgerOpen}
                />
            </div>
        </header>

    )
}

export default Header;