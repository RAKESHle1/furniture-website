import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Heart, Search, Menu, X } from 'lucide-react';
import logo from '../assets/DCF_logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="navbar" style={{
            backgroundColor: 'var(--color-white)',
            boxShadow: 'var(--shadow-sm)',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        }}>
            <div className="container" style={{
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                {/* Logo */}
                <div className="logo">
                    <Link to="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                        <img src={logo} alt="DesignCraft Logo" style={{ height: '40px', width: 'auto' }} />
                        <span style={{
                            fontSize: '9px',
                            fontWeight: '700',
                            color: 'var(--color-primary)',
                            letterSpacing: '1.4px',
                            textTransform: 'uppercase',
                            whiteSpace: 'nowrap'
                        }}>
                            Design Craft Furniture
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="nav-links desktop-only" style={{ display: 'flex', gap: '32px' }}>
                    {['Home', 'Sofas', 'Chairs', 'Living', 'Bedroom', 'Dining', 'Storage', 'About', 'Contact'].map((item) => {
                        let path = "#";
                        if (item === 'Home') path = "/";
                        if (item === 'Sofas') path = "/sofas";
                        if (item === 'Chairs') path = "/chairs";
                        if (item === 'Living') path = "/living";
                        if (item === 'Bedroom') path = "/bedroom";
                        if (item === 'Dining') path = "/dining";
                        if (item === 'Storage') path = "/storage";
                        if (item === 'About') path = "/about";
                        if (item === 'Contact') path = "/contact";

                        const isActive = location.pathname === path;

                        return (
                            <Link key={item} to={path} style={{
                                fontWeight: 500,
                                fontSize: '15px',
                                color: isActive ? 'var(--color-accent)' : 'var(--color-text-main)',
                                padding: '8px 0',
                                borderBottom: isActive ? '2px solid var(--color-accent)' : '2px solid transparent',
                                transition: 'all 0.2s',
                                textDecoration: 'none'
                            }}
                                onMouseOver={(e) => {
                                    if (!isActive) {
                                        e.target.style.borderBottom = '2px solid var(--color-accent)';
                                    }
                                }}
                                onMouseOut={(e) => {
                                    if (!isActive) {
                                        e.target.style.borderBottom = '2px solid transparent';
                                    }
                                }}
                            >
                                {item}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-only"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-primary)',
                        cursor: 'pointer',
                        padding: '8px',
                        display: 'none' // Controlled by CSS media query below
                    }}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Navigation Mesh/Overlay */}
                {isMenuOpen && (
                    <div className="mobile-nav-overlay" style={{
                        position: 'fixed',
                        top: '80px',
                        left: 0,
                        width: '100%',
                        height: 'calc(100vh - 80px)',
                        backgroundColor: '#fff',
                        zIndex: 999,
                        padding: '40px 24px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px',
                        overflowY: 'auto'
                    }}>
                        {['Home', 'Sofas', 'Chairs', 'Living', 'Bedroom', 'Dining', 'Storage', 'About', 'Contact'].map((item) => {
                            let path = "/";
                            if (item === 'Sofas') path = "/sofas";
                            if (item === 'Chairs') path = "/chairs";
                            if (item === 'Living') path = "/living";
                            if (item === 'Bedroom') path = "/bedroom";
                            if (item === 'Dining') path = "/dining";
                            if (item === 'Storage') path = "/storage";
                            if (item === 'About') path = "/about";
                            if (item === 'Contact') path = "/contact";

                            const isActive = location.pathname === path;

                            return (
                                <Link
                                    key={item}
                                    to={path}
                                    onClick={() => setIsMenuOpen(false)}
                                    style={{
                                        fontSize: '24px',
                                        fontWeight: 600,
                                        color: isActive ? 'var(--color-accent)' : 'var(--color-primary)',
                                        textDecoration: 'none',
                                        fontFamily: "'Playfair Display', serif"
                                    }}
                                >
                                    {item}
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    .desktop-only {
                        display: none !important;
                    }
                    .mobile-only {
                        display: block !important;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
