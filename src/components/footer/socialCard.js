import React from 'react';

const SocialCard = ({ social }) => {

    return (
        <div className="social">
            <h4>Social</h4>
            <div className="social-icons">
                {social.facebook.length > 0 ? <a href={`https://www.facebook.com/${social.facebook}`} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a> : null}
                {social.facebook.length > 0 ? <a href={`https://m.me/${social.facebook}`} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-messenger"></i></a> : null}
                {social.twitter.length > 0 ? <a href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a> : null}
                {social.instagram.length > 0 ? <a href={`https://instagram.com/${social.twitter}`} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a> : null}   
                {social.tripAdvisor.length > 0 ? <a href={`https://www.tripadvisor.co.uk/${social.tripAdvisor}.html`} target="_blank" rel="noopener noreferrer"><i className="fab fa-tripadvisor"></i></a> : null}
            </div>        
        </div>
    )
}

export default SocialCard;