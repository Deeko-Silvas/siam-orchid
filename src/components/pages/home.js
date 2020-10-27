import React from 'react';
import HeroSlider from '../hero-slider/heroSlider';
import Covid from '../covid-statement/covid';
import ImageSlider from '../image-slider/imageSlider';
import Map from '../map/map';

const Home = ({ WebsiteDetails }) => {
    return (
        <div className="home">
            <h1 className="accessibility">{`${WebsiteDetails.details.name} home page`}</h1>
            <HeroSlider slider={WebsiteDetails.heroSlider} />
            <Covid name={WebsiteDetails.details.name} />
            <ImageSlider images={WebsiteDetails.imageGallery} />
            <Map 
                contact={WebsiteDetails.contact}
                mapDetails={WebsiteDetails.maps}
            />
        </div>
    )

}

export default Home;