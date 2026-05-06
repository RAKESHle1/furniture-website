import React, { useState, useEffect } from 'react';
import sofaMain from '../assets/sofas/Sofa-main.png';
import sofaMain1 from '../assets/sofas/Sofamain1.png';
import sofaMain2 from '../assets/sofas/Sofamain2.png';
import sofaMain3 from '../assets/sofas/Sofamain3.png';
import sofaMain4 from '../assets/sofas/Sofamain4.png';

const SofaHero = () => {
    const images = [sofaMain, sofaMain1, sofaMain2, sofaMain3, sofaMain4];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    // Duplicate the first image at the end for seamless loop
    const carouselImages = [...images, images[0]];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Reset to first image when reaching the duplicate
    useEffect(() => {
        if (currentIndex === images.length) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
            }, 1000); // Wait for transition to complete

            setTimeout(() => {
                setIsTransitioning(true);
            }, 1050); // Re-enable transition after reset
        }
    }, [currentIndex, images.length]);

    return (
        <div className="container section-padding" style={{ paddingBottom: '0', paddingTop: '20px' }}>
            <div className="sofa-banner" style={{
                display: 'flex',
                height: '550px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)'
            }}>
                {/* Left Text Side */}
                <div style={{
                    flex: '0 0 35%',
                    backgroundColor: '#4E342E', // Deep warm brown
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '64px',
                    position: 'relative',
                    zIndex: 2 // Ensure text stays above if needed, or below the lamp? 
                }}>
                    <h1 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '3.5rem',
                        lineHeight: '1.2',
                        marginBottom: '32px',
                        letterSpacing: '-0.5px'
                    }}>
                        Where Your <br />
                        <span style={{ color: '#D7CCC8', fontStyle: 'italic', fontWeight: '400' }}>Design</span> Meets <br />
                        Comfort
                    </h1>

                    <div style={{
                        width: '60px',
                        height: '2px',
                        backgroundColor: 'rgba(255,255,255,0.3)',
                        marginBottom: '32px'
                    }}></div>

                    <p style={{
                        fontSize: '1.8rem',
                        fontWeight: '300',
                        marginBottom: '8px',
                        fontFamily: "'Playfair Display', serif",
                    }}>
                        Starting From <span style={{ fontWeight: '600' }}>₹16,999*</span>
                    </p>
                </div>

                {/* Right Image Side */}
                <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                        position: 'relative'
                    }}>
                        <div style={{
                            display: 'flex',
                            width: '100%',
                            height: '100%',
                            transition: isTransitioning ? 'transform 1s ease-in-out' : 'none',
                            transform: `translateX(-${currentIndex * 100}%)`
                        }}>
                            {carouselImages.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Sofa Collection ${(index % images.length) + 1}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        flexShrink: 0
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Responsive Style & Animation */}
            <style>{`
                @media (max-width: 900px) {
                    .sofa-banner {
                        flex-direction: column;
                        height: auto !important;
                    }
                    .sofa-banner > div:first-child {
                        flex: auto !important;
                        padding: 40px !important;
                        text-align: center;
                    }
                     .sofa-banner > div:first-child h1 {
                        fontSize: 2.5rem !important;
                     }
                      .sofa-banner > div:first-child div {
                        margin: 24px auto !important;
                     }
                    .sofa-banner > div:last-child {
                        height: 300px;
                    }
                }
            `}</style>
        </div>
    );
};

export default SofaHero;
