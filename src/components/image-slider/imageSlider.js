import React, {useState, useEffect} from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './imageSlider.css';

import Slider from "react-slick";

const ImageSlider = ({ images }) => {

    const [slideHeight, setSlideHeight] = useState(0)
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = (index) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    };
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };

    const renderSlides = () =>
    images.map((photo, index) => (
        <div key={index}>
            <div className="slide-image" onClick={() => openLightbox(index)} style={{height: slideHeight, backgroundImage: `url(${photo.thumb})`}}>
                <div className="slide-hover-overlay">
                    <i className="fas fa-search"></i>
                </div>
            </div>
        </div>
    ));

    useEffect(() => {
        let divideBy = 6;
        let screenWidth = window.innerWidth - 25;
        let tileWidth;
        if (screenWidth <= 1520) {
            if (screenWidth <= 480) {
                divideBy = 1;
            } else if (screenWidth <= 656) {
                divideBy = 2;
            } else if (screenWidth <= 768) {
                divideBy = 3;
            } else if (screenWidth <= 1232) {
                divideBy = 4
            } else {
                divideBy = 5
            }
            tileWidth = Math.ceil((screenWidth - 80) / divideBy) - 10
        } else {
            tileWidth = Math.ceil(1600 / divideBy) - 10
        }
        setSlideHeight(tileWidth)
    }, [])
    
    return (
        <div className="slider-container">
            <Slider 
                slidesToShow={6}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={2000}
                dots={true}
                initialSlide={0}
                responsive={[
                    {
                        breakpoint: 1520,
                        settings: {
                          arrows: false,
                          centerMode: true,
                          centerPadding: '40px',
                          slidesToShow: 5
                        }
                      },
                    {
                        breakpoint: 1232,
                        settings: {
                          arrows: false,
                          centerMode: true,
                          centerPadding: '40px',
                          slidesToShow: 4
                        }
                      },
                    {
                      breakpoint: 768,
                      settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                      }
                    },
                    {
                        breakpoint: 656,
                        settings: {
                          arrows: false,
                          centerMode: true,
                          centerPadding: '40px',
                          slidesToShow: 2
                        }
                      },
                    {
                      breakpoint: 480,
                      settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                      }
                    }
                  ]}
            >
                {renderSlides()}
            </Slider>
            <ModalGateway>
                {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                    currentIndex={currentImage}
                    views={images.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                    }))}
                    />
                </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
}

export default ImageSlider;