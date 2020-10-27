import React from 'react';
import MapCard from './mapCard';
import GoogleMap from './googleMap';

const Map = ({ contact, mapDetails }) => {
    return (
        <div className="map-container">
            <MapCard 
                contact={contact}
                mapDetails={mapDetails}
            />
            <GoogleMap mapDetails={mapDetails} />
        </div>
    )
    
}

export default Map;