import React from 'react';
import './brands.scss';

// Components
import Brand from '../../components/brand/Brand';

// Images
import { planday, umbraco, pearlfisher, brightpearl } from './imports';

const brandsData = [
    {
        brandImg: planday,
        brandAlt: 'planday',
    },
    {
        brandImg: umbraco,
        brandAlt: 'umbraco',
    },
    {
        brandImg: pearlfisher,
        brandAlt: 'pearlfisher',
    },
    {
        brandImg: brightpearl,
        brandAlt: 'brightpearl',
    },
    {
        brandImg: planday,
        brandAlt: 'planday',
    },
];

const Brands = () => {
    return (
        <div className='brands'>
            {brandsData.map((item, index) => (
                <Brand brandImg={item.brandImg} key={index} />
            ))}
        </div>
    );
};

export default Brands;
