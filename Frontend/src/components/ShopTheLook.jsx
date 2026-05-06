import React, { useState, useRef } from 'react';
import ProductModal from './ProductModal';
import homepart1 from '../assets/home/Homepart1.png';
import homepart2 from '../assets/home/Homepart2.png';
import homepart3 from '../assets/home/Homepart3.png';
import homepart4 from '../assets/home/Homepart4.png';
import homepart5 from '../assets/home/Homepart5.jpg';

import Sofa from '../assets/home/Sofa.png';
import centreTable from '../assets/home/centre table.png';
import sideTable from '../assets/home/Sidetable.png';
import ballSofa from '../assets/home/ballsofa.png';
import greenSofa from '../assets/home/greensofa.png';
import whiteSofa from '../assets/home/white sofa.png';
import marronSofa from '../assets/home/marronsofa.png';
import mustardSofa from '../assets/home/mustardsofa.png';
import orangeChair from '../assets/home/orange chair.png';
import whiteSmallSofa from '../assets/home/whitesmallsofa.png';
import marbleTable from '../assets/home/marbletable.png';
import bigTable from '../assets/home/bigtable.png';
import frontTable from '../assets/home/fronttable.png';
import smallTable from '../assets/home/smalltable.png';
import sideSofaTable from '../assets/home/sidesofatable.png';
import woodCoffeeTable from '../assets/home/Woodcoffetable.png';
import nestCoffeeTable from '../assets/living/coffee-table.png';

const ShopTheLook = () => {
    const [activeHotspot, setActiveHotspot] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const leaveTimeout = useRef(null);

    const openModal = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    // Room images with hotspots for each furniture item
    const rooms = [
        {
            id: 1,
            image: homepart1, // Navy Blue Sofa
            hotspots: [
                {
                    id: 'h1-1',
                    x: 26,
                    y: 45,
                    product: { name: 'Ezra 3 Seater Sofa in Sapphire Colour', price: '₹74,999', originalPrice: '₹1,79,999', image: Sofa }
                },
                {
                    id: 'h1-2',
                    x: 45,
                    y: 65,
                    product: { name: 'Wooden Coffee Table', price: '₹18,999', originalPrice: '₹35,999', image: bigTable }
                },
                {
                    id: 'h1-3',
                    x: 78,
                    y: 65,
                    product: { name: 'Side Table', price: '₹12,999', originalPrice: '₹22,999', image: smallTable }
                }
            ]
        },
        {
            id: 2,
            image: homepart5, // Teal Sofa (Wide)
            hotspots: [
                {
                    id: 'h2-2',
                    x: 36,
                    y: 28,
                    product: { name: 'Teal Curved Sofa', price: '₹52,999', originalPrice: '₹99,999', image: greenSofa }
                },
                {
                    id: 'h2-3',
                    x: 58,
                    y: 18,
                    product: { name: 'Console Table', price: '₹28,999', originalPrice: '₹45,999', image: sideTable }
                },
                {
                    id: 'h2-4',
                    x: 52,
                    y: 68,
                    product: { name: 'Gold Finish Coffee Table', price: '₹24,999', originalPrice: '₹49,999', image: centreTable }
                },
                {
                    id: 'h2-5',
                    x: 88,
                    y: 38,
                    product: { name: 'Peach Accent Armchair', price: '₹28,999', originalPrice: '₹54,999', image: orangeChair }
                }
            ]
        },
        {
            id: 3,
            image: homepart2, // Cream Sofa
            hotspots: [
                {
                    id: 'h3-1',
                    x: 28,
                    y: 42,
                    product: { name: 'Cream Channel Tufted Sofa', price: '₹39,999', originalPrice: '₹74,999', image: whiteSofa }
                },
                {
                    id: 'h3-2',
                    x: 50,
                    y: 60,
                    product: { name: 'Marble Coffee Table', price: '₹22,999', originalPrice: '₹44,999', image: marbleTable }
                },
                {
                    id: 'h3-3',
                    x: 72,
                    y: 45,
                    product: { name: 'Gold Side Table', price: '₹14,999', originalPrice: '₹26,999', image: sideSofaTable }
                }
            ]
        },
        {
            id: 4,
            image: homepart3, // Green Chair
            hotspots: [
                {
                    id: 'h4-1',
                    x: 35,
                    y: 60,
                    product: { name: 'Olive Green Corduroy Armchair', price: '₹26,999', originalPrice: '₹52,999', image: mustardSofa }
                },
                {
                    id: 'h4-2',
                    x: 15,
                    y: 72,
                    product: { name: 'Modern Gold Coffee Table', price: '₹14,999', originalPrice: '₹29,999', image: frontTable }
                },
                {
                    id: 'h4-3',
                    x: 84,
                    y: 58,
                    product: { name: 'Patterned Accent Bean Chair', price: '₹19,999', originalPrice: '₹38,999', image: ballSofa }
                }
            ]
        },
        {
            id: 5,
            image: homepart4, // Rust Sofa
            hotspots: [
                {
                    id: 'h5-1',
                    x: 18,
                    y: 72,
                    product: { name: 'White Boucle Chair', price: '₹24,999', originalPrice: '₹48,999', image: whiteSmallSofa }
                },
                {
                    id: 'h5-2',
                    x: 88,
                    y: 60,
                    product: { name: 'Rust Fabric Sofa', price: '₹42,999', originalPrice: '₹82,999', image: marronSofa }
                },
                {
                    id: 'h5-3',
                    x: 65,
                    y: 75,
                    product: { name: 'Nesting Coffee Table', price: '₹12,999', originalPrice: '₹24,999', image: nestCoffeeTable }
                },
                {
                    id: 'h5-4',
                    x: 90,
                    y: 82,
                    product: { name: 'Side Table', price: '₹10,999', originalPrice: '₹19,999', image: woodCoffeeTable }
                }
            ]
        }
    ];

    const handleHotspotEnter = (hotspotId) => {
        if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
        setActiveHotspot(hotspotId);
    };

    const handleHotspotLeave = () => {
        leaveTimeout.current = setTimeout(() => {
            setActiveHotspot(null);
        }, 100); // 100ms grace period to move mouse from dot to popup
    };

    return (
        <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '2.5rem',
                        color: '#333',
                        marginBottom: '16px',
                        fontWeight: '600'
                    }}>
                        Shop The Look
                    </h2>
                    <p style={{
                        color: '#888',
                        fontSize: '1.1rem',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Explore our curated room setups. Click on the markers to discover each piece.
                    </p>
                </div>

                {/* 3-Column Grid Layout */}
                <div className="shop-the-look-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '2px', // Minimal gap for the seamless grid look
                }}>
                    {/* 1. Top Left - Homepart1 (Navy Blue Sofa) - Spans 1 Column */}
                    <div style={{
                        gridColumn: 'span 1',
                        position: 'relative',
                        // overflow: 'hidden',
                        height: '300px' // Landscape height
                    }}>
                        <img
                            src={rooms[0].image}
                            alt="Living Room 1"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                        {rooms[0].hotspots.map((hotspot) => (
                            <HotspotMarker
                                key={hotspot.id}
                                hotspot={hotspot}
                                isActive={activeHotspot === hotspot.id}
                                onMouseEnter={() => handleHotspotEnter(hotspot.id)}
                                onMouseLeave={handleHotspotLeave}
                                onViewDetails={() => openModal(hotspot.product)}
                            />
                        ))}
                    </div>

                    {/* 2. Top Right - Homepart5 (Teal Sofa) - Spans 2 Columns */}
                    <div style={{
                        gridColumn: 'span 2',
                        position: 'relative',
                        // overflow: 'hidden',
                        height: '300px' // Landscape height
                    }}>
                        <img
                            src={rooms[1].image}
                            alt="Living Room 2"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                        {rooms[1].hotspots.map((hotspot) => (
                            <HotspotMarker
                                key={hotspot.id}
                                hotspot={hotspot}
                                isActive={activeHotspot === hotspot.id}
                                onMouseEnter={() => handleHotspotEnter(hotspot.id)}
                                onMouseLeave={handleHotspotLeave}
                                onViewDetails={() => openModal(hotspot.product)}
                            />
                        ))}
                    </div>

                    {/* 3. Bottom Left - Homepart2 (Cream Sofa) - Spans 1 Column */}
                    <div style={{
                        gridColumn: 'span 1',
                        position: 'relative',
                        // overflow: 'hidden',
                        height: '300px' // Landscape height
                    }}>
                        <img
                            src={rooms[2].image}
                            alt="Living Room 3"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                        {rooms[2].hotspots.map((hotspot) => (
                            <HotspotMarker
                                key={hotspot.id}
                                hotspot={hotspot}
                                isActive={activeHotspot === hotspot.id}
                                onMouseEnter={() => handleHotspotEnter(hotspot.id)}
                                onMouseLeave={handleHotspotLeave}
                                onViewDetails={() => openModal(hotspot.product)}
                            />
                        ))}
                    </div>

                    {/* 4. Bottom Center - Homepart3 (Green Chair) - Spans 1 Column */}
                    <div style={{
                        gridColumn: 'span 1',
                        position: 'relative',
                        // overflow: 'hidden',
                        height: '300px' // Landscape height
                    }}>
                        <img
                            src={rooms[3].image}
                            alt="Living Room 4"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                        {rooms[3].hotspots.map((hotspot) => (
                            <HotspotMarker
                                key={hotspot.id}
                                hotspot={hotspot}
                                isActive={activeHotspot === hotspot.id}
                                onMouseEnter={() => handleHotspotEnter(hotspot.id)}
                                onMouseLeave={handleHotspotLeave}
                                onViewDetails={() => openModal(hotspot.product)}
                            />
                        ))}
                    </div>

                    {/* 5. Bottom Right - Homepart4 (Rust Sofa) - Spans 1 Column */}
                    <div style={{
                        gridColumn: 'span 1',
                        position: 'relative',
                        // overflow: 'hidden',
                        height: '300px' // Landscape height
                    }}>
                        <img
                            src={rooms[4].image}
                            alt="Living Room 5"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                        {rooms[4].hotspots.map((hotspot) => (
                            <HotspotMarker
                                key={hotspot.id}
                                hotspot={hotspot}
                                isActive={activeHotspot === hotspot.id}
                                onMouseEnter={() => handleHotspotEnter(hotspot.id)}
                                onMouseLeave={handleHotspotLeave}
                                onViewDetails={() => openModal(hotspot.product)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <ProductModal
                isOpen={!!selectedProduct}
                onClose={closeModal}
                product={selectedProduct}
            />

            {/* Styles */}
            <style>{`
                @keyframes hotspotPulse {
                    0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.6); }
                    70% { box-shadow: 0 0 0 12px rgba(255, 255, 255, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
                }
                @keyframes popupFadeIn {
                    from { opacity: 0; transform: translateY(10px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }

                @media (max-width: 992px) {
                    .shop-the-look-grid {
                        grid-template-columns: 1fr 1fr !important;
                    }
                    .shop-the-look-grid > div:nth-child(2) {
                        grid-column: span 2 !important;
                    }
                }

                @media (max-width: 768px) {
                    .shop-the-look-grid {
                        grid-template-columns: 1fr !important;
                        gap: 16px !important;
                    }
                    .shop-the-look-grid > div, 
                    .shop-the-look-grid > div:nth-child(n) {
                        grid-column: span 1 !important;
                        height: 300px !important;
                    }
                    .hotspot-trigger {
                        width: 18px !important;
                        height: 18px !important;
                    }
                    .hotspot-trigger div {
                        width: 4px !important;
                        height: 4px !important;
                    }
                    .product-popup-card {
                        left: 50% !important;
                        right: auto !important;
                        top: 20px !important;
                        bottom: auto !important;
                        transform: translateX(-50%) !important;
                        width: 180px !important;
                        border-radius: 12px !important;
                    }
                    .product-popup-card.popup-is-on-top {
                        top: auto !important;
                        bottom: 20px !important;
                    }
                    .popup-image-container {
                        height: 120px !important;
                    }
                    .popup-info-container {
                        padding: 10px !important;
                    }
                    .popup-title {
                        font-size: 11px !important;
                        margin-bottom: 4px !important;
                    }
                    .popup-info-container span:first-child {
                        font-size: 14px !important;
                    }
                    h2 {
                        font-size: 2rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

const HotspotMarker = ({ hotspot, isActive, onMouseEnter, onMouseLeave, onViewDetails }) => {
    // Determine popup position - if hotspot is on the right side, show popup on left
    const popupOnLeft = hotspot.x > 60;
    const popupOnTop = hotspot.y > 50; // Changed to 50 for more balanced switching

    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={(e) => {
                e.stopPropagation();
                if (isActive) onMouseLeave();
                else onMouseEnter();
            }}
            style={{
                position: 'absolute',
                left: `${hotspot.x}%`,
                top: `${hotspot.y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: isActive ? 100 : 10,
            }}
        >
            {/* Marker Button */}
            <button
                className="hotspot-trigger"
                style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    border: '2px solid rgba(255, 255, 255, 0.9)',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'hotspotPulse 1.2s infinite',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(4px)',
                    position: 'relative'
                }}
            >
                <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#fff'
                }} />
            </button>

            {/* Product Popup Card */}
            {isActive && (
                <div
                    className={`product-popup-card ${popupOnTop ? 'popup-is-on-top' : ''}`}
                    style={{
                        position: 'absolute',
                        [popupOnLeft ? 'right' : 'left']: '30px',
                        [popupOnTop ? 'bottom' : 'top']: '-10px',
                        width: '260px',
                        backgroundColor: '#fff',
                        borderRadius: '16px',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
                        overflow: 'hidden',
                        zIndex: 99,
                        animation: 'popupFadeIn 0.3s ease-out'
                    }}
                >
                    {/* Product Image */}
                    <div style={{
                        width: '100%',
                        height: '180px',
                        backgroundColor: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '10px',
                        overflow: 'hidden'
                    }} className="popup-image-container">
                        <img
                            src={hotspot.product.image}
                            alt={hotspot.product.name}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                    </div>

                    {/* Product Info */}
                    <div style={{ padding: '12px' }} className="popup-info-container">
                        <h4 style={{
                            fontSize: '13px',
                            fontWeight: '600',
                            color: '#333',
                            marginBottom: '6px',
                            lineHeight: '1.3',
                            fontFamily: "'Playfair Display', serif",
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        }} className="popup-title">
                            {hotspot.product.name}
                        </h4>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                            <span style={{
                                fontSize: '16px',
                                fontWeight: '700',
                                color: '#333'
                            }}>
                                {hotspot.product.price}
                            </span>
                            <span style={{
                                fontSize: '12px',
                                color: '#999',
                                textDecoration: 'line-through'
                            }}>
                                {hotspot.product.originalPrice}
                            </span>
                        </div>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onViewDetails();
                            }}
                            style={{
                                width: '100%',
                                padding: '8px 0',
                                backgroundColor: '#E87E04',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '12px',
                                fontWeight: '700',
                                letterSpacing: '0.5px',
                                cursor: 'pointer',
                                textTransform: 'uppercase'
                            }}
                        >
                            View Details
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShopTheLook;
