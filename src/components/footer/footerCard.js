import React from 'react';
import ContactCard from './contactCard';
import OpeningCard from './openingCard';
import SocialCard from './socialCard';
import WebsiteDetails from '../../websiteDetails';
import './footerCard.css';

const FooterCard = ({ cardType }) => {
    const renderedCard = () => {
        if (cardType === "contact") {
            return (
                <ContactCard 
                    contact={WebsiteDetails.contact} 
                    maps={WebsiteDetails.maps} 
                />
            )
        } else if (cardType === "opening") {
            return (
                <OpeningCard opening={WebsiteDetails.opening} />
            )
        } else if (cardType === "social") {
            return (
                <SocialCard social={WebsiteDetails.social} />
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    return (
        <div className="footer-card">
            {renderedCard()}
        </div>
        
    )
}

export default FooterCard;