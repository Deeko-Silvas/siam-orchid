import React from 'react';

const OpeningCard = ({ opening }) => {

    const renderOpeningHours = opening.map((hours, index) => {
        return (
            <p key={index}>{hours}</p>
        )
    })

    return (
        <div className="opening">
            <h4>Opening Hours</h4>
            <div className="hours">
                {renderOpeningHours}
            </div>
        </div>

    )
}

export default OpeningCard;