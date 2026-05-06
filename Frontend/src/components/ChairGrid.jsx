import React, { useState } from 'react';
import ProductModal from './ProductModal';
import accentChairImg from '../assets/chair/Accent Chair.png';
import armchairImg from '../assets/chair/Armchair.png';
import barrelChairImg from '../assets/chair/BarrelChair.png';
import clubChairImg from '../assets/chair/ClubChair.png';
import rockingChairImg from '../assets/chair/Rocking chair.png';
import slipperChairImg from '../assets/chair/SlipperChair.png';
import chairsHeroImg from '../assets/chair/Chairs.png';
import loungeChairNewImg from '../assets/chair/Lounge Chair.png';
import wingbackChairImg from '../assets/chair/Wingback Chair.png';
import standardDiningChairImg from '../assets/chair/Standard Dining Chair.png';
import diningArmchairImg from '../assets/chair/Dining Armchair.png';
import parsonsChairImg from '../assets/chair/Parsons Chair.png';
import ladderBackChairImg from '../assets/chair/Ladder Back Chair.png';
import slatBackChairImg from '../assets/chair/Slat Back Chair.png';
import windsorChairImg from '../assets/chair/Windsor Chair.png';
import crossBackChairImg from '../assets/chair/Cross Back (X-Back) Chair.png';
import bedroomAccentChairImg from '../assets/chair/Bedroom Accent.png';
import dressingChairImg from '../assets/chair/Dressing Chair.png';
import vanityChairImg from '../assets/chair/Vanity Chair.png';
import chaiseLoungeImg from '../assets/chair/Chaise Lounge.png';
import executiveWoodenChairImg from '../assets/chair/Executive Wooden Chair.png';
import woodenDeskChairImg from '../assets/chair/Wooden Desk Chair.png';
import midCenturyOfficeChairImg from '../assets/chair/Mid-Century Office Chair.png';
import adirondackChairImg from '../assets/chair/Adirondack Chair.png';
import foldingWoodenChairImg from '../assets/chair/Folding Wooden Chair.png';
import gardenArmchairImg from '../assets/chair/Garden Armchair.png';
import teakPatioChairImg from '../assets/chair/Teak Patio Chair.png';
import deckChairImg from '../assets/chair/Deck Chair.png';
import woodenConferenceChairImg from '../assets/chair/wooden confrence chair.png';
import colonialChairImg from '../assets/chair/Colonial Chair.png';
import victorianChairImg from '../assets/chair/Victorian Chair.png';
import frenchProvincialChairImg from '../assets/chair/French Provincial Chair.png';
import carvedRoyalChairImg from '../assets/chair/Carved Royal Chair.png';
import minimalistWoodenChairImg from '../assets/chair/Minimalist Wooden Chair.png';
import scandinavianChairImg from '../assets/chair/Scandinavian Chair.png';
import contemporaryArmchairImg from '../assets/chair/Contemporary Armchair.png';
import floatingFrameChairImg from '../assets/chair/Floating Frame Chair.png';
import woodMetalChairImg from '../assets/chair/Wood & Metal Chair.png';
import rusticFarmhouseChairImg from '../assets/chair/Rustic Farmhouse Chair.png';
import rawEdgeWoodenChairImg from '../assets/chair/Raw Edge Wooden Chair.png';
import loungeChairImg from '../assets/living/Lounge Chairs.jpg';
import diningChairImg from '../assets/dining/DiningChairs.png';
import loungeChairPriceImg from '../assets/living/Lounge Chairs price.jpg';

// New Imports
import chair1Img from '../assets/chair/chair1.jpg';
import chair2Img from '../assets/chair/chair2.jpg';
import chair3Img from '../assets/chair/chair3.jpg';
import chair4Img from '../assets/chair/chair4.jpg';
import chair5Img from '../assets/chair/chair5.jpg';
import chairs6Img from '../assets/chair/chairs6.jpg';
import chair7Img from '../assets/chair/chair7.jpg';
import chair8Img from '../assets/chair/chair8.jpg';
import seatChairImg from '../assets/chair/seat chair.jpg';
import sofaChairImg from '../assets/chair/sofa chair.jpg';
import woodenArmchairsImg from '../assets/chair/wooden armchairs.jpg';
import aestheticArmchairImg from '../assets/chair/Аesthetic interior armchair.jpg';
import stoolsImg from '../assets/chair/stools.jpg';
import stools1Img from '../assets/chair/stools1.jpg';
import stools2Img from '../assets/chair/stools2.jpg';
import fourLegsWhiteImg from '../assets/chair/4legs-whitechair.jpg';
import accentChair1Img from '../assets/chair/Accent chair1.jpg';
import artisansImg from '../assets/chair/Artisans.jpg';
import boteroLoungeImg from '../assets/chair/Botero-Lounge-Chair.jpg';
import chairJpgImg from '../assets/chair/Chair.jpg';
import eleganteChairImg from '../assets/chair/elegante-chair.jpg';
import loungeStudioImg from '../assets/chair/LoungeStudio-chair.jpg';
import mossoArmchairImg from '../assets/chair/Mosso-Armchair.jpg';
import oldChairImg from '../assets/chair/old-chair.jpg';
import oldModelChairImg from '../assets/chair/old-model-chair.jpg';
import perfectChairImg from '../assets/chair/Perfect-chair.jpg';
import sofaChairHyphenImg from '../assets/chair/sofa-chair.jpg';
import styleChairHyphenImg from '../assets/chair/style-chair.jpg';

// Chair type categories
const chairTypes = [
    { id: 1, name: "Living Room Chairs", count: "8 Models", image: armchairImg },
    { id: 2, name: "Dining Chairs", count: "8 Models", image: standardDiningChairImg },
    { id: 3, name: "Bedroom Chairs", count: "4 Models", image: bedroomAccentChairImg },
    { id: 4, name: "Office Chairs", count: "4 Models", image: executiveWoodenChairImg },
    { id: 5, name: "Outdoor Wooden Chairs", count: "5 Models", image: adirondackChairImg },
    { id: 6, name: "Traditional Style", count: "4 Models", image: colonialChairImg },
    { id: 7, name: "Modern Style", count: "4 Models", image: minimalistWoodenChairImg },
    { id: 8, name: "Interactive Stools", count: "3 Models", image: stoolsImg },
];

// Consolidated list of all chairs matching the "sofas and prices show" request
const chairs = [
    // Living Room Chairs
    { id: 1, name: "Armchair", price: "₹25,000", image: armchairImg },
    { id: 2, name: "Accent Chair", price: "₹20,000", image: accentChairImg },
    { id: 3, name: "Club Chair", price: "₹24,000", image: clubChairImg },
    { id: 4, name: "Barrel Chair", price: "₹20,000", image: barrelChairImg },
    { id: 5, name: "Slipper Chair", price: "₹15,000", image: slipperChairImg },
    { id: 6, name: "Rocking Chair", price: "₹28,000", image: rockingChairImg },
    { id: 7, name: "Lounge Chair", price: "₹25,000", image: loungeChairNewImg },
    { id: 8, name: "Wingback Chair", price: "₹20,000", image: wingbackChairImg },

    // Dining Chairs
    { id: 10, name: "Standard Dining Chair", price: "₹8,000", image: standardDiningChairImg },
    { id: 11, name: "Dining Armchair", price: "₹14,000", image: diningArmchairImg },
    { id: 12, name: "Parsons Chair", price: "₹9,500", image: parsonsChairImg },
    { id: 13, name: "Ladder Back Chair", price: "₹7,999", image: ladderBackChairImg },
    { id: 14, name: "Slat Back Chair", price: "₹14,000", image: slatBackChairImg },
    { id: 15, name: "Windsor Chair", price: "₹14,000", image: windsorChairImg },
    { id: 16, name: "Cross Back Chair", price: "₹14,000", image: crossBackChairImg },

    // Bedroom Chairs
    { id: 19, name: "Bedroom Accent Chair", price: "₹15,000", image: bedroomAccentChairImg },
    { id: 20, name: "Dressing Chair", price: "₹11,999", image: dressingChairImg },
    { id: 21, name: "Vanity Chair", price: "₹10,500", image: vanityChairImg },
    { id: 22, name: "Chaise Lounge", price: "₹32,000", image: chaiseLoungeImg },

    // Office Chairs
    { id: 23, name: "Executive Wooden Chair", price: "₹35,000", image: executiveWoodenChairImg },
    { id: 24, name: "Wooden Desk Chair", price: "₹20,000", image: woodenDeskChairImg },
    { id: 25, name: "Mid-Century Office Chair", price: "₹25,000", image: midCenturyOfficeChairImg },
    { id: 26, name: "Wooden Conference Chair", price: "₹16,500", image: woodenConferenceChairImg },

    // Outdoor Wooden Chairs
    { id: 27, name: "Adirondack Chair", price: "₹12,999", image: adirondackChairImg },
    { id: 28, name: "Folding Wooden Chair", price: "₹8,999", image: foldingWoodenChairImg },
    { id: 29, name: "Garden Armchair", price: "₹14,999", image: gardenArmchairImg },
    { id: 30, name: "Teak Patio Chair", price: "₹16,999", image: teakPatioChairImg },
    { id: 31, name: "Deck Chair", price: "₹11,500", image: deckChairImg },

    // Traditional Style
    { id: 32, name: "Colonial Chair", price: "₹19,999", image: colonialChairImg },
    { id: 33, name: "Victorian Chair", price: "₹24,999", image: victorianChairImg },
    { id: 34, name: "French Provincial Chair", price: "₹22,500", image: frenchProvincialChairImg },
    { id: 35, name: "Carved Royal Chair", price: "₹35,999", image: carvedRoyalChairImg },

    // Modern Style
    { id: 36, name: "Minimalist Wooden Chair", price: "₹11,999", image: minimalistWoodenChairImg },
    { id: 37, name: "Scandinavian Chair", price: "₹13,500", image: scandinavianChairImg },
    { id: 38, name: "Contemporary Armchair", price: "₹16,999", image: contemporaryArmchairImg },
    { id: 39, name: "Floating Frame Chair", price: "₹14,500", image: floatingFrameChairImg },

    // Industrial Style
    { id: 40, name: "Wood & Metal Chair", price: "₹13,999", image: woodMetalChairImg },
    { id: 41, name: "Rustic Farmhouse Chair", price: "₹12,500", image: rusticFarmhouseChairImg },
    { id: 42, name: "Raw Edge Wooden Chair", price: "₹15,999", image: rawEdgeWoodenChairImg },

    // New Arrivals
    { id: 43, name: "Classic Blue Armchair", price: "₹15,999", image: chair1Img },
    { id: 44, name: "Modern Teal Chair", price: "₹13,500", image: chair2Img },
    { id: 45, name: "Mustard Velvet Chair", price: "₹14,999", image: chair3Img },
    { id: 46, name: "Cozy Grey Armchair", price: "₹16,500", image: chair4Img },
    { id: 47, name: "Scalloped Back Chair", price: "₹12,999", image: chair5Img },
    { id: 48, name: "Compact Accent Chair", price: "₹10,500", image: chairs6Img },
    { id: 49, name: "Mid-Century Lounge", price: "₹18,999", image: chair7Img },
    { id: 50, name: "Wooden Rocker", price: "₹11,999", image: chair8Img },
    { id: 51, name: "Leather Seat Chair", price: "₹9,500", image: seatChairImg },
    { id: 52, name: "Comfy Sofa Chair", price: "₹17,999", image: sofaChairImg },
    { id: 53, name: "Traditional Armchair", price: "₹19,500", image: woodenArmchairsImg },
    { id: 54, name: "Aesthetic Interior Chair", price: "₹22,999", image: aestheticArmchairImg },

    // Stools
    { id: 55, name: "Premium Ottoman Stool", price: "₹8,500", image: stoolsImg },
    { id: 56, name: "Modern Cube Stool", price: "₹4,999", image: stools1Img },
    { id: 57, name: "Round Pink Stool", price: "₹3,999", image: stools2Img },
];

// Fresh Arrivals
const freshArrivals = [
    {
        id: 201,
        name: "Ivory Tub Chair",
        price: "₹16,999",
        image: fourLegsWhiteImg,
        details: "A refined white bouclé tub chair with elegant teak wood frame. Its curved backrest provides exceptional comfort and style.",
        manufacturing: "Hand-finished solid teak wood frame with premium ivory bouclé upholstery. High-density foam cushioning."
    },
    {
        id: 202,
        name: "Japandi Accent Chair",
        price: "₹21,500",
        image: accentChair1Img,
        details: "A beautiful fusion of Japanese minimalism and Scandinavian design. Walnut-toned curved arms cradle a plush linen seat and rounded backrest.",
        manufacturing: "Solid walnut wood frame with hand-sculpted arms. Upholstered in organic linen-blend fabric."
    },
    {
        id: 203,
        name: "Channel Ottoman Stool",
        price: "₹7,999",
        image: artisansImg,
        details: "A versatile channel-stitched cube ottoman in soft grey. Use it as extra seating, a footrest, or a side table accent.",
        manufacturing: "Solid wood internal frame with channel-stitched fabric cover. Compact design with hidden wooden feet."
    },
    {
        id: 204,
        name: "Botero Velvet Lounge",
        price: "₹24,999",
        image: boteroLoungeImg,
        details: "A rich cognac velvet lounge chair with walnut wood frame. Its sculptural mid-century silhouette makes it a design statement.",
        manufacturing: "Dark walnut hardwood frame with hand-applied finish. Premium velvet upholstery with foam-wrapped cushions."
    },
    {
        id: 205,
        name: "Scallop Shell Chair",
        price: "₹13,500",
        image: chairJpgImg,
        details: "A charming channel-back tub chair with a scalloped shell design in cream fabric. Light oak legs add warmth.",
        manufacturing: "Solid oak tapered legs with reinforced joints. Channel-stitched fabric upholstery with foam padding."
    },
    {
        id: 206,
        name: "Elegante Slipper Chair",
        price: "₹18,500",
        image: eleganteChairImg,
        details: "A sophisticated armless slipper chair with a curved back and walnut legs. The beige bouclé fabric adds an understated luxury to any room.",
        manufacturing: "Walnut-stained tapered legs with a curved plywood backrest. Premium bouclé fabric with high-resilience foam seat."
    },
    {
        id: 207,
        name: "Bouclé Studio Chair",
        price: "₹19,999",
        image: loungeStudioImg,
        details: "An artistic bouclé accent chair with dramatic angular wooden legs. Its cozy wrap-around form creates a perfect reading nook seat.",
        manufacturing: "Solid walnut angled legs for structural stability. Ivory bouclé fabric over a contoured plywood shell."
    },
    {
        id: 208,
        name: "Mosso Curved Armchair",
        price: "₹23,500",
        image: mossoArmchairImg,
        details: "Graceful organic curves define this walnut-framed lounge chair. The linen seat sits in a sculptural wood cradle for supreme comfort.",
        manufacturing: "Steam-bent solid walnut arms with hand-sanded finish. Natural linen upholstery with removable cushions."
    },
    {
        id: 209,
        name: "Heritage Teak Armchair",
        price: "₹15,999",
        image: oldChairImg,
        details: "A classic teak armchair with clean geometric lines and linen-blend cushioning. Inspired by mid-century Indian craftsmanship.",
        manufacturing: "100% solid teak wood frame with mortise-and-tenon joinery. Natural linen-blend cushion with removable cover."
    },
    {
        id: 210,
        name: "Slatted Wingback Chair",
        price: "₹28,999",
        image: oldModelChairImg,
        details: "A majestic slatted wingback chair in warm teak with sage green cushions. The soaring fan-shaped backrest is an artisan masterpiece.",
        manufacturing: "Hand-carved solid teak wood with individually fitted slats. Sage linen cushions with dense foam core."
    },
    {
        id: 211,
        name: "Perfect Bouclé Chair",
        price: "₹17,500",
        image: perfectChairImg,
        details: "A cozy rounded tub chair in white bouclé with walnut-toned legs. The perfect chair for a warm and inviting corner.",
        manufacturing: "Solid walnut cross-leg base. White bouclé fabric over a contoured foam-padded shell."
    },
    {
        id: 212,
        name: "Luxe Bouclé Armchair",
        price: "₹32,999",
        image: sofaChairHyphenImg,
        details: "An oversized luxury armchair with curved walnut wood arms flowing into the structure. Plush bouclé fabric invites you to sink in.",
        manufacturing: "Sculpted solid walnut wood armrests and legs. Premium bouclé upholstery with multi-layer foam cushioning."
    },
    {
        id: 213,
        name: "Sculptural Swivel Chair",
        price: "₹26,500",
        image: styleChairHyphenImg,
        details: "An extraordinary sculptural swivel chair with flowing walnut wood arms and a white leather seat. A true collector's piece.",
        manufacturing: "Hand-sculpted walnut wood with swivel mechanism. Premium white leather seat pad with high-density foam."
    }
];

const ChairGrid = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    return (
        <section className="chair-section container" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
            {/* Chair Types Section */}
            <div className="chair-types-section" style={{
                textAlign: 'center',
                marginBottom: '60px',
                backgroundColor: '#FAF9F6',
                padding: '60px 40px',
                borderRadius: '0'
            }}>
                <h1 style={{
                    fontSize: '42px',
                    color: 'var(--color-primary)',
                    marginBottom: '16px',
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: '600'
                }}>
                    Wooden Chair Types
                </h1>
                <p style={{
                    fontSize: '16px',
                    color: '#666',
                    maxWidth: '900px',
                    margin: '0 auto 60px',
                    lineHeight: '1.6'
                }}>
                    Explore our complete collection of handcrafted wooden chairs across various categories
                </p>

                <div className="chair-types-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '30px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {chairTypes.map((type) => (
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
                                aspectRatio: '4/3',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                margin: '0 auto 16px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                                backgroundColor: '#fff',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'}
                                onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'}
                            >
                                <img
                                    src={type.image}
                                    alt={type.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        padding: '15px',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                />
                            </div>
                            <h3 style={{
                                fontSize: '16px',
                                fontWeight: '600',
                                color: 'var(--color-primary)',
                                marginBottom: '4px',
                                fontFamily: "'Playfair Display', serif"
                            }}>
                                {type.name}
                            </h3>
                            <p style={{
                                fontSize: '13px',
                                color: '#888',
                                margin: 0
                            }}>
                                {type.count}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Exclusive Chair Collection - Flattened Grid */}
            <h2 className="chair-collection-title" style={{
                textAlign: 'center',
                fontSize: '32px',
                color: 'var(--color-primary)',
                marginBottom: '48px',
                fontFamily: "'Playfair Display', serif",
                marginTop: '80px'
            }}>
                Exclusive Chair Collection
            </h2>

            <div className="chair-products-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '32px'
            }}>
                {chairs.map((chair) => (
                    <div key={chair.id} style={{
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        transition: 'transform 0.3s ease',
                        cursor: 'pointer'
                    }}
                        onClick={() => openModal(chair)}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{ aspectRatio: '1/1', overflow: 'hidden', backgroundColor: '#f9f9f9' }}>
                            <img
                                src={chair.image}
                                alt={chair.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease',
                                    filter: 'none'
                                }}
                            />
                        </div>
                        <div style={{ padding: '20px' }}>
                            <h3 style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                marginBottom: '8px',
                                color: '#333'
                            }}>{chair.name}</h3>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '12px'
                            }}>
                                <span style={{
                                    fontSize: '16px',
                                    color: '#757575',
                                    fontWeight: '500'
                                }}>{chair.price}</span>
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
                                    openModal(chair);
                                }}
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Fresh Arrivals Section */}
            <h2 className="chair-collection-title" style={{
                textAlign: 'center',
                fontSize: '32px',
                color: 'var(--color-primary)',
                marginBottom: '48px',
                marginTop: '100px',
                fontFamily: "'Playfair Display', serif"
            }}>
                Fresh Arrivals
            </h2>

            <div className="chair-products-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '32px'
            }}>
                {freshArrivals.map((chair) => (
                    <div key={chair.id} style={{
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        transition: 'transform 0.3s ease',
                        cursor: 'pointer'
                    }}
                        onClick={() => openModal(chair)}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{ aspectRatio: '1/1', overflow: 'hidden', backgroundColor: '#f9f9f9' }}>
                            <img
                                src={chair.image}
                                alt={chair.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease',
                                    filter: 'none'
                                }}
                            />
                        </div>
                        <div style={{ padding: '20px' }}>
                            <h3 style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                marginBottom: '8px',
                                color: '#333'
                            }}>{chair.name}</h3>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '12px'
                            }}>
                                <span style={{
                                    fontSize: '16px',
                                    color: '#757575',
                                    fontWeight: '500'
                                }}>{chair.price}</span>
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
                                    openModal(chair);
                                }}
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <ProductModal
                isOpen={!!selectedProduct}
                onClose={closeModal}
                product={selectedProduct}
            />

            {/* Mobile Responsive */}
            <style>{`
                @media (max-width: 900px) {
                    .chair-types-grid {
                        grid-template-columns: repeat(3, 1fr) !important;
                        gap: 20px !important;
                    }
                    .chair-products-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 20px !important;
                    }
                }
                @media (max-width: 768px) {
                    .chair-section {
                        padding-top: 20px !important;
                        padding-bottom: 40px !important;
                    }
                    .chair-types-section {
                        padding: 30px 16px !important;
                        margin-bottom: 30px !important;
                    }
                    .chair-types-section h1 {
                        font-size: 26px !important;
                        margin-bottom: 10px !important;
                    }
                    .chair-types-section > p {
                        font-size: 13px !important;
                        margin-bottom: 30px !important;
                    }
                    .chair-types-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 16px !important;
                    }
                    .chair-types-grid img {
                        padding: 8px !important;
                    }
                    .chair-types-grid h3 {
                        font-size: 13px !important;
                    }
                    .chair-types-grid p {
                        font-size: 11px !important;
                    }
                    .chair-collection-title {
                        font-size: 24px !important;
                        margin-top: 40px !important;
                        margin-bottom: 24px !important;
                    }
                    .chair-products-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 12px !important;
                    }
                    .chair-products-grid > div > div:first-child {
                        aspect-ratio: 1/1 !important;
                    }
                    .chair-products-grid > div > div:last-child {
                        padding: 12px !important;
                    }
                    .chair-products-grid h3 {
                        font-size: 13px !important;
                        margin-bottom: 4px !important;
                    }
                    .chair-products-grid span {
                        font-size: 13px !important;
                    }
                    .chair-products-grid button {
                        padding: 8px 0 !important;
                        font-size: 12px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default ChairGrid;
