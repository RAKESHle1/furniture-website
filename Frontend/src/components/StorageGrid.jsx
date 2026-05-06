import { useState } from 'react';
import ProductModal from './ProductModal';
import storageTvImg from '../assets/storage/storage_tv.png';
import storageTableImg from '../assets/storage/Storage_table.png';
import storageDrawersImg from '../assets/storage/Storage_Drawers.png';
import wardrobesImg from '../assets/storage/Storage_main.jpg';
import shoeStandImg from '../assets/storage/Storage_shoestand.png';
import cabinetsImg from '../assets/storage/Storage_Cabinets.png';
import homeTempleImg from '../assets/storage/Storage_god.png';
import bookshelvesImg from '../assets/storage/Stoarge_Bookshelves.png';
import barCabinetsImg from '../assets/storage/bar_cabinets.jpg';
import wallShelvesImg from '../assets/storage/Storage_WallShelves.png';

// New Product Imports
import bookshelvesPriceImg from '../assets/storage/Bookshelves price.jpg';
import cabinetsPriceImg from '../assets/storage/Cabinets & Sideboards price.jpg';
import shoeRacksPriceImg from '../assets/storage/Shoe Racks price.jpg';
import tvUnitsPriceImg from '../assets/storage/TV Units price.jpg';
import bookshelvesModernImg from '../assets/storage/Bookshelves.png';
import consoleTablesImg from '../assets/storage/Consoletables.png';
import cornerShelvesImg from '../assets/storage/Corner Shelves.png';
import displayCabinetsImg from '../assets/storage/Display Cabinets.png';
import shoeRackImg from '../assets/storage/Shoe Rack.jpg';
import wallMountedTvImg from '../assets/storage/Wall Mounted TV Unit.png';
import woodenShelvingImg from '../assets/storage/Wooden Shelving Units.png';
import tvUnitModernImg from '../assets/storage/tv-unit.png';
import fourDoorWardrobeImg from '../assets/storage/4 Door Wardrobe.jpg';
import barCabinet1Img from '../assets/storage/Bar Cabinet1.jpg';
import coffeeBarCabinetImg from '../assets/storage/Coffee Bar Cabinet.jpg';
import kitchenCabinetImg from '../assets/storage/Kitchen Cabinet.jpg';
import shoeRackNewImg from '../assets/storage/Shoe Rack.jpg';
import sideboard1Img from '../assets/storage/Sideboards1.png';
import storageCabinet1Img from '../assets/storage/storage cabinet1.jpg';
import stylishWardrobeImg from '../assets/storage/stylish Wooden Wardrobe.jpg';
import multiUnitImg from '../assets/storage/units.jpg'; // Restored import
import fourDoorWardrobe1Img from '../assets/storage/4 Door Wardrobe1.jpg';
import fourDoorWardrobe3Img from '../assets/storage/4 Door Wardrobe3.jpg';
import fiveDoorWardrobeImg from '../assets/storage/5 Door Wardrobe.jpg';
import sixDoorWardrobeImg from '../assets/storage/6 Door Wardrobe.jpg';
import barCabinet2Img from '../assets/storage/Bar Cabinet2.jpg';
import barCabinet3Img from '../assets/storage/Bar Cabinet3.jpg';
import bookshelvesJpgImg from '../assets/storage/Bookshelves.jpg';
import dresserUnitImg from '../assets/storage/Dresser unit.jpg';
import dressingTablImg from '../assets/storage/Dressing Tabl.jpg';
import fullWallWardrobeImg from '../assets/storage/Full-Wall Wooden Wardrobe.jpg';
import fullWallWardrobe1Img from '../assets/storage/Full-Wall Wooden Wardrobe1.jpg';
import fullWallWardrobe2Img from '../assets/storage/Full-Wall Wooden Wardrobe2.jpg';
import sideboards2Img from '../assets/storage/Sideboards2.png';
import sideboards3Img from '../assets/storage/Sideboards3.png';
import storageBookselfImg from '../assets/storage/Storage_Bookself.png';
import storageBigCabinetsImg from '../assets/storage/Storage_bigCabinets.png';
import storageTvUnitsImg from '../assets/storage/Storage_tvunits.png';
import stylishDresserUnitImg from '../assets/storage/Stylish Dresser unit.jpg';
import woodenWardrobeImg from '../assets/storage/Wooden Wardrobe.jpg';
import bedsideTableImg from '../assets/storage/bedside table.jpg';
import bedsideTable1Img from '../assets/storage/bedside table1.jpg';
import bookshelfPngImg from '../assets/storage/bookshelf.png';
import booksself1Img from '../assets/storage/booksself1.jpg';
import storageCabinet2Img from '../assets/storage/storage cabinet2.jpg';
import storageCabinet3Img from '../assets/storage/storage cabinet3.jpg';
import storageCabinet4Img from '../assets/storage/storage cabinet4.jpg';
import storageCabinet5Img from '../assets/storage/storage cabinet5.jpg';
import wardrobePngImg from '../assets/storage/wardrobe.png';

const storageCategories = [
    { id: 1, name: "TV Units", image: storageTvImg },
    { id: 2, name: "Bedside Tables", image: storageTableImg },
    { id: 3, name: "Chest Of Drawers", image: storageDrawersImg },
    { id: 4, name: "Wardrobes", image: wardrobesImg },
    { id: 5, name: "Shoe Stand", image: shoeStandImg },
    { id: 6, name: "Cabinets & Sideboards", image: cabinetsImg },
    { id: 7, name: "Home Temple", image: homeTempleImg },
    { id: 8, name: "Bookshelves", image: bookshelvesImg },
    { id: 9, name: "Bar Cabinets", image: barCabinetsImg },
    { id: 10, name: "Wall Shelves", image: wallShelvesImg }
];

const storageProducts = [
    { id: 11, name: "Classic Bookshelves", price: "Starting From ₹3,499", image: bookshelvesPriceImg },
    { id: 12, name: "Cabinets & Sideboards", price: "Starting From ₹7,299", image: cabinetsPriceImg },
    { id: 13, name: "Shoe Racks", price: "Starting From ₹2,899", image: shoeRacksPriceImg },
    { id: 14, name: "TV Units", price: "Starting From ₹1,699", image: tvUnitsPriceImg },
    { id: 15, name: "Modern Bookshelf", price: "Starting From ₹4,999", image: bookshelvesModernImg },
    { id: 16, name: "Console Tables", price: "Starting From ₹5,499", image: consoleTablesImg },
    { id: 17, name: "Corner Shelves", price: "Starting From ₹1,899", image: cornerShelvesImg },
    { id: 18, name: "Display Cabinets", price: "Starting From ₹8,999", image: displayCabinetsImg },
    { id: 19, name: "Premium Shoe Rack", price: "Starting From ₹3,299", image: shoeRackImg },
    { id: 20, name: "Wall Mounted TV Unit", price: "Starting From ₹2,999", image: wallMountedTvImg },
    { id: 21, name: "Wooden Shelving Unit", price: "Starting From ₹3,999", image: woodenShelvingImg },
    { id: 22, name: "Sleek TV Unit", price: "Starting From ₹4,599", image: tvUnitModernImg },
];

const newStorageArrivals = [
    { id: 101, name: "Luxury 4-Door Wardrobe", price: "Starting From ₹24,999", image: fourDoorWardrobeImg },
    { id: 102, name: "Modern Bar Cabinet", price: "Starting From ₹12,500", image: barCabinet1Img },
    { id: 103, name: "Coffee Bar Station", price: "Starting From ₹9,999", image: coffeeBarCabinetImg },
    { id: 104, name: "Premium Kitchen Cabinet", price: "Starting From ₹15,999", image: kitchenCabinetImg },
    { id: 105, name: "Classic Shoe Rack", price: "Starting From ₹3,999", image: shoeRackNewImg },
    { id: 106, name: "Elegant Sideboard", price: "Starting From ₹11,500", image: sideboard1Img },
    { id: 107, name: "Compact Storage Cabinet", price: "Starting From ₹7,999", image: storageCabinet1Img },
    { id: 108, name: "Stylish Wooden Wardrobe", price: "Starting From ₹18,999", image: stylishWardrobeImg },
    { id: 109, name: "Multi-Purpose Unit", price: "Starting From ₹6,500", image: multiUnitImg },
    // Newly added items
    { id: 110, name: "Elegant 4-Door Wardrobe", price: "Starting From ₹25,999", image: fourDoorWardrobe1Img },
    { id: 111, name: "Spacious 4-Door Wardrobe", price: "Starting From ₹26,500", image: fourDoorWardrobe3Img },
    { id: 112, name: "Grand 5-Door Wardrobe", price: "Starting From ₹32,000", image: fiveDoorWardrobeImg },
    { id: 113, name: "Massive 6-Door Wardrobe", price: "Starting From ₹38,999", image: sixDoorWardrobeImg },
    { id: 114, name: "Classic Bar Cabinet", price: "Starting From ₹13,999", image: barCabinet2Img },
    { id: 115, name: "Compact Bar Unit", price: "Starting From ₹11,500", image: barCabinet3Img },
    { id: 116, name: "Wooden Bookshelf", price: "Starting From ₹5,999", image: bookshelvesJpgImg },
    { id: 117, name: "Modern Dresser Unit", price: "Starting From ₹14,500", image: dresserUnitImg },
    { id: 118, name: "Traditional Dressing Table", price: "Starting From ₹12,999", image: dressingTablImg },
    { id: 119, name: "Full-Wall Wardrobe", price: "Starting From ₹45,000", image: fullWallWardrobeImg },
    { id: 120, name: "Custom Wall Wardrobe", price: "Starting From ₹48,000", image: fullWallWardrobe1Img },
    { id: 121, name: "Premium Wall Wardrobe", price: "Starting From ₹52,000", image: fullWallWardrobe2Img },
    { id: 122, name: "Contemporary Sideboard", price: "Starting From ₹12,500", image: sideboards2Img },
    { id: 123, name: "Minimalist Sideboard", price: "Starting From ₹10,999", image: sideboards3Img },
    { id: 124, name: "Tall Bookshelf", price: "Starting From ₹7,500", image: storageBookselfImg },
    { id: 125, name: "Large Storage Cabinet", price: "Starting From ₹16,999", image: storageBigCabinetsImg },
    { id: 126, name: "Entertainment Unit", price: "Starting From ₹8,999", image: storageTvUnitsImg },
    { id: 127, name: "Chic Dresser", price: "Starting From ₹15,999", image: stylishDresserUnitImg },
    { id: 128, name: "Solid Wood Wardrobe", price: "Starting From ₹22,500", image: woodenWardrobeImg },
    { id: 129, name: "Classic Bedside Table", price: "Starting From ₹3,500", image: bedsideTableImg },
    { id: 130, name: "Modern Nightstand", price: "Starting From ₹4,200", image: bedsideTable1Img },
    { id: 131, name: "Open Bookshelf", price: "Starting From ₹6,500", image: bookshelfPngImg },
    { id: 132, name: "Corner Bookshelf", price: "Starting From ₹5,500", image: booksself1Img },
    { id: 133, name: "Utility Cabinet", price: "Starting From ₹8,500", image: storageCabinet2Img },
    { id: 134, name: "Small Storage Unit", price: "Starting From ₹4,999", image: storageCabinet3Img },
    { id: 135, name: "Wide Storage Cabinet", price: "Starting From ₹11,999", image: storageCabinet4Img },
    { id: 136, name: "Tall Cabinet", price: "Starting From ₹9,500", image: storageCabinet5Img },
    { id: 137, name: "Single Door Wardrobe", price: "Starting From ₹8,999", image: wardrobePngImg },
];

const StorageGrid = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    return (
        <section className="section-padding" style={{ backgroundColor: '#fafafa' }}>
            <div className="container">
                {/* Section Header */}
                <div className="storage-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(28px, 5vw, 40px)',
                        color: 'var(--color-primary)',
                        marginBottom: '16px'
                    }}>
                        Storage Furniture
                    </h2>
                    <p style={{
                        fontSize: '15px',
                        color: '#666',
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        Select the best storage furniture online to organize and enhance the beauty of your home. From wardrobes to bookshelves, explore our wide range of functional and stylish storage solutions.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="storage-grid-container" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gap: '24px',
                    marginBottom: '80px'
                }}>
                    {storageCategories.map((category) => (
                        <div
                            key={category.id}
                            className="storage-card"
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                            }}
                        >
                            {/* Image Container */}
                            <div style={{
                                width: '100%',
                                height: '200px',
                                backgroundColor: '#f5f5f5',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden'
                            }} className="storage-card-image">
                                {category.image ? (
                                    <img
                                        src={category.image}
                                        alt={category.name}
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
                                        background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <span style={{ color: '#999', fontSize: '14px' }}>Image</span>
                                    </div>
                                )}
                            </div>

                            {/* Category Name */}
                            <div style={{
                                padding: '16px',
                                textAlign: 'center'
                            }}>
                                <h3 style={{
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: 'var(--color-primary)',
                                    margin: 0,
                                    fontFamily: "'Playfair Display', serif"
                                }}>
                                    {category.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Exclusive Collection Header */}
                <div className="storage-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(24px, 4vw, 36px)',
                        color: 'var(--color-primary)',
                        marginBottom: '16px'
                    }}>
                        Exclusive Storage Collection
                    </h2>
                    <p style={{
                        fontSize: '15px',
                        color: '#666',
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        Discover our premium range of storage solutions designed to blend seamless functionality with timeless aesthetics. Find the perfect piece for every corner of your home.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="storage-products-grid exclusive-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '32px',
                    marginBottom: '80px'
                }}>
                    {storageProducts.map((product) => (
                        <div key={product.id} className="storage-product-card" style={{
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
                            <div className="storage-product-img" style={{
                                width: '100%',
                                aspectRatio: '4/3',
                                overflow: 'hidden',
                                backgroundColor: '#f9f9f9'
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
                            </div>
                            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    marginBottom: '8px',
                                    color: '#333',
                                    textAlign: 'center'
                                }}>{product.name}</h3>
                                <p style={{
                                    fontSize: '14px',
                                    color: '#757575',
                                    fontWeight: '500',
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

                {/* Latest Additions Header */}
                <div className="storage-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(24px, 4vw, 36px)',
                        color: 'var(--color-primary)',
                        marginBottom: '16px'
                    }}>
                        Latest Additions
                    </h2>
                    <p style={{
                        fontSize: '15px',
                        color: '#666',
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        Check out our newest storage units, featuring modern designs and smart space-saving solutions.
                    </p>
                </div>

                {/* Latest Additions Grid */}
                <div className="storage-products-grid latest-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '32px',
                    marginBottom: '40px'
                }}>
                    {newStorageArrivals.map((product) => (
                        <div key={product.id} className="storage-product-card" style={{
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
                            <div className="storage-product-img" style={{
                                width: '100%',
                                aspectRatio: '4/3',
                                overflow: 'hidden',
                                backgroundColor: '#f9f9f9'
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
                            </div>
                            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    marginBottom: '8px',
                                    color: '#333',
                                    textAlign: 'center'
                                }}>{product.name}</h3>
                                <p style={{
                                    fontSize: '14px',
                                    color: '#757575',
                                    fontWeight: '500',
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
            </div>

            <ProductModal
                isOpen={!!selectedProduct}
                onClose={closeModal}
                product={selectedProduct}
            />

            {/* Responsive Styles */}
            <style>{`
                @media (max-width: 1200px) {
                    .storage-grid-container {
                        grid-template-columns: repeat(4, 1fr) !important;
                    }
                }
                @media (max-width: 900px) {
                    .storage-grid-container {
                        grid-template-columns: repeat(3, 1fr) !important;
                    }
                    .storage-products-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 16px !important;
                    }
                }
                @media (max-width: 768px) {
                    .section-padding {
                        padding-top: 20px !important;
                        padding-bottom: 20px !important;
                    }
                    .storage-header {
                        margin-bottom: 20px !important;
                    }
                    .storage-header h2 {
                        font-size: 24px !important;
                    }
                    .storage-header p {
                        font-size: 13px !important;
                    }
                    
                    /* Category Grid */
                    .storage-grid-container {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 12px !important;
                        margin-bottom: 30px !important;
                    }
                    .storage-card-image {
                        height: 130px !important;
                    }
                    .storage-card h3 {
                        font-size: 12px !important;
                    }
                    .storage-card > div:last-child {
                        padding: 10px !important;
                    }
                    
                    /* Product Grids */
                    .storage-products-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 12px !important;
                        margin-bottom: 30px !important;
                    }
                    
                    /* Product Image Fix */
                    .storage-product-img {
                        min-height: 140px !important;
                        height: auto !important;
                    }
                    .storage-product-img img {
                        width: 100% !important;
                        height: 100% !important;
                        min-height: 140px !important;
                        object-fit: cover !important;
                        display: block !important;
                    }
                    
                    /* Product Card Text */
                    .storage-product-card > div:last-child {
                        padding: 12px !important;
                    }
                    .storage-product-card h3 {
                        font-size: 13px !important;
                    }
                    .storage-product-card p {
                        font-size: 12px !important;
                        margin-bottom: 10px !important;
                    }
                    .storage-product-card button {
                        padding: 8px 0 !important;
                        font-size: 12px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default StorageGrid;
