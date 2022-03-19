import React from 'react';
import './pricing.scss';

// Components
import PricingCard from '../../components/pricing-card/PricingCard';

// Images
import decorator1 from '../../assets/decorator9.svg';

const cardsData = [
    {
        title: 'For Starter',
        price: '$59',
        list: [
            'Feedback Categorization',
            'Features prioritization',
            'Real-time collaboration',
            'Feedback loop notifications',
            'Essential dev tools integrations',
        ],
        btn: 'Request Demo',
    },
    {
        title: 'For Teams',
        price: '$99',
        list: [
            'Feedback Categorization',
            'Features prioritization',
            'Real-time collaboration',
            'Feedback loop notifications',
            'Essential dev tools integrations',
        ],
        btn: 'Request Demo',
    },
    {
        title: 'For Company',
        price: 'Custom',
        list: [
            'Feedback Categorization',
            'Feedback loop notifications',
            'Essential dev tools integrations',
        ],
        btn: 'Contact Us',
    },
];

const Pricing = () => {
    return (
        <div className='pricing'>
            <img
                className='pricing__decorator pricing__decorator--first'
                src={decorator1}
            />

            <h2 className='pricing__heading'>
                Our
                <span className='pricing__heading--green'> Pricing Plan </span>
            </h2>

            <div className='pricing__container'>
                {cardsData.map((item, index) => (
                    <PricingCard
                        title={item.title}
                        price={item.price}
                        list={item.list}
                        btn={item.btn}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Pricing;
