import React from 'react';
import './features.scss';

// Components
import FeatureCard from '../../components/feature-card/FeatureCard';

const cardsData = [
    {
        title: 'Work Load',
        text: 'Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance.',
    },
    {
        title: 'Time Tracking',
        text: 'Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance.',
    },
    {
        title: 'Collaborations',
        text: 'Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance.',
    },
];

const Features = () => {
    return (
        <div className='features'>
            <h2 className='features__heading'>
                Our <span className='features__heading--green'>Features</span>
            </h2>

            <p className='features__text'>
                Letter of on become he tended active enable to. Vicinity
                relation sensible sociable surprise screened no up as.
            </p>

            <div className='features__container'>
                {cardsData.map((item, index) => (
                    <FeatureCard
                        title={item.title}
                        text={item.text}
                        key={index}
                    />
                ))}
            </div>

            <button type='submit' className='features__btn'>
                Explore All
            </button>
        </div>
    );
};

export default Features;
