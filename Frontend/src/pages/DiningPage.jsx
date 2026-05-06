import React, { useEffect } from 'react';
import DiningHero from '../components/DiningHero';
import DiningGrid from '../components/DiningGrid';
import DiningSeatingCapacity from '../components/DiningSeatingCapacity';
import DiningProducts from '../components/DiningProducts';
import DiningShowcase from '../components/DiningShowcase';

const DiningPage = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <DiningHero />
            <DiningGrid />
            <DiningSeatingCapacity />
            <DiningProducts />
            <DiningShowcase />
        </>
    );
};

export default DiningPage;
