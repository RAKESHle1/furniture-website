import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

const ProductModal = ({ isOpen, onClose, product }) => {
    const navigate = useNavigate();

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto'; // Use 'auto' to restore scrolling
        }
        return () => {
            document.body.style.overflow = 'auto'; // Ensure cleanup
        };
    }, [isOpen]);

    if (!isOpen || !product) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            padding: '20px',
            opacity: isOpen ? 1 : 0,
            visibility: isOpen ? 'visible' : 'hidden',
            transition: 'opacity 0.3s ease, visibility 0.3s ease'
        }} onClick={onClose}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                width: '100%',
                maxWidth: '900px',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                animation: 'modalSlideIn 0.3s ease-out forwards'
            }} onClick={(e) => e.stopPropagation()}>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        background: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        zIndex: 10,
                        transition: 'transform 0.2s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <X size={24} color="#333" />
                </button>

                <div style={{ display: 'flex', flexDirection: 'column', md: { flexDirection: 'row' } }} className="modal-content-wrapper">
                    {/* Image Section */}
                    <div style={{
                        width: '100%',
                        height: '300px',
                        backgroundColor: '#f5f5f5',
                        position: 'relative'
                    }} className="modal-image-container">
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>

                    {/* Details Section */}
                    <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flex: 1, textAlign: 'left' }}>
                        <div style={{ marginBottom: '24px', borderBottom: '1px solid #eee', paddingBottom: '24px' }}>
                            <h2 style={{
                                fontSize: '28px',
                                fontFamily: "'Playfair Display', serif",
                                color: 'var(--color-primary)',
                                marginBottom: '8px'
                            }}>{product.name}</h2>
                            <p style={{
                                fontSize: '24px',
                                fontWeight: '600',
                                color: 'var(--color-accent)'
                            }}>{product.price}</p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <div>
                                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: '#333' }}>Product Details</h4>
                                <p style={{ color: '#666', lineHeight: '1.6' }}>
                                    {product.details || "Experience ultimate comfort with our premium collection. Designed for modern living, this piece combines style with durability, making it perfect for your home."}
                                </p>
                            </div>

                            <div>
                                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: '#333' }}>Manufacturing</h4>
                                <p style={{ color: '#666', lineHeight: '1.6' }}>
                                    {product.manufacturing || "Handcrafted with precision using high-quality materials. Sourced responsibly and built to last by skilled artisans."}
                                </p>
                            </div>

                            <div>
                                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: '#333' }}>More Info</h4>
                                <ul style={{ color: '#666', lineHeight: '1.6', paddingLeft: '20px', margin: 0 }}>
                                    {(product.moreInfo || [
                                        "Premium finish and texture",
                                        "Easy to clean and maintain",
                                        "1 Year Warranty included",
                                        "Free delivery and installation"
                                    ]).map((info, index) => (
                                        <li key={index}>{info}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <button style={{
                            marginTop: '32px',
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                            border: 'none',
                            padding: '16px',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease'
                        }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2c2c2c'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
                            onClick={() => {
                                onClose();
                                navigate('/book', { state: { product } });
                            }}
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes modalSlideIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .modal-content-wrapper {
                    display: flex;
                    flex-direction: column;
                }
                .modal-image-container {
                     height: 300px;
                }
                @media (min-width: 768px) {
                    .modal-content-wrapper {
                        flex-direction: row;
                        align-items: stretch;
                    }
                    .modal-image-container {
                        width: 50%;
                        height: auto;
                        min-height: 500px;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProductModal;
