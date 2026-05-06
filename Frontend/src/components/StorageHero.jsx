import React from 'react';
import storageMainImg from '../assets/storage/Storage_main.jpg';

const StorageHero = () => {
    return (
        <div className="container section-padding" style={{ paddingBottom: '0', paddingTop: '20px' }}>
            <div className="storage-banner" style={{
                display: 'flex',
                height: '550px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)'
            }}>
                {/* Left Text Side */}
                <div style={{
                    flex: '0 0 35%',
                    backgroundColor: '#4A3B32',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '64px',
                    position: 'relative',
                    zIndex: 2
                }}>
                    <h1 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '3.5rem',
                        lineHeight: '1.2',
                        marginBottom: '32px',
                        letterSpacing: '-0.5px'
                    }}>
                        Organize Your <br />
                        <span style={{ color: '#D7CCC8', fontStyle: 'italic', fontWeight: '400' }}>Space</span> with <br />
                        Style
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
                        Starting From <span style={{ fontWeight: '600' }}>₹19,999*</span>
                    </p>
                </div>

                {/* Right Image Side */}
                <div style={{ flex: 1, position: 'relative' }}>
                    <img
                        src={storageMainImg}
                        alt="Storage Furniture"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </div>
            </div>

            {/* Mobile Responsive Style */}
            <style>{`
                @media (max-width: 900px) {
                    .storage-banner {
                        flex-direction: column;
                        height: auto !important;
                    }
                    .storage-banner > div:first-child {
                        flex: auto !important;
                        padding: 40px !important;
                        text-align: center;
                    }
                     .storage-banner > div:first-child h1 {
                        fontSize: 2.5rem !important;
                     }
                      .storage-banner > div:first-child div {
                        margin: 24px auto !important;
                     }
                    .storage-banner > div:last-child {
                        height: 300px;
                    }
                }
            `}</style>
        </div>
    );
};

export default StorageHero;
