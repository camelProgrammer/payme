import React from 'react';
import './testimonial.scss';

// Images
import personReview from '../../assets/personReview.png';
import stars from '../../assets/stars.png';

const Testimonial = () => {
    return (
        <div className='testimonial'>
            <img className='testimonial__img' src={personReview} alt='Men' />

            <div className='testimonial__content'>
                <p className='testimonial__title'>Best Developers</p>
                <p className='testimonial__text'>
                    Outward clothes promise at gravity do excited. Sufficient
                    particular impossible by reasonable oh expression is. Yet
                    preference connection unpleasant yet melancholy but end
                    appearance. And excellence partiality estimating terminated
                    day everything.
                </p>
                <img
                    src={stars}
                    alt='5 stars'
                    className='testimonial__rating'
                />
                <div className='testimonial__person'>
                    <p className='testimonial__person-name'>Robert Johnson</p>
                    <p className='testimonial__person-position'>
                        Director at Behance
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
