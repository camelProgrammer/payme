import React, { useState } from 'react';
import './faq.scss';

import FaqCard from '../../components/faq-card/FaqCard';

const faqsData = [
    {
        question:
            'She met humoured sir breeding her. Six curiosity day assurance bed necessary.',
        answer: 'Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.',
    },
    {
        question:
            'And excellence partiality estimating terminated day everything?',
        answer: 'Phasellus in blandit arcu. Aenean consectetur pulvinar nulla nec condimentum. Etiam consectetur consequat risus. Morbi posuere nisi nec erat scelerisque facilisis. Duis eget semper sem.',
    },
    {
        question: 'Latter person am secure of estate genius at?',
        answer: 'Aenean aliquam, urna eget sagittis tincidunt, velit nulla feugiat eros, in rhoncus risus eros eu neque. Aenean nec sollicitudin orci. Donec in turpis id nunc eleifend fermentum ac eget purus.',
    },
    {
        question: 'Whatever landlord yourself at by pleasure of children be?',
        answer: 'Suspendisse potenti. Etiam ligula nisl, maximus ac euismod at, blandit vitae arcu. Nulla mauris nulla, hendrerit ac augue facilisis, venenatis dictum tellus. Sed metus elit, aliquam a fermentum id, auctor id velit.',
    },
];

const Faq = () => {
    return (
        <div className='faq'>
            <h2 className='faq__heading'>FAQs</h2>

            <div className='faq__card-container'>
                <>
                    {faqsData.map((item, index) => (
                        <FaqCard
                            question={item.question}
                            answer={item.answer}
                            key={index}
                        />
                    ))}
                </>
            </div>
        </div>
    );
};

export default Faq;
