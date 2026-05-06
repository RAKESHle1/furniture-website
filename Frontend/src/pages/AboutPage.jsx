import React from 'react';
import aboutImage from '../assets/home/sofa_360.mp4';
import ReviewsSection from '../components/ReviewsSection';

const AboutPage = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--color-primary)',
                color: '#fff',
                textAlign: 'center',
                overflow: 'hidden'
            }}>
                <div style={{ zIndex: 2, padding: '0 20px' }}>
                    <h1 style={{
                        fontSize: '48px',
                        fontFamily: "'Playfair Display', serif",
                        marginBottom: '16px'
                    }}>Our Journey of Craftsmanship</h1>
                    <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
                        Transforming spaces with timeless wooden furniture since 2005.
                    </p>
                </div>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    zIndex: 1
                }}></div>
            </section>

            {/* Values Section */}
            <section className="container section-padding" style={{ padding: '80px 20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
                    <div>
                        <h2 style={{
                            fontSize: '36px',
                            color: 'var(--color-primary)',
                            fontFamily: "'Playfair Display', serif",
                            marginBottom: '24px'
                        }}>Excellence in Every Detail</h2>
                        <p style={{ lineHeight: '1.8', color: '#666', marginBottom: '20px' }}>
                            At DesignCraft, we believe that furniture is more than just functional—it's an expression of your lifestyle. Every piece we create is handcrafted by master artisans who blend traditional techniques with modern design aesthetics.
                        </p>
                        <p style={{ lineHeight: '1.8', color: '#666' }}>
                            We source only the finest sustainable hardwoods, ensuring that our furniture is not only beautiful but also built to last for generations. From the initial sketch to the final polish, quality is our obsession.
                        </p>
                    </div>
                    <div style={{
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                    }}>
                        <img
                            src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Craftsmanship"
                            style={{ width: '100%', display: 'block' }}
                        />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section style={{ backgroundColor: '#FAF9F6', padding: '80px 0' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'center' }}>
                    {[
                        { label: 'Years Experience', value: '20+' },
                        { label: 'Happy Customers', value: '15k+' },
                        { label: 'Master Artisans', value: '50+' },
                        { label: 'Stores Pan India', value: '12+' }
                    ].map((stat, index) => (
                        <div key={index}>
                            <h3 style={{ fontSize: '42px', color: 'var(--color-accent)', marginBottom: '8px' }}>{stat.value}</h3>
                            <p style={{ color: '#666', fontWeight: 500 }}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <ReviewsSection />
        </div>
    );
};

export default AboutPage;
