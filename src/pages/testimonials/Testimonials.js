import React from 'react';
import './testimonials.scss';

// Components
import Testimonial from '../../components/testimonial/Testimonial';

// Images
import decorator1 from '../../assets/decorator8.svg';

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <img className='testimonials__decorator ' src={decorator1} />

            <h2 className='testimonials__heading'>
                What
                <span className='testimonials__heading--green'> Clients </span>
                Say
            </h2>

            <p className='testimonials__text'>
                Letter of on become he tended active enable to. Vicinity
                relation sensible sociable surprise screened no up as.
            </p>

            <div className='testimonials__container'>
                <Testimonial />
            </div>
        </div>
    );
};

export default Testimonials;
