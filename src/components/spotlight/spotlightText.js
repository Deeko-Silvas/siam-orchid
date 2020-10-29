import React from 'react';
import './spotlightText.css';

const SpotlightText = ({ heading, text}) => {
    return (
        <div className="spotlight-text-container">
            <h3>{heading}</h3>
            <p>{text}</p>
        </div>
    )
}

export default SpotlightText;