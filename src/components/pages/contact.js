import React from 'react';
import Reservations from '../reservations/reservations';
import Map from '../map/map';

const Contact = ({ WebsiteDetails }) => {
    return (
        <div>
            <h1 className="accessibility">`${WebsiteDetails.details.name} contact page`</h1>
            <Reservations />
            <Map 
                contact={WebsiteDetails.contact}
                mapDetails={WebsiteDetails.maps}
            />
        </div>
    )
}

export default Contact;