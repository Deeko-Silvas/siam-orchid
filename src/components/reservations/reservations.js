import React from 'react';
import WebsiteDetails from '../../websiteDetails';
import './reservations.css';

const Reservations = () => {
    return (
        <div className="reservations">
            <h2>Reservations</h2>
            <p>Following the government’s update to the current COVID-19 laws we have updated our booking policy. </p>
            <p>From Monday 14th September, we are now only accepting bookings of six guests or less.</p>
            <p>From 24th September we are closing our restaurant at 10pm which means that the last table booking will be for 9pm.</p>
            <p>Due to these restrictions we are currently only taking bookings via phone.</p>
            <h3>For reservations or takwaways please contact us on <a href={`tel:${WebsiteDetails.contact.phone}`}><nobr>{WebsiteDetails.contact.phone}</nobr></a></h3>
        </div>
    )
}

export default Reservations;