import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import ShopTheLook from '../components/ShopTheLook';

import coffeeTableVideo from '../assets/home/coffeetable_360.mp4';
import sofaVideo from '../assets/home/sofa_360.mp4';
import diningTableVideo from '../assets/home/diningtable_360.mp4';
import bedVideo from '../assets/home/bed_360.mp4';

const Home = () => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400; // Adjusted for roughly one card width (3 items view)
            const targetScroll = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    const videos = [
        { id: 1, src: coffeeTableVideo, title: "Signature Coffee Table" },
        { id: 2, src: sofaVideo, title: "Luxury Sofa Collection" },
        { id: 3, src: diningTableVideo, title: "Modern Dining Set" },
        { id: 4, src: bedVideo, title: "Premium Comfort Bed" }
    ];

    return (
        <>
            <SEO 
                title="Premium Furniture Store in Hafeezpet, Hyderabad | DesignCraft Furniture"
                description="DesignCraft Furniture offers premium custom wooden furniture, sofas, beds and home interiors in Hyderabad. Serving Hafeezpet, Miyapur, Kukatpally, Kondapur & nearby areas."
                keywords="furniture store Hafeezpet, premium furniture Miyapur, luxury furniture Kukatpally, custom furniture Hitech City, modular furniture Kondapur, wooden furniture Gachibowli"
            />
            
            {/* SEO H1 - Hidden visually but present for search engines */}
            <h1 style={{
                position: 'absolute',
                left: '-10000px',
                width: '1px',
                height: '1px',
                overflow: 'hidden'
            }}>Premium Furniture Store in Hafeezpet, Hyderabad</h1>
            
            <Hero />

            {/* Featured 360 Video Showcase */}
            <section className="container section-padding" style={{ paddingBottom: '20px', textAlign: 'center', marginTop: '60px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '2.5rem',
                        marginBottom: '16px',
                        color: '#333'
                    }}>featured masterpieces</h2>
                    <p style={{ color: '#666', marginBottom: '40px', fontSize: '1.1rem' }}>
                        Witness the elegance of our signature collection in full 360° motion.
                    </p>

                    {/* Scroll Controls */}
                    <button
                        onClick={() => scroll('left')}
                        style={{
                            position: 'absolute',
                            left: '10px',
                            top: '60%', // Centered relative to the cards, roughly
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            border: '1px solid #ddd',
                            backgroundColor: 'white',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <ChevronLeft size={20} color="#333" />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        style={{
                            position: 'absolute',
                            right: '10px',
                            top: '60%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            border: '1px solid #ddd',
                            backgroundColor: 'white',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <ChevronRight size={20} color="#333" />
                    </button>

                    {/* Horizontal Scroll Container */}
                    <div
                        ref={scrollContainerRef}
                        style={{
                            display: 'flex',
                            overflowX: 'auto',
                            gap: '32px',
                            padding: '20px 80px',
                            scrollSnapType: 'x mandatory',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            scrollBehavior: 'smooth'
                        }}
                        className="no-scrollbar horizontal-scroll-container"
                    >
                        <style>{`
                            .no-scrollbar::-webkit-scrollbar {
                                display: none;
                            }
                            @media (max-width: 768px) {
                                .horizontal-scroll-container {
                                    padding: 20px 24px !important;
                                    gap: 16px !important;
                                }
                                .horizontal-scroll-container > div {
                                    flex: 0 0 calc(100% - 32px) !important;
                                    min-width: 250px !important;
                                }
                                h2 {
                                    font-size: 1.8rem !important;
                                }
                                p {
                                    font-size: 1rem !important;
                                }
                            }
                        `}</style>

                        {videos.map((video) => (
                            <div key={video.id} style={{
                                flex: '0 0 calc(33.333% - 22px)', // Show 3 items at a time
                                minWidth: '280px',
                                scrollSnapAlign: 'start'
                            }}>
                                <div style={{
                                    position: 'relative',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.15)',
                                    aspectRatio: '4/3', // Taller aspect ratio as requested "one after one" often implies portrait-ish or standard card shape, keeping 4/3 or 16/9. Let's stick to 4/3 or 16/9. Original coffee table was 16/9 cover. Let's try 4/3 for better fit of 2 items.
                                    backgroundColor: '#fff',
                                    marginBottom: '16px'
                                }}>
                                    <video
                                        src={video.src}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                                <h3 style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: '1.25rem',
                                    color: '#333'
                                }}>{video.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <ShopTheLook />

            <CategoryGrid />

            {/* Location-Based SEO Content Section */}
            <section className="container" style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
                {/* Living Room Section */}
                <div style={{ marginBottom: '60px' }}>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '2rem',
                        marginBottom: '20px',
                        color: 'var(--color-primary)'
                    }}>Luxury Living Room Furniture in Hafeezpet & Kondapur</h2>
                    <p style={{ 
                        lineHeight: '1.8', 
                        color: 'var(--color-text-muted)',
                        marginBottom: '16px',
                        fontSize: '16px'
                    }}>
                        At DesignCraft Furniture, we design and manufacture premium wooden sofas, TV units, and custom living room furniture for homes in Hafeezpet and Kondapur. Our designs combine comfort, durability, and modern aesthetics. Each piece is crafted with precision using the finest quality wood and materials.
                    </p>
                    <p style={{ 
                        lineHeight: '1.8', 
                        color: 'var(--color-text-muted)',
                        fontSize: '16px'
                    }}>
                        Whether you're looking for a contemporary L-shaped sofa, a classic velvet couch, or modular seating solutions, our expert craftsmen create furniture that perfectly matches your lifestyle and home decor. Visit our showroom in Hafeezpet to experience our collection firsthand.
                    </p>
                </div>

                {/* Bedroom Section */}
                <div style={{ marginBottom: '60px' }}>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '2rem',
                        marginBottom: '20px',
                        color: 'var(--color-primary)'
                    }}>Premium Bedroom Furniture for Homes in Gachibowli & Miyapur</h2>
                    <p style={{ 
                        lineHeight: '1.8', 
                        color: 'var(--color-text-muted)',
                        marginBottom: '16px',
                        fontSize: '16px'
                    }}>
                        Transform your bedroom into a sanctuary of comfort with DesignCraft's premium bedroom furniture collection. Serving families in Gachibowli, Miyapur, and surrounding areas, we offer custom-designed beds, wardrobes, dressing tables, and bedside units that blend functionality with elegance.
                    </p>
                    <p style={{ 
                        lineHeight: '1.8', 
                        color: 'var(--color-text-muted)',
                        fontSize: '16px'
                    }}>
                        Our bedroom sets are crafted from solid wood with attention to every detail. From contemporary minimalist designs to traditional carved masterpieces, we create furniture that reflects your personal style while ensuring longevity and comfort for years to come.
                    </p>
                </div>

                {/* Custom Modular Section */}
                <div style={{ marginBottom: '60px' }}>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '2rem',
                        marginBottom: '20px',
                        color: 'var(--color-primary)'
                    }}>Custom Modular Furniture Experts Serving Lingampally & Patancheru</h2>
                    <p style={{ 
                        lineHeight: '1.8', 
                        color: 'var(--color-text-muted)',
                        marginBottom: '16px',
                        fontSize: '16px'
                    }}>
                        Space optimization meets style with our custom modular furniture solutions. DesignCraft specializes in creating bespoke modular kitchens, wardrobes, study units, and storage systems for homes and offices in Lingampally, Patancheru, and nearby localities.
                    </p>
                    <p style={{ 
                        lineHeight: '1.8', 
                        color: 'var(--color-text-muted)',
                        fontSize: '16px'
                    }}>
                        Our design team works closely with you to understand your space requirements and lifestyle needs. We use high-quality hardware, premium finishes, and innovative design solutions to maximize storage while maintaining aesthetic appeal. Schedule a free consultation today and let us transform your space.
                    </p>
                </div>

                {/* Trust Section */}
                <div>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '2rem',
                        marginBottom: '20px',
                        color: 'var(--color-primary)'
                    }}>Your Trusted Furniture Showroom Near Hafeezpet & Nearby Localities</h2>
                    <p style={{ 
                        lineHeight: '1.8', 
                        color: 'var(--color-text-muted)',
                        marginBottom: '16px',
                        fontSize: '16px'
                    }}>
                        With years of experience in crafting premium wooden furniture, DesignCraft has become the go-to furniture destination for discerning homeowners in Hafeezpet, Kukatpally, Hitech City, and surrounding areas. Our showroom features a comprehensive range of living room, bedroom, dining, and office furniture.
                    </p>
                    <p style={{ 
                        lineHeight: '1.8', 
                        color: 'var(--color-text-muted)',
                        fontSize: '16px'
                    }}>
                        We pride ourselves on exceptional craftsmanship, timely delivery, and professional installation services. Every piece comes with a warranty and our commitment to customer satisfaction. Visit us at our Hafeezpet showroom or call us for a home consultation. Experience the DesignCraft difference today.
                    </p>
                </div>
            </section>
        </>
    );
};

export default Home;
