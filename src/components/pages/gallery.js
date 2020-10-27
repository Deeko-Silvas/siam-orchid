import React from 'react';
import ImageGallery from '../imageGallery/imageGallery';

const Gallery = ({ WebsiteDetails }) => {
    console.log(WebsiteDetails.imageGallery)
    return (
        <div>
            <h1 className="accessibility">`${WebsiteDetails.details.name} menu page`</h1>
            <div className="image-gallery-container">
                <ImageGallery images={WebsiteDetails.imageGallery} />
            </div>
            
        </div>
        
    )
}

export default Gallery;