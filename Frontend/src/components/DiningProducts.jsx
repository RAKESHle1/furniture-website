import React, { useState } from 'react';
import ProductModal from './ProductModal';


// Imports for 2 Seater
import twoSeater1Img from '../assets/dining/2_sit.png';
import twoSeater2Img from '../assets/dining/2sitting dining table.jpg';
import twoSeater3Img from '../assets/dining/2sitting dining table1.jpg';
import twoSeater4Img from '../assets/dining/2sitting dining table2.jpg';
import twoSeater5Img from '../assets/dining/2sitting dining table3.jpg';

// Imports for 4 Seater
import fourSeater1Img from '../assets/dining/4 sitting dining.jpg';
import fourSeater2Img from '../assets/dining/4 sitting dining3.jpg';
import fourSeater3Img from '../assets/dining/4_sit.png';
import fourSeater4Img from '../assets/dining/4siting table.jpg';
import fourSeater5Img from '../assets/dining/4sitting dining1.jpg';
import fourSeater6Img from '../assets/dining/4sitting dining2.jpg';
import fourSeater7Img from '../assets/dining/4sitting dining4.jpg';

// Imports for 6 Seater
import sixSeater1Img from '../assets/dining/6 sitting table.jpg';
import sixSeater2Img from '../assets/dining/6 sitting table2.jpg';
import sixSeater3Img from '../assets/dining/6_dining.png';
import sixSeater4Img from '../assets/dining/6_sit.png';

// Imports for 8 Seater
import eightSeater1Img from '../assets/dining/8 sitting table.jpg';
import eightSeater2Img from '../assets/dining/8 sitting table1.jpg';
import eightSeater3Img from '../assets/dining/8 sitting table2.jpg';
import eightSeater4Img from '../assets/dining/8_sit.png';

// Furniture and Storage
import crockeryUnitsImg from '../assets/dining/Crockery_Units.png';
import diningChairsImg from '../assets/dining/DiningChairs.png';
import diningMainImg from '../assets/dining/Dining_Main.png';
import diningBigImg from '../assets/dining/Dining_big.png';
import diningTablesImg from '../assets/dining/Dining_tables.png';
import diningTable3Img from '../assets/dining/Diningtable3.jpg';
import kitchenCabinetImg from '../assets/dining/Kitchen_Cabinet.png';
import kitchenShelvesImg from '../assets/dining/Kitchen_Shelves.png';
import kitchenBigImg from '../assets/dining/Kitchen_big.png';
import kitchenMainImg from '../assets/dining/Kitchen_main.png';
import luxuryDining1Img from '../assets/dining/Luxury Dining Room Furniture.jpg';
import luxuryDining2Img from '../assets/dining/Luxury Dining Room Furniture1.jpg';
import luxuryDining3Img from '../assets/dining/Luxury Dining Room Furniture3.jpg';
import nestTables1Img from '../assets/dining/Nest of tables1.jpg';
import nestTables2Img from '../assets/dining/Nest of tables2.jpg';
import sideTable1Img from '../assets/dining/Sidetable1.png';
import barCabinetsImg from '../assets/dining/bar_cabinets.jpg';
import barTrolleysImg from '../assets/dining/bar_trolleys.png';
import diningSetImg from '../assets/dining/dining-set.png';
import modularKitchenImg from '../assets/dining/modular_kitchen.png';
import officeTable1Img from '../assets/dining/office table.jpg';
import officeTable2Img from '../assets/dining/office table2.jpg';
import officeTable3Img from '../assets/dining/office table3.jpg';
import table3Img from '../assets/dining/table3.jpg';
import table4Img from '../assets/dining/table4.jpg';
import table5Img from '../assets/dining/table5.jpg';
import table6Img from '../assets/dining/table6.jpg';
import tables2Img from '../assets/dining/tables2.jpg';

const diningProducts = [
    // 2 Seater
    { id: 201, name: "Compact 2-Seater Dining Set", price: "₹45,000", image: twoSeater1Img, category: "2 Seater" },
    { id: 202, name: "Wooden 2-Seater Table", price: "₹38,000", image: twoSeater2Img, category: "2 Seater" },
    { id: 203, name: "Classic 2-Seater Set", price: "₹45,000", image: twoSeater3Img, category: "2 Seater" },
    { id: 204, name: "Modern 2-Seater Dining", price: "₹60,000", image: twoSeater4Img, category: "2 Seater" },
    { id: 205, name: "Minimalist 2-Seater", price: "₹48,000", image: twoSeater5Img, category: "2 Seater" },

    // 4 Seater
    { id: 210, name: "Family 4-Seater Dining Set", price: "₹65,000", image: fourSeater1Img, category: "4 Seater" },
    { id: 211, name: "Elegant 4-Seater Table", price: "₹55,000", image: fourSeater2Img, category: "4 Seater" },
    { id: 212, name: "Premium 4-Seater Set", price: "₹55,000", image: fourSeater3Img, category: "4 Seater" },
    { id: 213, name: "Glass Top 4-Seater", price: "₹58,000", image: fourSeater4Img, category: "4 Seater" },
    { id: 214, name: "Contemporary 4-Seater", price: "₹75,000", image: fourSeater5Img, category: "4 Seater" },
    { id: 215, name: "Stylish 4-Seater Dining", price: "₹75,000", image: fourSeater6Img, category: "4 Seater" },
    { id: 216, name: "Compact 4-Seater", price: "₹65,000", image: fourSeater7Img, category: "4 Seater" },

    // 6 Seater
    { id: 220, name: "Grand 6-Seater Dining Set", price: "₹1,10,000", image: sixSeater1Img, category: "6 Seater" },
    { id: 221, name: "Luxury 6-Seater Table", price: "₹89,000", image: sixSeater2Img, category: "6 Seater" },
    { id: 222, name: "Royal 6-Seater Dining", price: "₹1,35,000", image: sixSeater3Img, category: "6 Seater" },
    { id: 223, name: "Modern 6-Seater Set", price: "₹1,64,000", image: sixSeater4Img, category: "6 Seater" },

    // 8 Seater
    { id: 230, name: "Majestic 8-Seater Set", price: "₹1,45,000", image: eightSeater1Img, category: "8 Seater" },
    { id: 231, name: "Imperial 8-Seater Dining", price: "₹1,41,000", image: eightSeater2Img, category: "8 Seater" },
    { id: 232, name: "Large Family Dining Set", price: "₹1,64,000", image: eightSeater3Img, category: "8 Seater" },
    { id: 233, name: "Executive 8-Seater Table", price: "₹1,65,000", image: eightSeater4Img, category: "8 Seater" },

    // Furniture Items
    { id: 240, name: "Premium Crockery Unit", price: "₹52,000", image: crockeryUnitsImg, category: "Storage" },
    { id: 241, name: "Set of Dining Chairs", price: "₹18,000", image: diningChairsImg, category: "Chairs" },
    { id: 242, name: "Complete Dining Suite", price: "₹1,65,000", image: diningMainImg, category: "Sets" },
    { id: 243, name: "Spacious Dining Setup", price: "₹75,000", image: diningBigImg, category: "Sets" },
    { id: 244, name: "Classic Dining Table", price: "₹65,000", image: diningTablesImg, category: "Tables" },
    { id: 245, name: "Modern Wood Table", price: "₹60,000", image: diningTable3Img, category: "Tables" },
    { id: 246, name: "Modular Kitchen Cabinet", price: "₹45,000", image: kitchenCabinetImg, category: "Kitchen" },
    { id: 247, name: "Kitchen Wall Shelves", price: "₹18,000", image: kitchenShelvesImg, category: "Kitchen" },
    { id: 248, name: "Large Kitchen Unit", price: "₹55,000", image: kitchenBigImg, category: "Kitchen" },
    { id: 249, name: "Complete Kitchen Setup", price: "₹1,50,000", image: kitchenMainImg, category: "Kitchen" },

    // Luxury & Misc
    { id: 250, name: "Luxury Dining Collection", price: "₹1,25,000", image: luxuryDining1Img, category: "Luxury" },
    { id: 251, name: "Opulent Dining Set", price: "₹1,35,000", image: luxuryDining2Img, category: "Luxury" },
    { id: 252, name: "Elegant Dining Furniture", price: "₹1,15,000", image: luxuryDining3Img, category: "Luxury" },
    { id: 253, name: "Nest of Tables (Set of 2)", price: "₹12,500", image: nestTables1Img, category: "Tables" },
    { id: 254, name: "Modern Nest Tables", price: "₹14,000", image: nestTables2Img, category: "Tables" },
    { id: 255, name: "Designer Side Table", price: "₹6,500", image: sideTable1Img, category: "Tables" },
    { id: 256, name: "Vintage Bar Cabinet", price: "₹35,000", image: barCabinetsImg, category: "Bar" },
    { id: 257, name: "Mobile Bar Trolley", price: "₹18,500", image: barTrolleysImg, category: "Bar" },
    { id: 258, name: "Compact Dining Set", price: "₹1,10,000", image: diningSetImg, category: "Sets" },
    { id: 259, name: "Modular Kitchen Island", price: "₹1,85,000", image: modularKitchenImg, category: "Kitchen" },

    // Tables
    { id: 260, name: "Executive Office Table", price: "₹22,500", image: officeTable1Img, category: "Office" },
    { id: 261, name: "Modern Workspace Table", price: "₹24,000", image: officeTable2Img, category: "Office" },
    { id: 262, name: "Classic Office Desk", price: "₹21,500", image: officeTable3Img, category: "Office" },
    { id: 263, name: "Sleek Coffee Table", price: "₹12,500", image: table3Img, category: "Tables" },
    { id: 264, name: "Designer Coffee Table", price: "₹14,500", image: table4Img, category: "Tables" },
    { id: 265, name: "Minimalist End Table", price: "₹5,500", image: table5Img, category: "Tables" },
    { id: 266, name: "Modern Center Table", price: "₹16,500", image: table6Img, category: "Tables" },
    { id: 267, name: "Wooden Study Table", price: "₹13,000", image: tables2Img, category: "Tables" },
];

const DiningProducts = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    return (
        <section className="section-padding container" style={{ paddingBottom: '80px' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '2rem',
                    color: '#333',
                    marginBottom: '12px'
                }}>
                    Exclusive Dining Collection
                </h2>
                <p style={{ color: '#666', fontSize: '1rem', maxWidth: '800px', margin: '0 auto' }}>
                    Browse through our wide range of premium dining furniture, crafted to perfection.
                </p>
            </div>

            <div className="dining-products-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '32px'
            }}>
                {diningProducts.map((product) => (
                    <div key={product.id} style={{
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        transition: 'transform 0.3s ease',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                        onClick={() => openModal(product)}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{
                            width: '100%',
                            aspectRatio: '4/3',
                            overflow: 'hidden',
                            backgroundColor: '#f9f9f9',
                            position: 'relative'
                        }}>
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease'
                                }}
                            />
                            {product.category && (
                                <span style={{
                                    position: 'absolute',
                                    top: '12px',
                                    right: '12px',
                                    backgroundColor: 'rgba(255,255,255,0.9)',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    color: '#333'
                                }}>
                                    {product.category}
                                </span>
                            )}
                        </div>
                        <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{
                                fontSize: '16px',
                                fontWeight: '600',
                                marginBottom: '8px',
                                color: '#333',
                                textAlign: 'center',
                                fontFamily: "'Playfair Display', serif"
                            }}>{product.name}</h3>
                            <p style={{
                                fontSize: '15px',
                                color: 'var(--color-primary)',
                                fontWeight: '600',
                                textAlign: 'center',
                                marginBottom: '16px'
                            }}>{product.price}</p>
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
                                marginTop: 'auto'
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
                                    openModal(product);
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

            <style>{`
                @media (max-width: 768px) {
                    .dining-products-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 16px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default DiningProducts;
