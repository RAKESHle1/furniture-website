import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/categories';
import { sofaTypes } from '../data/sofaTypes';
import { bedTypes } from '../data/bedTypes';
import { diningTypes } from '../data/diningTypes';
import { storageTypes } from '../data/storageTypes';

const CategoryGrid = () => {
    const [activeTab, setActiveTab] = useState('All');
    const navigate = useNavigate();
    const tabs = ['All', 'Sofas', 'Living', 'Bedroom', 'Dining', 'Storage'];

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const getFilteredItems = () => {
        if (activeTab === 'All') return categories;
        if (activeTab === 'Sofas') return sofaTypes;
        if (activeTab === 'Bedroom') return bedTypes;
        if (activeTab === 'Dining') return diningTypes;
        if (activeTab === 'Storage') return storageTypes;

        return categories.filter(cat => {
            const title = cat.title.toUpperCase();
            if (activeTab === 'Living') {
                return ['TV UNITS', 'COFFEE TABLES', 'RECLINERS', 'SHOE RACKS', 'BENCHES', 'SIDE TABLES', 'LOUNGE CHAIRS', 'WARDROBES'].includes(title);
            }
            if (activeTab === 'Storage') {
                return ['BOOKSHELVES', 'CABINETS', 'BAR CABINETS', 'WALL SHELVES'].includes(title);
            }
            return false;
        });
    };

    const displayItems = getFilteredItems();

    const handleItemClick = (item) => {
        const title = item.title.toUpperCase();
        if (title.includes('SOFA')) navigate('/sofas');
        else if (title.includes('BED')) navigate('/bedroom');
        else if (title === 'DINING') navigate('/dining');
        else if (['TV UNITS', 'COFFEE TABLES', 'RECLINERS', 'SHOE RACKS', 'BENCHES', 'SIDE TABLES'].includes(title)) navigate('/living');
        else if (['WARDROBES', 'BOOKSHELVES', 'WALL SHELVES', 'CABINETS', 'BAR CABINETS'].includes(title)) navigate('/storage');
        else if (['LOUNGE CHAIRS', 'WOODEN CHAIRS'].includes(title)) navigate('/chairs');
        else navigate('/living'); // Fallback
    };

    return (
        <section className="categories section-padding container" style={{ paddingTop: '80px' }}>

            {/* Section Title */}
            <h2 style={{
                textAlign: 'center',
                fontSize: '32px',
                color: 'var(--color-primary)',
                marginBottom: '24px',
                fontFamily: "'Playfair Display', serif"
            }}>
                Shop By Categories
            </h2>

            {/* Pill Filters */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '16px',
                marginBottom: '48px',
                flexWrap: 'wrap'
            }}>
                {tabs.map(tab => (
                    <button
                        key={tab}
                        onClick={() => handleTabClick(tab)}
                        style={{
                            padding: '8px 24px',
                            borderRadius: '50px',
                            border: `1px solid ${activeTab === tab ? 'var(--color-accent)' : '#e0e0e0'}`,
                            backgroundColor: activeTab === tab ? '#FFF9F0' : 'transparent',
                            color: activeTab === tab ? 'var(--color-accent)' : '#666',
                            fontWeight: 500,
                            fontSize: '15px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Centered Flex Grid */}
            <div className="category-items-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '24px 16px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {displayItems.map((item) => (
                    <div key={item.id} className="category-card" onClick={() => handleItemClick(item)} style={{
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'transform 0.3s ease',
                        width: '100%'
                    }}>
                        <div style={{
                            overflow: 'hidden',
                            borderRadius: '16px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                            marginBottom: '12px',
                            aspectRatio: '1/1',
                            backgroundColor: '#fff',
                            position: 'relative'
                        }}>
                            <img src={item.image} alt={item.title} style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.5s ease'
                            }}
                                onMouseOver={(e) => e.target.style.transform = 'scale(1.15)'}
                                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                            />
                        </div>
                        <h3 style={{
                            fontSize: '14px',
                            color: 'var(--color-primary)',
                            fontWeight: 600,
                            fontFamily: "'Playfair Display', serif"
                        }}>
                            {item.title}
                        </h3>
                    </div>
                ))}
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .category-items-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 20px 12px !important;
                    }
                    h2 {
                        font-size: 24px !important;
                        margin-bottom: 24px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default CategoryGrid;
