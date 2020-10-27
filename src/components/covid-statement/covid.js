import React from 'react';
import './covid.css';

const Covid = ({ name }) => {
    return (
        <div className="covid">
            <h3>Covid-19 Statement</h3>
            <p>We want to assure you that the {name} restaurant is mindful of the global COVID-19 pandemic and our top priority is to keep our customers, team members and communities safe. We appreciate your understanding as we navigate this uncertain time.</p>
            <p>Please be assured that we are closely monitoring daily developments and taking increased precautions by reinforcing the proper guidelines put in place by the World Health Organisation, Public Health England, UK Government and local public health authorities.</p>
            <p>In our Restaurant, we are enhancing our already rigorous health and safety procedures with additional cleaning and disinfectant. We also are training our team members to practice prevention guidelines to reduce the risk of exposure to the virus. If you have any questions, please do not hesitate to contact us.</p>
        </div>
    )
}

export default Covid;