import React, { useState, useRef } from 'react';
import modularKitchenBigImg from '../assets/dining/Kitchen_big.png';
import kitchenMainImg from '../assets/dining/Kitchen_main.png';
import diningBigImg from '../assets/dining/Dining_big.png';

// Placeholder for images - you can add actual images later
const diningShowcases = [
    {
        id: 1,
        title: "Dining Table Sets",
        description: "Create unforgettable moments with our exquisite dining table sets, where timeless craftsmanship meets contemporary design for the perfect family gathering.",
        fullDescription: "Create unforgettable moments with our exquisite dining table sets, where timeless craftsmanship meets contemporary design for the perfect family gathering. Our collections feature a variety of high-quality materials including solid wood, glass, and marble, ensuring durability and style that lasts for generations. Whether you prefer a rustic farmhouse look or a sleek modern aesthetic, our sets are designed to be the centerpiece of your dining room.",
        image: diningBigImg
    },
    {
        id: 2,
        title: "Modular kitchen Design",
        description: "Transform your culinary space with innovative modular kitchen designs that seamlessly blend cutting-edge functionality with sophisticated aesthetics.",
        fullDescription: "Transform your culinary space with innovative modular kitchen designs that seamlessly blend cutting-edge functionality with sophisticated aesthetics. Our modular systems are fully customizable to fit your specific needs, offering smart storage solutions, ergonomic layouts, and premium finishes. Experience the joy of cooking in a kitchen that is as beautiful as it is practical, tailored precisely to your lifestyle.",
        image: kitchenMainImg
    },
    {
        id: 3,
        title: "Kitchen Furniture",
        description: "Elevate your cooking experience with premium kitchen furniture that combines superior craftsmanship, intelligent storage, and elegant design.",
        fullDescription: "Elevate your cooking experience with premium kitchen furniture that combines superior craftsmanship, intelligent storage, and elegant design. From spacious islands and pantry cabinets to stylish bar stools and carts, every piece is crafted to enhance the utility and beauty of your kitchen. Meticulous attention to detail ensures that our furniture not only looks stunning but also withstands the rigors of daily use.",
        image: modularKitchenBigImg
    }
];

const DiningShowcase = () => {
    const [expandedIds, setExpandedIds] = useState({});
    const [typedTexts, setTypedTexts] = useState({});
    const typingTimeouts = useRef({});

    const toggleExpand = (id, shortText, fullText) => {
        const isExpanded = expandedIds[id];

        // Clear any existing typing for this ID
        if (typingTimeouts.current[id]) {
            clearInterval(typingTimeouts.current[id]);
        }

        if (!isExpanded) {
            // Expanding
            setExpandedIds(prev => ({ ...prev, [id]: true }));
            setTypedTexts(prev => ({ ...prev, [id]: "" }));

            let currentText = "";
            let currentIndex = 0;

            // Start typing from the beginning of fullText

            typingTimeouts.current[id] = setInterval(() => {
                if (currentIndex < fullText.length) {
                    currentText += fullText[currentIndex];
                    setTypedTexts(prev => ({
                        ...prev,
                        [id]: currentText
                    }));
                    currentIndex++;
                } else {
                    clearInterval(typingTimeouts.current[id]);
                }
            }, 30); // Typing speed slower
        } else {
            // Collapsing
            setExpandedIds(prev => ({ ...prev, [id]: false }));
            setTypedTexts(prev => {
                const newState = { ...prev };
                delete newState[id];
                return newState;
            });
        }
    };

    return (
        <section className="section-padding container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <div className="dining-showcase-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px'
            }}>
                {diningShowcases.map((showcase) => (
                    <div key={showcase.id} style={{
                        position: 'relative',
                        height: '650px',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        cursor: 'default',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                        }}
                    >
                        {/* Background Image */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: showcase.image
                                ? `url(${showcase.image}) center/cover no-repeat`
                                : 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
                            zIndex: 1
                        }}>
                            {showcase.image && (
                                <img
                                    src={showcase.image}
                                    alt={showcase.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            )}
                        </div>

                        {/* Dark Overlay */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)',
                            zIndex: 2
                        }}></div>

                        {/* Content */}
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: '32px',
                            zIndex: 3,
                            color: 'white',
                            backgroundColor: expandedIds[showcase.id] ? 'rgba(0,0,0,0.8)' : 'transparent', // Slightly darker background for better readability when expanded
                            transition: 'background-color 0.3s ease',
                            borderBottomLeftRadius: '16px',
                            borderBottomRightRadius: '16px',
                            maxHeight: expandedIds[showcase.id] ? '100%' : 'auto', // Allow expansion
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end'
                        }}>
                            <h3 style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: '2rem',
                                marginBottom: '12px',
                                fontWeight: '600'
                            }}>
                                {showcase.title}
                            </h3>
                            <p style={{
                                fontSize: '0.95rem',
                                lineHeight: '1.6',
                                marginBottom: '20px',
                                opacity: 0.95,
                                // Removed fixed height constraints for typing effect
                            }}>
                                {expandedIds[showcase.id]
                                    ? (typedTexts[showcase.id] || showcase.description)
                                    : showcase.description}
                            </p>
                            <button style={{
                                padding: '12px 32px',
                                backgroundColor: 'white',
                                color: '#4A3B32',
                                border: 'none',
                                borderRadius: '4px',
                                fontSize: '14px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                alignSelf: 'flex-start'
                            }}
                                onClick={() => toggleExpand(showcase.id, showcase.description, showcase.fullDescription)}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                                    e.currentTarget.style.color = 'white';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.backgroundColor = 'white';
                                    e.currentTarget.style.color = '#4A3B32';
                                }}
                            >
                                {expandedIds[showcase.id] ? 'Show Less' : 'Read More'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Responsive Styles */}
            <style>{`
                @media (max-width: 900px) {
                    .dining-showcase-grid {
                        grid-template-columns: 1fr !important;
                        gap: 20px !important;
                    }
                    .dining-showcase-grid > div {
                        height: 400px !important;
                    }
                    .dining-showcase-grid h3 {
                        font-size: 1.5rem !important;
                        margin-bottom: 8px !important;
                    }
                    .dining-showcase-grid p {
                        font-size: 0.85rem !important;
                        line-height: 1.5 !important;
                        margin-bottom: 16px !important;
                    }
                    div[style*="padding: 32px"] {
                        padding: 20px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default DiningShowcase;
