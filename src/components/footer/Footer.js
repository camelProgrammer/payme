import React from 'react';
import './footer.scss';

// Images
import logoFooter from '../../assets/logoFooter.svg';

const infoData = [
    {
        title: 'Links',
        list: [
            <a href='#'>Overons</a>,
            <a href='#'>Social Media</a>,
            <a href='#'>Counters</a>,
            <a href='#'>Contact</a>,
        ],
    },
    {
        title: 'Company',
        list: [
            <a href='#'>Terms & Conditions</a>,
            <a href='#'>Privacy Policy</a>,
            <a href='#'>Contact</a>,
        ],
    },
    {
        title: 'Get in touch',
        list: [
            <a href='#'>Crechterwoord K12 182 DK Alknjkcb</a>,
            <a href='#'>085-132567</a>,
            <a href='#'>info@payme.net</a>,
        ],
    },
];

function FooterInfo({ title, list }) {
    const listItems = list.map((listItem, index) => (
        <li key={index}>{listItem}</li>
    ));

    return (
        <div className='footer__content-item'>
            <p className='footer__content-title'>{title}</p>
            <ul className='footer__content-list'>{listItems}</ul>
        </div>
    );
}

const Footer = () => {
    return (
        <footer className='footer' id='contact'>
            <div className='footer-main'>
                <div className='footer__container'>
                    <img
                        className='footer__container-logo'
                        src={logoFooter}
                        alt='Payme logo'
                    />
                    <p className='footer__container-text'>
                        Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
                    </p>
                </div>

                <div className='footer__content'>
                    {infoData.map((item, index) => (
                        <FooterInfo
                            title={item.title}
                            list={item.list}
                            key={index}
                        />
                    ))}
                </div>
            </div>

            <p className='footer__copyright'>
                &copy; 2021 Payme. All rights reserved
            </p>
        </footer>
    );
};

export default Footer;
