import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = ({ onInstallPWA, showInstall }) => {
    return (
        <footer style={{
            backgroundColor: 'var(--color-primary)',
            color: '#fff',
            padding: '80px 0 40px',
            marginTop: '80px'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '48px',
                    marginBottom: '64px'
                }}>
                    {/* Brand Section */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <h2 style={{
                                color: '#fff',
                                fontSize: '24px',
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: '700',
                                letterSpacing: '1px',
                                marginBottom: '2px'
                            }}>Design Craft</h2>
                            <span style={{
                                color: 'var(--color-accent)',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                fontSize: '13px',
                                letterSpacing: '2px'
                            }}>Furniture</span>
                        </div>
                        <p style={{
                            opacity: 0.7,
                            lineHeight: '1.8',
                            fontSize: '15px',
                            maxWidth: '300px'
                        }}>
                            Crafting premium wooden furniture that brings timeless elegance and modern comfort to your home. Every piece is a masterpiece.
                        </p>
                        <p style={{
                            opacity: 0.85,
                            lineHeight: '1.8',
                            fontSize: '14px',
                            maxWidth: '340px',
                            marginTop: '8px',
                            color: 'var(--color-accent)'
                        }}>
                            DesignCraft Furniture – Premium Wooden Furniture Manufacturer in Hafeezpet, Hyderabad. Serving Miyapur, Kukatpally, Kondapur, Gachibowli, Lingampally and nearby areas.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', marginTop: '10px' }}>
                            {[
                                { Icon: Facebook, link: 'https://www.facebook.com/people/DesignCraft-Furniture/pfbid0213MS56fWpuS27kNVav17WUtNmAKrtNxDFNcL2qKbEQbbe9VuAzkQA9SmpKDgJQDml/' },
                                { Icon: Instagram, link: 'https://www.instagram.com/designcraftfurnitures/?hl=en' },
                                { Icon: Youtube, link: 'https://www.youtube.com/channel/UC9Y3_H_o5LEaoDgWM-RxIqA' }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(255,255,255,0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#fff',
                                        transition: 'all 0.3s ease',
                                        textDecoration: 'none'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <social.Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: '#fff', marginBottom: '24px', fontSize: '18px', fontWeight: '600' }}>Explore</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {['Sofas', 'Living Room', 'Bedroom', 'Dining', 'Storage', 'About', 'Contact'].map(link => (
                                <li key={link}>
                                    <Link
                                        to={link === 'Living Room' ? '/living' : `/${link.toLowerCase()}`}
                                        style={{
                                            color: '#fff',
                                            opacity: 0.7,
                                            textDecoration: 'none',
                                            fontSize: '15px',
                                            transition: 'all 0.3s ease',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px'
                                        }}
                                        onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.paddingLeft = '8px'; e.currentTarget.style.color = 'var(--color-accent)'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.paddingLeft = '0'; e.currentTarget.style.color = '#fff'; }}
                                    >
                                        <ArrowRight size={14} /> {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Information Section */}
                    <div>
                        <h4 style={{ color: '#fff', marginBottom: '24px', fontSize: '18px', fontWeight: '600' }}>Information</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {['Furniture Care', 'Our Process', 'FAQs', 'Privacy Policy', 'Terms & Conditions'].map(link => (
                                <li key={link}>
                                    <Link to={`/info#${link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} style={{
                                        color: '#fff',
                                        opacity: 0.7,
                                        textDecoration: 'none',
                                        fontSize: '15px',
                                        transition: 'all 0.3s ease'
                                    }}
                                        onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'var(--color-accent)'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.color = '#fff'; }}
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{ color: '#fff', marginBottom: '24px', fontSize: '18px', fontWeight: '600' }}>Contact Us</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                <MapPin size={20} color="var(--color-accent)" style={{ marginTop: '4px' }} />
                                <p style={{ opacity: 0.7, fontSize: '15px', lineHeight: '1.5' }}>
                                    Polt No 15, Opposite Mahammadia Masjid,<br />
                                    Martanda Nagar Main Road, Hafeezpet,<br />
                                    Hyderabad-500049, Telangana
                                </p>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <Phone size={20} color="var(--color-accent)" />
                                <p style={{ opacity: 0.7, fontSize: '15px' }}>+91 93926 42078</p>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <Mail size={20} color="var(--color-accent)" />
                                <p style={{ opacity: 0.7, fontSize: '15px' }}>designcraftsf@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    paddingTop: '40px',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <p style={{ opacity: 0.5, fontSize: '14px' }}>
                        © 2026 Design Craft Furniture. All rights reserved.
                    </p>
                </div>
                {/* Download App Button (always visible) */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
                    <button
                        onClick={onInstallPWA}
                        disabled={!onInstallPWA}
                        style={{
                            background: onInstallPWA ? 'var(--color-accent)' : '#aaa',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 8,
                            padding: '14px 32px',
                            fontSize: 18,
                            fontWeight: 600,
                            cursor: onInstallPWA ? 'pointer' : 'not-allowed',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                            transition: 'background 0.2s',
                            opacity: onInstallPWA ? 1 : 0.6
                        }}
                    >
                        Download App
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
