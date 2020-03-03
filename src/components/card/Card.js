import React from 'react';
import './Card.css';

// import image from '../../images/1.png';

const Card = ({ title, desc, image }) => {
    
    return (
        <div className="card">
            <img className='image-container' src={image} alt='...'/>
            <div className="text-info">
                <h2 className='card-title'>{ title }</h2>
                <p className="card-info">{ desc }</p>
            </div>
        </div>
    );
}

export default Card;