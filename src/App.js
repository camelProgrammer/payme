import React from 'react';
import './app.scss';

// Components
import { Footer, Navbar } from './components';

// Pages
import {
    About,
    Brands,
    Faq,
    Features,
    Header,
    Pricing,
    Testimonials,
} from './pages';

const app = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Brands />
            <About />
            <Features />
        </div>
    );
};

export default app;
