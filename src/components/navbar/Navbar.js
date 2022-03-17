import React, { useState } from 'react';
import './navbar.scss';

// Images
import { logo, decorator1, decorator2 } from './imports';

const Logo = () => (
    <>
        <img className='navbar__menu-logo' src={logo} alt='payme logo' />
    </>
);

const Menu = () => (
    <>
        <ul className='navbar__menu-container'>
            <li className='navbar__menu-element'>
                <a href='#home'>Home</a>
            </li>
            <li className='navbar__menu-element'>
                <a href='#about'>About</a>
            </li>
            <li className='navbar__menu-element'>
                <a href='#testimonials'>Testimonials</a>
            </li>
            <li className='navbar__menu-element'>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
    </>
);

const Sign = () => (
    <>
        <div className='navbar__btn-container'>
            <button type='submit' className='navbar__btn'>
                Sign in
            </button>
            <button type='submit' className='navbar__btn navbar__btn--sign-up'>
                Sign up
            </button>
        </div>
    </>
);

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className='navbar'>
            <img
                className='navbar__decorator navbar__decorator--first'
                src={decorator1}
            />
            <img
                className='navbar__decorator navbar__decorator--second'
                src={decorator2}
            />

            {openMenu ? (
                <>
                    <div className='navbar--small'>
                        <Logo />

                        <div
                            className='navbar__menu-hamburger-container'
                            onClick={() => setOpenMenu(false)}
                        >
                            <div
                                className='navbar__menu-hamburger navbar__menu-hamburger--open'
                                onClick={() => setOpenMenu(false)}
                            ></div>
                        </div>
                        <div className='navbar__menu--large'>
                            <Menu />
                        </div>
                    </div>

                    <div className='navbar__menu--small'>
                        <Menu />
                    </div>

                    <Sign />
                </>
            ) : (
                <>
                    <div className='navbar--small'>
                        <Logo />

                        <div
                            className='navbar__menu-hamburger-container'
                            onClick={() => setOpenMenu(true)}
                        >
                            <div className='navbar__menu-hamburger'></div>
                        </div>

                        <div className='navbar__menu--large'>
                            <Menu />
                        </div>
                    </div>

                    <div className='navbar__menu--large'>
                        <Sign />
                    </div>
                </>
            )}
        </div>
    );
};

export default Navbar;
