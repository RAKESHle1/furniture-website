import React from 'react';
import sixSeaterDiningImg from '../assets/dining/6_dining.png';
import diningSetImg from '../assets/dining/dining-set.png';
import modularKitchenImg from '../assets/dining/modular_kitchen.png';
import diningTablesImg from '../assets/dining/Dining_tables.png';
import barCabinetsImg from '../assets/dining/bar_cabinets.jpg';
import barTrolleysImg from '../assets/dining/bar_trolleys.png';
import crockeryUnitsImg from '../assets/dining/Crockery_Units.png';
import kitchenCabinetImg from '../assets/dining/Kitchen_Cabinet.png';
import diningChairsImg from '../assets/dining/DiningChairs.png';
import kitchenShelvesImg from '../assets/dining/Kitchen_Shelves.png';
import coffeeTableImg from '../assets/living/coffee-table.png';
import sideTableImg from '../assets/living/side-table.png';
import wallShelfImg from '../assets/living/wall-shelf.png';
import bookshelfImg from '../assets/storage/bookshelf.png';
import wardrobeImg from '../assets/storage/wardrobe.png';

const diningCategories = [
    { id: 1, name: "6 Seater Dining Table Sets", image: sixSeaterDiningImg },
    { id: 2, name: "Modular Kitchen", image: modularKitchenImg },
    { id: 3, name: "Dining Tables", image: diningTablesImg },
    { id: 4, name: "Bar Cabinets", image: barCabinetsImg },
    { id: 5, name: "Bar Trolleys", image: barTrolleysImg },
    { id: 6, name: "Crockery Units", image: crockeryUnitsImg },
    { id: 7, name: "4 Seater Dining Table Sets", image: diningSetImg },
    { id: 8, name: "Kitchen Cabinet", image: kitchenCabinetImg },
    { id: 9, name: "Dining Chairs", image: diningChairsImg },
    { id: 10, name: "Kitchen Shelves", image: kitchenShelvesImg },
];

const DiningGrid = () => {
    return (
        <section className="dining-grid-section section-padding container" style={{ paddingTop: '60px' }}>
            <div className="dining-grid-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
                <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '2rem',
                    color: '#333',
                    marginBottom: '12px'
                }}>
                    Dining Room Furniture
                </h2>
                <p style={{ color: '#666', fontSize: '1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                    Elevate your dining experience with our exquisite collection of wooden dining room furniture. From intimate family meals to grand gatherings, our pieces are crafted to set the perfect mood and enhance the decorum of your space, blending timeless elegance with modern comfort.
                </p>
            </div>

            <div className="dining-categories-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '24px 16px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {diningCategories.slice(0, 10).map((category) => (
                    <div key={category.id} style={{
                        textAlign: 'center',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease'
                    }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{
                            width: '140px',
                            height: '140px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            margin: '0 auto 12px',
                            backgroundColor: '#f5f5f5',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            transition: 'all 0.3s ease'
                        }} className="dining-category-circle">
                            <img
                                src={category.image}
                                alt={category.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                        <h3 style={{
                            fontSize: '13px',
                            fontWeight: '600',
                            color: '#333',
                            lineHeight: '1.4',
                            fontFamily: "'Playfair Display', serif"
                        }}>
                            {category.name}
                        </h3>
                    </div>
                ))}
            </div>

            {/* Mobile Responsive */}
            <style>{`
                @media (max-width: 768px) {
                    .dining-grid-section {
                        padding-top: 24px !important;
                        padding-bottom: 32px !important;
                    }
                    .dining-categories-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 20px 12px !important;
                        margin-top: 20px !important;
                    }
                    .dining-category-circle {
                        width: 100px !important;
                        height: 100px !important;
                    }
                    .dining-grid-section h2 {
                        font-size: 1.4rem !important;
                        margin-bottom: 6px !important;
                    }
                    .dining-grid-section p {
                        font-size: 0.85rem !important;
                        margin-bottom: 24px !important;
                        line-height: 1.5 !important;
                    }
                    .dining-grid-header {
                        margin-bottom: 20px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default DiningGrid;
