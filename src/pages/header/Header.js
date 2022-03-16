import React from 'react';
import './header.scss';

// Images
import {
    person,
    decorator3,
    decorator4,
    decorator5,
    decorator6,
} from './imports';

const Header = () => {
    return (
        <div className='header' id='Home'>
            <div className='header__content'>
                <img
                    className='header__decorator header__decorator--first'
                    src={decorator3}
                />

                <img
                    className='header__decorator header__decorator--second'
                    src={decorator4}
                />

                <img
                    className='header__decorator header__decorator--third'
                    src={decorator5}
                />

                <h1 className='header__heading'>
                    Providing <br /> Best <br />
                    <span className='header__heading--green'>WEB Services</span>
                </h1>

                <p className='header__text'>
                    Letter of on become he tended active enable to. Vicinity
                    relation sensible sociable surprise screened no up as.
                </p>

                <div className='header__btn-container'>
                    <button type='submit' className='header__btn'>
                        <a href='#'>Get Started</a>
                    </button>

                    <button
                        type='submit'
                        className='header__btn header__btn--second'
                    >
                        <a href='#'>Explore</a>
                    </button>
                </div>
            </div>

            <div className='header__container'>
                <img
                    className='header__decorator header__decorator--fourth'
                    src={decorator6}
                />

                <img className='header__img' src={person} alt='' />
            </div>
        </div>
    );
};

export default Header;
