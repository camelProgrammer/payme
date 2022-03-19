import React from 'react';
import './pricingCard.scss';

import check from '../../assets/check.svg';

function PricingCard({ title, price, list, btn }) {
    const listItems = list.map((listItem, index) => (
        <li key={index}>
            <img className='pricing-card__list-img' src={check} alt='check' />
            {listItem}
        </li>
    ));

    return (
        <div className='card card--pricing'>
            <p className='pricing-card__title'>{title}</p>
            <p className='pricing-card__price'>{price}</p>
            <ul className='pricing-card__list'>{listItems}</ul>
            <button type='submit' className='pricing-card__btn'>
                {btn}
            </button>
        </div>
    );
}

export default PricingCard;
