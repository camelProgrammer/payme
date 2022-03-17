import React from 'react';
import './about.scss';

// Images
import {
    aboutCard1,
    aboutCard2,
    aboutCard3,
    aboutCard4,
    aboutCardSmall1,
    aboutCardSmall2,
    aboutCardSmall3,
    aboutCardSmall4,
} from './imports';

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='about__content'>
                <h2 className='about__heading'>
                    Best <span className='about__heading--green'>Services</span>
                </h2>
                <p className='about__text'>
                    Letter of on become he tended active enable to. Vicinity
                    relation sensible sociable surprise screened no up as.
                </p>
            </div>

            <div className='about__container'>
                <div className='about__container_column about__container_column--left'>
                    <img
                        className='about__card'
                        src={aboutCard1}
                        alt='Web development'
                    />
                    <img
                        className='about__card'
                        src={aboutCard2}
                        alt='Database
                        Management'
                    />
                </div>
                <div className='about__container_column about__container_column--right'>
                    <img
                        className='about__card'
                        src={aboutCard3}
                        alt='Web Designing'
                    />
                    <img className='about__card' src={aboutCard4} alt='SEO' />
                </div>
            </div>

            <div className='about__container about__container--small'>
                <div className='about__container_column about__container_column--left'>
                    <img
                        className='about__card'
                        src={aboutCardSmall1}
                        alt='Web development'
                    />
                    <img
                        className='about__card'
                        src={aboutCardSmall2}
                        alt='Database
                        Management'
                    />
                </div>

                <div className='about__container_column about__container_column--right'>
                    <img
                        className='about__card'
                        src={aboutCardSmall3}
                        alt='Web Designing'
                    />
                    <img
                        className='about__card'
                        src={aboutCardSmall4}
                        alt='SEO'
                    />
                </div>
            </div>

            <button type='submit' className='about__btn'>
                Explore All
            </button>
        </div>
    );
};

export default About;
