import React from 'react';
import SpotlightImg from './spotlightImg';
import SpotlightText from './spotlightText';

import './spotlight.css'

const Spotlight = ({ spotlight }) => {
    return (
        <div className="spotlight-container">
            <div className="spotlight-inner-container">
                <SpotlightImg 
                    image={spotlight.image}
                    alt={spotlight.alt}
                />
                <SpotlightText 
                    heading={spotlight.heading}
                    text={spotlight.text}
                />
            </div>
        </div>

    )
}

export default Spotlight;