import React, { useState } from 'react';
import ProductModal from './ProductModal';
import sofaSetsImg from '../assets/living/Sofa Sets.jpg';
import coffeeTablesImg from '../assets/living/Coffee Tables.jpg';
import tvUnitsImg from '../assets/living/TV Units.jpg';
import wallShelvesImg from '../assets/living/Wall Shelves.jpg';
import bookshelvesImg from '../assets/living/Bookshelves.jpg';
import fabricSofasImg from "../assets/living/Fabric Sofas'.jpg";
import loungeChairsImg from '../assets/living/Lounge Chairs.jpg';
import nestOfTablesImg from '../assets/living/Nest of Tables.jpg';
import shoesRackImg from '../assets/living/Shoe Rack.jpg';
import reclinersImg from '../assets/living/Recliners.jpg';
import sideEndTablesImg from '../assets/living/Side & End Tables.jpg';
import benchesImg from '../assets/living/Benches.jpg';

// Budget Friendly Images
import coffeeTablesPriceImg from '../assets/living/Coffee Tables price.jpg';
import tvUnitsPriceImg from '../assets/living/TV Units price.jpg';
import loungeChairsPriceImg from '../assets/living/Lounge Chairs price.jpg';
import cabinetsPriceImg from "../assets/living/Cabinets & Sideboards price.jpg";
import bookshelvesPriceImg from '../assets/living/Bookshelves price.jpg';
import shoeRacksPriceImg from '../assets/living/Shoe Racks price.jpg';
import sideEndTablesPriceImg from '../assets/living/Side & End Tables price.jpg';
import benchesPriceImg from '../assets/living/Benches prices.jpg';

import centerTableImg from '../assets/living/Centertable.png';
import coffeeTableNewImg from '../assets/living/Coffeetable.png';
import consoleTablesImg from '../assets/living/Consoletables.png';
import cTableImg from '../assets/living/C-table.png';
import endTablesImg from '../assets/living/Endtables.png';
import nestOfTablesNewImg from '../assets/living/NestofTables.png';
import sideTablesImg from '../assets/living/Sidetables.png';
import bookshelvesNewImg from '../assets/living/Bookshelves.png';
import cornerShelvesImg from '../assets/living/Corner Shelves.png';
import displayCabinetsImg from '../assets/living/Display Cabinets.png';
import floatingTVUnitsImg from '../assets/living/Floating TV Units.png';
import openShelvesImg from '../assets/living/Open Shelves.png';
import wallMountedTVUnitImg from '../assets/living/Wall Mounted TV Unit.png';
import woodenShelvingUnitsImg from '../assets/living/Wooden Shelving Units.png';

const categories = [
    { id: 1, name: "Sofa Sets", image: sofaSetsImg },
    { id: 2, name: "Coffee Tables", image: coffeeTablesImg },
    { id: 3, name: "TV Units", image: tvUnitsImg },
    { id: 4, name: "Wall Shelves", image: wallShelvesImg },
    { id: 5, name: "Bookshelves", image: bookshelvesImg },
    { id: 6, name: "Fabric Sofas", image: fabricSofasImg },
    { id: 7, name: "Lounge Chairs", image: loungeChairsImg },
    { id: 8, name: "Nest Of Tables", image: nestOfTablesImg },
    { id: 9, name: "Shoes Rack", image: shoesRackImg },
    { id: 10, name: "Recliners", image: reclinersImg },
    { id: 11, name: "Side & End Tables", image: sideEndTablesImg },
    { id: 12, name: "Benches", image: benchesImg },
];

const budgetItems = [
    { id: 13, name: "Coffee Tables", price: "Starting From ₹2,499", image: coffeeTablesPriceImg },
    { id: 14, name: "Tv Units", price: "Starting From ₹1,699", image: tvUnitsPriceImg },
    { id: 15, name: "Lounge Chairs", price: "Starting From ₹10,919", image: loungeChairsPriceImg },
    { id: 16, name: "Cabinets & Sideboards", price: "Starting From ₹7,299", image: cabinetsPriceImg },
    { id: 17, name: "Bookshelves", price: "Starting From ₹3,499", image: bookshelvesPriceImg },
    { id: 18, name: "Shoe Racks", price: "Starting From ₹2,899", image: shoeRacksPriceImg },
    { id: 19, name: "Side & End Tables", price: "Starting From ₹1,299", image: sideEndTablesPriceImg },
    { id: 20, name: "Benches", price: "Starting From ₹4,299", image: benchesPriceImg },
    { id: 21, name: "Center Tables", price: "Starting From ₹3,999", image: centerTableImg },
    { id: 22, name: "Modern Coffee Tables", price: "Starting From ₹4,599", image: coffeeTableNewImg },
    { id: 23, name: "Console Tables", price: "Starting From ₹5,999", image: consoleTablesImg },
    { id: 24, name: "C-Tables", price: "Starting From ₹1,999", image: cTableImg },
    { id: 25, name: "End Tables", price: "Starting From ₹1,499", image: endTablesImg },
    { id: 26, name: "Nest of Tables Set", price: "Starting From ₹3,499", image: nestOfTablesNewImg },
    { id: 27, name: "Classic Side Tables", price: "Starting From ₹1,299", image: sideTablesImg },
    { id: 28, name: "Modern Bookshelves", price: "Starting From ₹3,999", image: bookshelvesNewImg },
    { id: 29, name: "Corner Shelves", price: "Starting From ₹1,899", image: cornerShelvesImg },
    { id: 30, name: "Display Cabinets", price: "Starting From ₹8,499", image: displayCabinetsImg },
    { id: 31, name: "Floating TV Units", price: "Starting From ₹3,299", image: floatingTVUnitsImg },
    { id: 32, name: "Open Shelves", price: "Starting From ₹1,499", image: openShelvesImg },
    { id: 33, name: "Wall Mounted TV Units", price: "Starting From ₹2,999", image: wallMountedTVUnitImg },
    { id: 34, name: "Wooden Shelving Units", price: "Starting From ₹4,999", image: woodenShelvingUnitsImg },
];

const LivingRoomGrid = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    return (
        <section className="container section-padding" style={{ paddingTop: '40px', textAlign: 'center' }}>
            {/* Main Categories Section */}
            <h2 style={{
                fontSize: '2rem',
                marginBottom: '16px',
                fontFamily: "'Playfair Display', serif",
                color: '#333'
            }}>Living Room Furniture</h2>

            <p style={{
                color: '#666',
                marginBottom: '40px',
                maxWidth: '800px',
                margin: '0 auto 40px auto',
                lineHeight: '1.6',
                fontSize: '15px'
            }}>
                When it comes to decorating any home, the living room furniture is usually the first thought that strikes everyone's mind. It is the heart of your living space where comfort meets style, creating a welcoming environment for family and guests.
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '32px',
                justifyContent: 'center',
                marginBottom: '80px'
            }}>
                {categories.map((item) => (
                    <div key={item.id} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{
                            width: '100%',
                            aspectRatio: '4/3',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            marginBottom: '16px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                        }}>
                            <img
                                src={item.image}
                                alt={item.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease'
                                }}
                            />
                        </div>
                        <h3 style={{
                            fontSize: '16px',
                            fontWeight: '500',
                            color: '#333',
                            textAlign: 'center'
                        }}>{item.name}</h3>
                    </div>
                ))}
            </div>

            {/* Budget-Friendly Section */}
            <div style={{ marginBottom: '40px' }}>
                <h2 style={{
                    fontSize: '2rem',
                    marginBottom: '8px',
                    fontFamily: "'Playfair Display', serif",
                    color: '#333'
                }}>Budget-Friendly Living Room Additions</h2>
                <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    marginBottom: '40px'
                }}>Find Premium Quality Products At Affordable Prices</p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '32px',
                justifyContent: 'center'
            }}>
                {budgetItems.map((item) => (
                    <div key={item.id} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease'
                    }}
                        onClick={() => openModal(item)}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{
                            width: '100%',
                            aspectRatio: '3/2', // Slightly wider for these detailed shots
                            borderRadius: '0', // Square as per image
                            overflow: 'hidden',
                            marginBottom: '16px',
                            // No shadow in the reference image for these, just clean images
                        }}>
                            <img
                                src={item.image}
                                alt={item.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease'
                                }}
                            />
                        </div>
                        <h3 style={{
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#333',
                            textAlign: 'center',
                            marginBottom: '4px'
                        }}>{item.name}</h3>
                        <p style={{
                            fontSize: '14px',
                            color: '#333',
                            textAlign: 'center'
                        }}>{item.price}</p>
                        <button style={{
                            width: '100%',
                            padding: '10px 0',
                            backgroundColor: 'transparent',
                            border: '1px solid var(--color-primary)',
                            borderRadius: '6px',
                            color: 'var(--color-primary)',
                            fontWeight: '500',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            marginTop: '10px'
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
                                openModal(item);
                            }}
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>

            <ProductModal
                isOpen={!!selectedProduct}
                onClose={closeModal}
                product={selectedProduct}
            />
        </section>
    );
};

export default LivingRoomGrid;
