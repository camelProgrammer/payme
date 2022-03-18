import React from 'react';
import './featureCard.scss';

const FeatureCard = ({ title, text }) => {
    return (
        <div className='card'>
            <p className='card__title'>{title}</p>
            <p className='card__text'>{text}</p>

            <button type='submit' className='card__btn'>
                <a href='#'>Learn more</a>
            </button>
        </div>
    );
};

export default FeatureCard;
