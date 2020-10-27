import React from 'react';
import './mapCard.css';

const MapCard = ({ contact, mapDetails }) => {
    const renderedAddress = contact.address.map((line, index) => {
        return (
            <address key={index}>{line}</address>
        )
    })

    return (
        <div className="map-card">
            <h4>Contact Details</h4>
            <div className="map-card-address">
                <i className="fas fa-map-marker-alt"></i>
                <div className="address">
                    {renderedAddress}
                </div>
            </div>
            <a className="directions-btn" href={mapDetails.directions} target="_blank"rel="noopener noreferrer">Directions</a>
            {/* <a className="directions" href={address[-1]} target="_blank"rel="noopener noreferrer">Parking</a> */}
            <div className="phone">
                <i className="fas fa-mobile-alt"></i>
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </div>
        </div>
    )
}

export default MapCard;