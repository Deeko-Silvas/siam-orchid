import React from 'react';
import './spotlightImg.css';

const SpotlightImg = ({ image, alt }) => {
    return (
        <div className="spotlight-img-container" >
            <div className="spotlight-img" style={{backgroundImage: `url(${image})`}}></div>
        </div>
    )
}

export default SpotlightImg;