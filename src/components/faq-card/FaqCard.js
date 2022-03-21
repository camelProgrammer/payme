import React, { useState } from 'react';

import './faqCard.scss';

import openBtn from '../../assets/openBtn.svg';
import closeBtn from '../../assets/closeBtn.svg';

const FaqCard = ({ btnAlt, question, answer }) => {
    const [openAnswer, setOpenAnswer] = useState(false);

    return (
        <div className='faq-card'>
            <div className='faq-card__top'>
                <img
                    className='faq-card__btn'
                    src={openAnswer ? openBtn : closeBtn}
                    alt={btnAlt}
                    onClick={() => setOpenAnswer(!openAnswer)}
                />
                <p
                    className='faq-card__title'
                    onClick={() => setOpenAnswer(!openAnswer)}
                >
                    {question}
                </p>
            </div>

            <p className='faq-card__text'>{openAnswer && answer}</p>
        </div>
    );
};

export default FaqCard;
