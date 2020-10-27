import React from 'react';
import FooterCard from './footerCard';
import './footer.css';

const Footer = () => {

    const cardTypes = [
        "contact",
        "opening",
        "social"
    ]

    const renderedCards = cardTypes.map(type => {
        return (
            <FooterCard 
                key={type}
                cardType={type}           
            />
        )
    })

    return (
        <footer>
            <div className="footer-content">
                {renderedCards}
            </div>    
        </footer>
    )
};

export default Footer;