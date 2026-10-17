import React, { useState } from 'react';
import ProductModal from './ProductModal';
import bedImg from '../assets/bedroom/bed.png';
import boxStorageBedImg from '../assets/bedroom/Box Storage Bed.jpg';
import classicSolidWoodenPanelBedImg from '../assets/bedroom/Classic Solid Wooden Panel Bed.jpg';
import classicWoodenBedImg from '../assets/bedroom/Classic Wooden Bed.jpg';
import compactApartmentBedImg from '../assets/bedroom/Compact Apartment Bed.jpg';
import customMadeBedImg from '../assets/bedroom/Custom-Made Bed.jpg';
import doubleBedImg from '../assets/bedroom/Double Bed.jpg';
import guestBedImg from '../assets/bedroom/Guest Bed.jpg';
import hydraulicStorageBedImg from '../assets/bedroom/Hydraulic Storage Bed.jpg';
import kingSizeBedImg from '../assets/bedroom/King Size Bed.jpg';
import luxuryRoundUpholsteredCanopyBedImg from '../assets/bedroom/Luxury Round Upholstered Canopy Bed.jpg';
import luxuryUpholsteredBedImg from '../assets/bedroom/Luxury Upholstered Bed.jpg';
import midCenturyModernBedImg from '../assets/bedroom/Mid-Century Modern Bed.jpg';
import minimalistGreyBedImg from '../assets/bedroom/Minimalist Grey Bed.jpg';
import modernPlatformBedImg from '../assets/bedroom/Modern Platform Bed.jpg';
import queenSizeBedImg from '../assets/bedroom/Queen Size Bed.jpg';
import royalCanopyFourPosterBedImg from '../assets/bedroom/Royal Canopy Four-Poster Bed.jpg';
import royalClassicUpholsteredWoodenBedImg from '../assets/bedroom/Royal Classic Upholstered Wooden Bed.jpg';
import scandinavianStyleBedImg from '../assets/bedroom/Scandinavian Style Bed.jpg';
import singleBedImg from '../assets/bedroom/Single Bed.jpg';
import storageBedImg from '../assets/bedroom/Storage Bed.jpg';
import velvetDesignerBedImg from '../assets/bedroom/Velvet Designer Bed.jpg';
import woodenFrameBedImg from '../assets/bedroom/Wooden Frame Bed.jpg';
import { bedTypes } from '../data/bedTypes';

const bedrooms = [
    { id: 1, name: "Modern Queen Bed", price: "₹78,000", image: bedImg, filter: "none" },
    { id: 2, name: "Box Storage Bed", price: "₹60,000", image: boxStorageBedImg, filter: "none" },
    { id: 3, name: "Classic Solid Wooden Panel Bed", price: "₹60,000", image: classicSolidWoodenPanelBedImg, filter: "none" },
    { id: 4, name: "Classic Wooden Bed", price: "₹65,000", image: classicWoodenBedImg, filter: "none" },
    { id: 5, name: "Compact Apartment Bed", price: "₹45,000", image: compactApartmentBedImg, filter: "none" },
    { id: 6, name: "Custom-Made Bed", price: "₹65,000", image: customMadeBedImg, filter: "none" },
    { id: 7, name: "Double Bed", price: "₹58,000", image: doubleBedImg, filter: "none" },
    { id: 8, name: "Guest Bed", price: "₹60,000", image: guestBedImg, filter: "none" },
    { id: 9, name: "Hydraulic Storage Bed", price: "₹68,000", image: hydraulicStorageBedImg, filter: "none" },
    { id: 10, name: "King Size Bed", price: "₹60,000", image: kingSizeBedImg, filter: "none" },
    { id: 11, name: "Luxury Round Upholstered Canopy Bed", price: "₹1,65,000", image: luxuryRoundUpholsteredCanopyBedImg, filter: "none" },
    { id: 12, name: "Luxury Upholstered Bed", price: "₹65,000", image: luxuryUpholsteredBedImg, filter: "none" },
    { id: 13, name: "Mid-Century Modern Bed", price: "₹60,000", image: midCenturyModernBedImg, filter: "none" },
    { id: 14, name: "Minimalist Grey Bed", price: "₹60,000", image: minimalistGreyBedImg, filter: "none" },
    { id: 15, name: "Modern Platform Bed", price: "₹31,000", image: modernPlatformBedImg, filter: "none" },
    { id: 16, name: "Queen Size Bed", price: "₹27,500", image: queenSizeBedImg, filter: "none" },
    { id: 17, name: "Royal Canopy Four-Poster Bed", price: "₹1,45,000", image: royalCanopyFourPosterBedImg, filter: "none" },
    { id: 18, name: "Royal Classic Upholstered Wooden Bed", price: "₹1,35,000", image: royalClassicUpholsteredWoodenBedImg, filter: "none" },
    { id: 19, name: "Scandinavian Style Bed", price: "₹40,000", image: scandinavianStyleBedImg, filter: "none" },
    { id: 20, name: "Single Bed", price: "₹25,000", image: singleBedImg, filter: "none" },
    { id: 21, name: "Storage Bed", price: "₹65,000", image: storageBedImg, filter: "none" },
    { id: 22, name: "Velvet Designer Bed", price: "₹75,000", image: velvetDesignerBedImg, filter: "none" },
    { id: 23, name: "Wooden Frame Bed", price: "₹60,000", image: woodenFrameBedImg, filter: "none" },
];

const BedroomGrid = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    return (
        <section className="container" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
            {/* Bed Types Section */}
            <div className="bed-types-section" style={{
                textAlign: 'center',
                marginBottom: '60px',
                backgroundColor: '#FAF9F6',
                padding: '60px 20px',
                borderRadius: '0'
            }}>
                <h1 style={{
                    fontSize: 'clamp(28px, 5vw, 42px)',
                    color: 'var(--color-primary)',
                    marginBottom: '16px',
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: '600'
                }}>
                    Exclusive Bed Types
                </h1>
                <p style={{
                    fontSize: '16px',
                    color: '#666',
                    maxWidth: '900px',
                    margin: '0 auto 40px',
                    lineHeight: '1.6'
                }}>
                    Explore our complete collection of handcrafted beds designed for comfort and style
                </p>

                <div className="bed-types-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    gap: '20px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {bedTypes.map((type) => (
                        <div key={type.id} style={{
                            textAlign: 'center',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                width: '100%',
                                aspectRatio: '1/1',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                margin: '0 auto 12px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                                backgroundColor: '#fff',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'}
                                onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'}
                            >
                                <img
                                    src={type.image}
                                    alt={type.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        padding: '10px',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                />
                            </div>
                            <h3 style={{
                                fontSize: '14px',
                                fontWeight: '600',
                                color: 'var(--color-primary)',
                                marginBottom: '4px',
                                fontFamily: "'Playfair Display', serif"
                            }}>
                                {type.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

            <h2 style={{
                textAlign: 'center',
                fontSize: 'clamp(24px, 4vw, 32px)',
                color: 'var(--color-primary)',
                marginBottom: '32px',
                fontFamily: "'Playfair Display', serif",
                marginTop: '40px'
            }}>
                Our Bedroom Collection
            </h2>

            <div className="bedroom-items-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '32px'
            }}>
                {bedrooms.map((bed) => (
                    <div key={bed.id} style={{
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        transition: 'transform 0.3s ease',
                        cursor: 'pointer'
                    }}
                        onClick={() => openModal(bed)}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{ aspectRatio: '1/1', overflow: 'hidden', backgroundColor: '#f9f9f9' }}>
                            <img
                                src={bed.image}
                                alt={bed.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease',
                                    filter: bed.filter || 'none'
                                }}
                            />
                        </div>
                        <div style={{ padding: '20px' }} className="bedroom-card-content">
                            <h3 style={{
                                fontSize: '16px',
                                fontWeight: '600',
                                marginBottom: '8px',
                                color: '#333'
                            }}>{bed.name}</h3>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '12px'
                            }}>
                                <span style={{
                                    fontSize: '15px',
                                    color: '#757575',
                                    fontWeight: '500'
                                }}>{bed.price}</span>
                            </div>
                            <button style={{
                                width: '100%',
                                padding: '10px 0',
                                backgroundColor: 'transparent',
                                border: '1px solid var(--color-primary)',
                                borderRadius: '6px',
                                color: 'var(--color-primary)',
                                fontWeight: '500',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                                    e.currentTarget.style.color = 'white';
                                    e.stopPropagation();
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = 'var(--color-primary)';
                                    e.stopPropagation();
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    openModal(bed);
                                }}
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .bed-types-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 16px !important;
                    }
                    .bedroom-items-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 16px !important;
                    }
                    .bedroom-card-content {
                        padding: 12px !important;
                    }
                    .bedroom-card-content h3 {
                        font-size: 14px !important;
                        margin-bottom: 4px !important;
                    }
                    .bedroom-card-content span {
                        font-size: 13px !important;
                    }
                    .bedroom-card-content button {
                        padding: 8px 0 !important;
                        font-size: 12px !important;
                    }
                }
            `}</style>

            <ProductModal
                isOpen={!!selectedProduct}
                onClose={closeModal}
                product={selectedProduct}
            />
        </section>
    );
};

export default BedroomGrid;
