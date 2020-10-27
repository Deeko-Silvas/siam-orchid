import React from 'react';
import './heroImage.css';

const HeroImage = ({ hero }) => {
    return (
        <div className="hero-image" style={{backgroundImage: `url(images/hero/${hero})`}}>
            <div className="blend top-blend"></div>
            <div className="blend bottom-blend"></div>
        </div>
    )
}

export default HeroImage;