import React, { useEffect } from 'react';
import LivingRoomHero from '../components/LivingRoomHero';
import LivingRoomGrid from '../components/LivingRoomGrid';

const LivingRoomPage = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/* No Navbar here, handled by App.jsx */}
            <div style={{ marginTop: '0px' }}>
                <LivingRoomHero />
                <LivingRoomGrid />
            </div>
        </div>
    );
};

export default LivingRoomPage;
