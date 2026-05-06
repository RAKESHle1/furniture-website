import React, { useEffect } from 'react';
import StorageHero from '../components/StorageHero';
import StorageGrid from '../components/StorageGrid';
import StorageShowcase from '../components/StorageShowcase';

const StoragePage = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <StorageHero />
            <StorageGrid />
            <StorageShowcase />
        </>
    );
};

export default StoragePage;
