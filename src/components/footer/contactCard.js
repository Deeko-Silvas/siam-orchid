import React from 'react';

const ContactCard = ({ contact, maps }) => {

    return (
        <div className="contact">
            <h4>Contact Us</h4>
            <a href={maps.link} target="_blank" rel="noopener noreferrer"><address>{contact.address.join(", ")}</address></a>
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            {contact.email.length > 0 ? <a href={`mailto:${contact.email}`}>Email Us</a> : null}
        </div>
    )
}

export default ContactCard;