import React from 'react';
import eightSeaterImg from '../assets/dining/8_sit.png';
import sixSeaterImg from '../assets/dining/6_sit.png';
import fourSeaterImg from '../assets/dining/4_sit.png';
import twoSeaterImg from '../assets/dining/2_sit.png';

// You can add actual images here when available
const seatingOptions = [
    { id: 1, name: "8 Seater Dining Sets", discount: "UPTO 30% OFF", image: eightSeaterImg },
    { id: 2, name: "6 Seater Dining Table Sets", discount: "UPTO 45% OFF", image: sixSeaterImg },
    { id: 3, name: "4 Seater Dining Table Sets", discount: "UPTO 55% OFF", image: fourSeaterImg },
    { id: 4, name: "2 Seater Dining Table Sets", discount: "UPTO 50% OFF", image: twoSeaterImg },
];

const DiningSeatingCapacity = () => {
    return (
        <section className="section-padding container" style={{ paddingTop: '80px' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '2rem',
                    color: '#333',
                    marginBottom: '8px'
                }}>
                    Shop By Seating Capacity
                </h2>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>
                    Never Compromise on Dining Space
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '24px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {seatingOptions.map((option) => (
                    <div key={option.id} style={{
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                    }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{
                            height: '200px',
                            backgroundColor: '#f5f5f5',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {option.image ? (
                                <img
                                    src={option.image}
                                    alt={option.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            ) : (
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '14px',
                                    color: '#999',
                                    padding: '20px',
                                    textAlign: 'center'
                                }}>
                                    {option.name}
                                </div>
                            )}
                        </div>
                        <div style={{
                            padding: '20px',
                            backgroundColor: 'white',
                            textAlign: 'center'
                        }}>
                            <h3 style={{
                                fontSize: '16px',
                                fontWeight: '600',
                                color: '#333',
                                marginBottom: '8px'
                            }}>
                                {option.name}
                            </h3>
                            <p style={{
                                fontSize: '14px',
                                color: 'var(--color-accent)',
                                fontWeight: '500'
                            }}>
                                {option.discount}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile Responsive */}
            <style>{`
                @media (max-width: 768px) {
                    .section-padding {
                        padding-left: 20px;
                        padding-right: 20px;
                    }
                }
            `}</style>
        </section>
    );
};

export default DiningSeatingCapacity;
