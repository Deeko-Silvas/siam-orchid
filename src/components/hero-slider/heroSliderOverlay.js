import React from 'react';
import './heroSliderOverlay.css';
import HeroControls from './heroControls';

const HeroSliderOverlay = ({ slide, slideLeft, slideRight }) => {
    return (
        <div className="hero-slider-overlay-container">
            <div className="hero-slider-overlay-inner-container">
                <h2>{slide.overlayHeading}</h2>
                <p>{slide.overlayText}</p>
                {slide.overlayImage.length > 0 ? <img src={`images/slider/overlay/${slide.overlayImage}`}></img> : null}
                <a href={slide.overlayLink} target={slide.newWindow ? "_blank" : "_self"} rel="noopener noreferrer">{slide.overlayLinkText}</a>    
                <HeroControls
                    slideLeft={slideLeft}
                    slideRight={slideRight}
                />
            </div>
        </div>
    )
}

export default HeroSliderOverlay;