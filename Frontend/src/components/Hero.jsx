import React from 'react';
import { useNavigate } from 'react-router-dom';
import bedImg from '../assets/bedroom/bed.png';
import sofaImg from '../assets/sofas/sofa.png';
import chairImg from '../assets/living/lounge-chair.jpg';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="hero-section container" style={{ padding: '24px', paddingBottom: '0' }}>
            <div className="hero-grid">
                {/* Main Large Image */}
                <div className="hero-main-item" onClick={() => navigate('/bedroom')}>
                    <div className="hero-content">
                        <span className="hero-subtitle">New Arrival</span>
                        <h2>Modern Comfort</h2>
                        <p>Discover our new bedroom collection</p>
                        <button className="btn-shop">Shop Now</button>
                    </div>
                    <img src={bedImg} alt="Modern Bed" />
                </div>

                {/* Side Stacked Images */}
                <div className="hero-side-column">
                    <div className="hero-side-item" onClick={() => navigate('/sofas')}>
                        <div className="hero-content-small">
                            <h3>Velvet Sofas</h3>
                            <p>Up to 40% Off</p>
                        </div>
                        <img src={sofaImg} alt="Comfortable Sofa" />
                    </div>
                    <div className="hero-side-item" onClick={() => navigate('/chairs')}>
                        <div className="hero-content-small">
                            <h3>Lounge Chairs</h3>
                            <p>Relax in style</p>
                        </div>
                        <img src={chairImg} alt="Lounge Chair" style={{ right: '-20px' }} />
                    </div>
                </div>
            </div>

            <style>{`
                .hero-grid {
                    display: grid;
                    grid-template-columns: 1.8fr 1fr;
                    gap: 16px;
                    height: 500px;
                }
                
                .hero-main-item, .hero-side-item {
                    background-color: #f3f4f6;
                    border-radius: 16px;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    transition: transform 0.3s ease;
                }

                .hero-main-item:hover, .hero-side-item:hover {
                    box-shadow: var(--shadow-md);
                }

                .hero-side-column {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .hero-side-item {
                    flex: 1;
                }

                /* Image Styling */
                .hero-main-item img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: 10% 50%; /* Shifts image focus to the left side */
                    transition: transform 0.5s ease;
                    z-index: 1;
                }
                
                .hero-side-item img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%; 
                    height: 100%;
                    object-fit: cover;
                    object-position: 50% 75%; /* Moves subject down slightly */
                    transition: transform 0.5s ease;
                    z-index: 1;
                }

                .hero-main-item:hover img, .hero-side-item:hover img {
                    transform: scale(1.05);
                }

                /* Content Styling */
                .hero-content {
                    position: absolute;
                    top: 20%;
                    transform: translateY(-50%);
                    right: 60px;
                    left: auto;
                    z-index: 2;
                    max-width: 55%; 
                    text-align: right;
                }

                .hero-content-small {
                    position: absolute;
                    top: 16px; /* Moved up slightly */
                    right: 24px;
                    left: auto;
                    z-index: 2;
                    text-align: right;
                }

                .hero-subtitle {
                    color: var(--color-primary);
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-size: 0.75rem;
                    margin-bottom: 8px;
                    display: block;
                }

                .hero-main-item h2 {
                    font-family: 'Playfair Display', serif;
                    font-size: 2.5rem; /* Reduced size further */
                    line-height: 1.1;
                    margin-bottom: 12px;
                    color: #2D2D2D;
                    letter-spacing: -0.5px;
                }

                .hero-side-item h3 {
                    font-size: 1.5rem;
                    margin-bottom: 4px;
                    color: #1a1a1a;
                }

                .btn-shop {
                    background-color: #4A3B32;
                    color: white;
                    border: none;
                    padding: 12px 30px;
                    border-radius: 50px;
                    font-weight: 600;
                    cursor: pointer;
                    margin-top: 20px;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                }

                .btn-shop:hover {
                    background-color: #2D2D2D;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
                }

                @media (max-width: 768px) {
                    .hero-grid {
                        grid-template-columns: 1fr;
                        height: auto;
                        gap: 20px;
                    }
                    .hero-main-item {
                        height: 450px;
                        display: block;
                    }
                    .hero-side-column {
                        height: auto;
                        gap: 20px;
                    }
                    .hero-side-item {
                        height: 250px;
                    }
                    .hero-main-item h2 {
                        font-size: 2rem;
                        margin-bottom: 12px;
                    }
                    .hero-main-item img {
                        object-position: center;
                    }
                    .hero-content {
                        top: 15%;
                        left: 20px;
                        right: 20px;
                        transform: none;
                        max-width: 100%;
                        text-align: center;
                        background: rgba(255, 255, 255, 0.7);
                        padding: 15px;
                        border-radius: 12px;
                        backdrop-filter: blur(4px);
                    }
                    .hero-content-small {
                        right: 20px;
                        top: 20px;
                        background: rgba(255, 255, 255, 0.7);
                        padding: 8px 12px;
                        border-radius: 8px;
                        backdrop-filter: blur(2px);
                    }
                    .btn-shop {
                        margin-top: 10px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
