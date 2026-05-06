import React, { useState, useRef } from 'react';
import bookshelfImg from '../assets/storage/Storage_Bookself.png';
import tvUnitsImg from '../assets/storage/Storage_tvunits.png';
import cabinetsSideboardsImg from '../assets/storage/Storage_bigCabinets.png';

// Placeholder for images - you can add actual images later
const storageShowcases = [
    {
        id: 1,
        title: "Book Shelf",
        description: "Curate your literary collection with exquisitely crafted bookshelves that blend timeless elegance with functional design, transforming your space into a sophisticated sanctuary.",
        fullDescription: "Curate your literary collection with exquisitely crafted bookshelves that blend timeless elegance with functional design, transforming your space into a sophisticated sanctuary. Our collection features a wide range of styles, from open-concept modern shelving to classic glass-fronted cases, all designed to protect and display your treasured books and artifacts. Built with premium wood and durable finishes, these bookshelves are not just storage solutions but statement pieces that elevate the ambiance of any room, inviting you to lose yourself in the world of literature.",
        image: bookshelfImg
    },
    {
        id: 2,
        title: "Tv Units",
        description: "Elevate your entertainment experience with premium TV units that seamlessly integrate cutting-edge functionality, refined aesthetics, and intelligent storage solutions.",
        fullDescription: "Elevate your entertainment experience with premium TV units that seamlessly integrate cutting-edge functionality, refined aesthetics, and intelligent storage solutions. Whether you're looking for a sleek, minimalist wall-mounted unit or a robust, multi-compartment console, our designs prioritize cable management and ample space for your media devices. Crafted to complement modern living spaces, these units serve as the perfect focal point for your entertainment area, combining practicality with high-end design.",
        image: tvUnitsImg
    },
    {
        id: 3,
        title: "Cabinets & Sideboards",
        description: "Discover the art of refined living with our handcrafted cabinets and sideboards, where exceptional craftsmanship meets versatile elegance to enhance every corner of your home.",
        fullDescription: "Discover the art of refined living with our handcrafted cabinets and sideboards, where exceptional craftsmanship meets versatile elegance to enhance every corner of your home. Perfect for your dining room, hallway, or living area, these pieces offer generous storage for dinnerware, linens, and keepsakes while acting as stunning visual anchors. With intricate detailing, rich textures, and superior construction, our cabinets and sideboards are heirlooms in the making, bringing a sense of organized luxury to your everyday life.",
        image: cabinetsSideboardsImg
    }
];

const StorageShowcase = () => {
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
            <div className="storage-showcase-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px'
            }}>
                {storageShowcases.map((showcase) => (
                    <div key={showcase.id} style={{
                        position: 'relative',
                        height: '650px',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        cursor: 'pointer',
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
                                : 'linear-gradient(135deg, #8B7355 0%, #6B5644 100%)',
                            zIndex: 0
                        }}></div>

                        {/* Dark Gradient Overlay */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)',
                            zIndex: 1
                        }}></div>

                        {/* Content */}
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: '32px',
                            zIndex: 2,
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
                                opacity: 0.95
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
                    .storage-showcase-grid {
                        grid-template-columns: 1fr !important;
                        gap: 20px !important;
                    }
                    .storage-showcase-grid > div {
                        height: 400px !important;
                    }
                    .storage-showcase-grid h3 {
                        font-size: 1.5rem !important;
                        margin-bottom: 8px !important;
                    }
                    .storage-showcase-grid p {
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

export default StorageShowcase;
