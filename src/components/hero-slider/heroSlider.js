import React, {useState} from 'react';
import HeroSliderOverlay from './heroSliderOverlay';

import './heroSlider.css';

const HeroSlider = ({ slider }) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const numImages = slider.images.length

    const changeSlide = (index) => {
        if (index < 0) {
            setCurrentSlide(numImages - 1)
        } else if (index === numImages) {
            setCurrentSlide(0)
        } else (
            setCurrentSlide(index)
        )
    }

    const slideLeft = () => {
        changeSlide(currentSlide - 1)
    }

    const slideRight = () => {
        changeSlide(currentSlide + 1)
    }

    const renderImages = slider.images.map((slide, index) => {
        return (
            <div key={index} className={`hero-image-container ${index === currentSlide ? "top" : null}`}>
                <div className="hero-image" style={{backgroundImage: `url(images/slider/images/${slide.src})`}}></div>
                <HeroSliderOverlay 
                    slide={slide} 
                    slideLeft={slideLeft}
                    slideRight={slideRight}
                />
           </div>
        )
    })
        
    return (
        <div className="hero-slider-container">
            <div className="hero-images-container">
                {renderImages}
            </div>
            <div className="shadow-overlay"></div>
            {/* <div className="blend top-blend"></div> */}
            {/* <div className="blend bottom-blend"></div> */}
        </div>
    )
}

export default HeroSlider;