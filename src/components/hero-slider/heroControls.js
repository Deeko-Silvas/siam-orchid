import React from 'react';
import './heroControls.css';

const HeroControls = ({ slideLeft, slideRight }) => {
    return (
        <div className="hero-controls-container">
            <button className="hero-left" onClick={slideLeft}><i className="fas fa-arrow-left"></i></button>
            <button className="hero-right" onClick={slideRight}><i className="fas fa-arrow-right"></i></button>
        </div>
    )
}

export default HeroControls;