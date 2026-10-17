import React, { useState } from 'react';
import { MessageCircle, MapPin, Phone, MessageSquareText, X } from 'lucide-react';

const FloatingActionBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const pillStyle = {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 20px',
        borderRadius: '50px',
        color: 'white',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '15px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        transition: 'transform 0.2s ease, opacity 0.2s ease',
        cursor: 'pointer',
        whiteSpace: 'nowrap'
    };

    const mainButtonStyle = {
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        backgroundColor: 'white',
        border: 'none',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        zIndex: 1001 // Ensure it's on top
    };

    return (
        <div className="floating-action-container" style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end'
        }}>
            {/* Expanded Options */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginBottom: '12px',
                alignItems: 'flex-end',
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                pointerEvents: isOpen ? 'auto' : 'none',
                transition: 'opacity 0.3s ease, transform 0.3s ease'
            }}>
                {/* 1. Call Us (Orange) */}
                <a href="tel:+919392642078" className="action-pill" style={{ ...pillStyle, backgroundColor: '#EA580C' }}>
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        padding: '5px',
                        marginRight: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Phone size={18} color="#EA580C" />
                    </div>
                    Call Us
                </a>

                {/* 2. WhatsApp (Green) */}
                <a href="https://api.whatsapp.com/send/?phone=919392642078&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="action-pill" style={{ ...pillStyle, backgroundColor: '#25D366' }}>
                    <div style={{
                        marginRight: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {/* Custom WhatsApp SVG */}
                        <svg
                            viewBox="0 0 24 24"
                            width="22"
                            height="22"
                            fill="white"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                    </div>
                    WhatsApp
                </a>

                {/* 3. Location (Blue) */}
                <a href="https://www.google.com/maps/search/?api=1&query=17.47657,78.36285" target="_blank" rel="noopener noreferrer" className="action-pill" style={{ ...pillStyle, backgroundColor: '#2563EB' }}>
                    <div style={{
                        marginRight: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <MapPin size={22} color="white" />
                    </div>
                    Store Location
                </a>
            </div>

            {/* Main Floating Button */}
            <button
                className="floating-main-btn"
                onClick={toggleMenu}
                style={{
                    ...mainButtonStyle,
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
                aria-label="Toggle Support Menu"
            >
                {isOpen ? (
                    <X size={32} className="btn-icon" color="#555" />
                ) : (
                    <div style={{ position: 'relative', width: '32px', height: '32px' }} className="btn-icon-container">
                        <style>
                            {`
                                @keyframes dot-bounce {
                                    0% { opacity: 0.3; transform: scale(0.8); }
                                    50% { opacity: 1; transform: scale(1.1); }
                                    100% { opacity: 0.3; transform: scale(0.8); }
                                }
                                @media (max-width: 768px) {
                                    .floating-action-container {
                                        bottom: 15px !important;
                                        right: 15px !important;
                                    }
                                    .floating-main-btn {
                                        width: 48px !important;
                                        height: 48px !important;
                                    }
                                    .btn-icon, .btn-icon-container {
                                        width: 24px !important;
                                        height: 24px !important;
                                    }
                                    .action-pill {
                                        padding: 8px 16px !important;
                                        font-size: 13px !important;
                                    }
                                }
                            `}
                        </style>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                            <path
                                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8Z"
                                fill="#EA580C"
                            />
                            <circle cx="8" cy="12" r="1.5" fill="white" style={{ animation: 'dot-bounce 1.4s infinite ease-in-out', animationDelay: '0s' }} />
                            <circle cx="12" cy="12" r="1.5" fill="white" style={{ animation: 'dot-bounce 1.4s infinite ease-in-out', animationDelay: '0.2s' }} />
                            <circle cx="16" cy="12" r="1.5" fill="white" style={{ animation: 'dot-bounce 1.4s infinite ease-in-out', animationDelay: '0.4s' }} />
                        </svg>
                    </div>
                )}
            </button>
        </div>
    );
};

export default FloatingActionBar;
