import React, { useEffect } from 'react';
import BedroomHero from '../components/BedroomHero';
import BedroomGrid from '../components/BedroomGrid';

const BedroomPage = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <BedroomHero />
            <BedroomGrid />
        </>
    );
};

export default BedroomPage;
