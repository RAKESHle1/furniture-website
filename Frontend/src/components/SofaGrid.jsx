import React, { useState } from 'react';
import ProductModal from './ProductModal';
import sofaImg from '../assets/sofas/sofa.png';
import fabricSofaImg from '../assets/sofas/fabric-sofa.png';
import chesterfieldImg from '../assets/sofas/sofa-chesterfield.png';
import greySofaImg from '../assets/sofas/sofa-grey.png';
import bannerSofaImg from '../assets/sofas/banner-sofa-sunlit.png';
import classicFabricSofaImg from '../assets/sofas/Classic-Fabric-Sofa.jpg';
import reclinerSofaImg from '../assets/sofas/Recliner-sofa.jpg';
import powerReclinerImg from '../assets/sofas/Power Recliner Sofa.jpg';
import lShapeSofaImg from '../assets/sofas/L-Shape Corner Sofa.jpg';
import uShapeSofaImg from '../assets/sofas/U-Shape Sectional Sofa.jpg';
import sofaCumBedImg from '../assets/sofas/Sofa Cum Bed.jpg';
import scandinavianSofaImg from '../assets/sofas/Scandinavian Style Sofa.jpg';
import midCenturySofaImg from '../assets/sofas/Mid-Century Modern Sofa.jpg';
import velvetDesignerSofaImg from '../assets/sofas/Velvet Designer Sofa.jpg';
import woodenFrameSofaImg from '../assets/sofas/Wooden Frame Sofa.jpg';
import tuftedCushionSofaImg from '../assets/sofas/Tufted Cushion Sofa.jpg';
import familyThreeSeaterSofaImg from '../assets/sofas/Family 3-Seater Sofa.jpg';
import customMadeSofaImg from '../assets/sofas/Custom-Made Sofa.jpg';
import sofa1Img from '../assets/sofas/sofa1.jpg';
import sofa2Img from '../assets/sofas/sofa2.jpg';
import sofa3Img from '../assets/sofas/sofa3.jpg';
import sofa4Img from '../assets/sofas/sofa4.jpg';
import sofa5Img from '../assets/sofas/sofa5.jpg';
import sofa6Img from '../assets/sofas/sofa6.jpg';
import sofa7Img from '../assets/sofas/sofa7.jpg';
import sofa8Img from '../assets/sofas/sofa8.jpg';
import sofa9Img from '../assets/sofas/sofa9.jpg';
import sofa10Img from '../assets/sofas/sofa10.jpg';
import sofa11Img from '../assets/sofas/sofa11.jpg';
import twoSitSofaImg from '../assets/sofas/2sit-sofa.jpg';
import aero2SeaterImg from '../assets/sofas/Aero-2-Seater-Sofa.jpg';
import blue2SitSofaImg from '../assets/sofas/Blue -2sit-sofa.jpg';
import blueSofaImg from '../assets/sofas/Blue-sofa.jpg';
import greenSofaImg from '../assets/sofas/Green-Sofa.jpg';
import greySofa3Img from '../assets/sofas/Grey-sofa.jpg';
import leather2SitImg from '../assets/sofas/Leather-2sit-sofa.jpg';
import sofaBeigeImg from '../assets/sofas/Sofa-beige.jpg';
import sofaForestGreenImg from '../assets/sofas/Sofa-ForestGreen.jpg';
import sofaInspoImg from '../assets/sofas/Sofa-inspo.jpg';
import styleSofaImg from '../assets/sofas/Style-sofa.jpg';


const sofas = [
    {
        id: 1,
        name: "Classic Beige Comfort",
        price: "₹45,000",
        image: sofaImg,
        filter: "none",
        details: "Experience timeless elegance with the Classic Beige Comfort sofa. This piece features a neutral palette that complements any decor, offering a perfect blend of style and relaxation for your living space.",
        manufacturing: "Expertly handcrafted with a sturdy Solid Teak wood frame to ensure superior durability. The upholstery is chosen for its soft texture and resilience.",
        moreInfo: [
            "Solid Teak wood frame",
            "Premium beige fabric",
            "High-density foam cushions",
            "Free delivery and installation"
        ]
    },
    {
        id: 2,
        name: "Modern Plush Teal Sofa",
        price: "₹45,000",
        image: fabricSofaImg,
        filter: "none",
        details: "Add a splash of color to your home with the Modern Plush Teal Sofa. Its vibrant hue and plush cushioning make it a standout piece that invites you to relax in style.",
        manufacturing: "Built on a robust Solid Teak wood frame for lasting stability. Hand-upholstered in high-quality teal fabric that resists wear and tear.",
        moreInfo: [
            "Solid Teak wood frame",
            "Vibrant teal upholstery",
            "Plush seating comfort",
            "Easy to clean material"
        ]
    },
    {
        id: 3,
        name: "Royal Leather Chesterfield",
        price: "₹55,000",
        image: chesterfieldImg,
        filter: "none",
        details: "The Royal Leather Chesterfield defines sophistication with its deep button tufting and rolled arms. It is a classic statement piece designed for those who appreciate luxury.",
        manufacturing: "Constructed with a kiln-dried Solid Teak wood frame for maximum strength. Upholstered in premium faux leather with meticulous craftsmanship.",
        moreInfo: [
            "Solid Teak wood frame",
            "Classic Chesterfield design",
            "Deep button tufting details",
            "Premium leather finish"
        ]
    },
    {
        id: 4,
        name: "Minimalist Grey Sofa",
        price: "₹21,500",
        image: greySofaImg,
        filter: "none",
        details: "Embrace simplicity with the Minimalist Grey Sofa. Its clean lines and understated design make it an ideal choice for contemporary homes seeking a sleek look.",
        manufacturing: "Features a durable Solid Teak wood frame hidden beneath a sleek grey fabric cover, ensuring both modern aesthetics and traditional strength.",
        moreInfo: [
            "Solid Teak wood frame",
            "Minimalist modern design",
            "Compact and space-saving",
            "1 Year Warranty included"
        ]
    },
    {
        id: 5,
        name: "Classic Fabric Sofa",
        price: "₹45,000",
        image: classicFabricSofaImg,
        filter: "none",
        details: "A versatile choice for any living room, the Classic Fabric Sofa offers enduring comfort and a design that never goes out of style.",
        manufacturing: "Made with a reinforced Solid Teak wood frame. The fabric is tightly woven for durability and treated for stain resistance.",
        moreInfo: [
            "Solid Teak wood frame",
            "Durable woven fabric",
            "Ergonomic back support",
            "Free delivery and installation"
        ]
    },
    {
        id: 6,
        name: "Luxury Recliner Sofa",
        price: "₹52,000",
        image: reclinerSofaImg,
        filter: "none",
        details: "Indulge in the ultimate relaxation with the Luxury Recliner Sofa. Perfect for movie nights or lazy weekends, it offers adjustable comfort at your fingertips.",
        manufacturing: "Engineered with a heavy-duty reclining mechanism supported by a Solid Teak wood base structure for reliability and longevity.",
        moreInfo: [
            "Solid Teak wood base structure",
            "Manual reclining mechanism",
            "Extra padded armrests",
            "Lumbar support design"
        ]
    },
    {
        id: 7,
        name: "Power Recliner Sofa",
        price: "₹110,000",
        image: powerReclinerImg,
        filter: "none",
        details: "Experience ultimate comfort with our premium collection. Designed for modern living, this piece combines style with durability, making it perfect for your home.",
        manufacturing: "Handcrafted with precision using high-quality materials. Sourced responsibly and built to last by skilled artisans using Solid Teak wood components.",
        moreInfo: [
            "Solid Teak wood components",
            "Premium finish and texture",
            "Easy to clean and maintain",
            "1 Year Warranty included",
            "Free delivery and installation"
        ]
    },
    {
        id: 8,
        name: "L-Shape Corner Sofa",
        price: "₹60,000",
        image: lShapeSofaImg,
        filter: "none",
        details: "Maximize your seating space with this elegant L-Shape Corner Sofa. Ideal for large families or entertaining guests, it offers ample room without compromising on style.",
        manufacturing: "The entire sectional is supported by a heavy-duty Solid Teak wood frame, ensuring it maintains its shape and stability over years of use.",
        moreInfo: [
            "Solid Teak wood frame",
            "Spacious L-shape design",
            "Premium fabric upholstery",
            "Modular sections"
        ]
    },
    {
        id: 9,
        name: "U-Shape Sectional Sofa",
        price: "₹68,000",
        image: uShapeSofaImg,
        filter: "none",
        details: "Create a cozy conversation pit with the U-Shape Sectional Sofa. This expansive piece is the centerpiece of any large living room, offering comfort from every angle.",
        manufacturing: "Crafted with a massive Solid Teak wood frame to support its large structure. Cushions are filled with high-resilience foam for lasting bounce.",
        moreInfo: [
            "Solid Teak wood frame",
            "Large U-shape configuration",
            "High-resilience foam",
            "Perfect for large gatherings"
        ]
    },
    {
        id: 10,
        name: "Sofa Cum Bed",
        price: "₹55,000",
        image: sofaCumBedImg,
        filter: "none",
        details: " Functionality meets style in this smart Sofa Cum Bed. Easily convertible, it's the perfect solution for homes that need an extra sleeping space for guests.",
        manufacturing: "Features a smooth convertible mechanism housed within a sturdy Solid Teak wood frame, guaranteeing ease of use and structural integrity.",
        moreInfo: [
            "Solid Teak wood frame",
            "Dual-purpose design",
            "Easy convertible mechanism",
            "Space-saving solution"
        ]
    },
    {
        id: 11,
        name: "Scandinavian Style Sofa",
        price: "₹42,000",
        image: scandinavianSofaImg,
        filter: "none",
        details: "Bring Nordic charm to your home with the Scandinavian Style Sofa. Featuring tapered wooden legs and a clean silhouette, it exudes airy elegance.",
        manufacturing: "Showcases exposed legs made from premium Solid Teak wood. The internal frame is also constructed from Solid Teak for unmatched durability.",
        moreInfo: [
            "Solid Teak wood legs & frame",
            "Nordic minimalist design",
            "Soft linen-blend fabric",
            "Lightweight yet sturdy"
        ]
    },
    {
        id: 12,
        name: "Mid-Century Modern Sofa",
        price: "₹52,000",
        image: midCenturySofaImg,
        filter: "none",
        details: "Travel back in style with the Mid-Century Modern Sofa. Its retro-inspired look with button details and clean lines adds a vintage touch to your modern home.",
        manufacturing: "Authentic mid-century construction using a kiln-dried Solid Teak wood frame and legs to prevent warping and ensure longevity.",
        moreInfo: [
            "Solid Teak wood frame",
            "Retro mid-century aesthetic",
            "Button-tufted backrest",
            "1 Year Warranty included"
        ]
    },
    {
        id: 13,
        name: "Velvet Designer Sofa",
        price: "₹48,000",
        image: velvetDesignerSofaImg,
        filter: "none",
        details: "Make a bold statement with the Velvet Designer Sofa. Luxurious velvet upholstery and specific design details create a piece that is as much art as it is furniture.",
        manufacturing: "Underneath the plush velvet lies a tough Solid Teak wood frame, providing the necessary support for this exquisite design piece.",
        moreInfo: [
            "Solid Teak wood frame",
            "Luxurious velvet fabric",
            "Gold-finish leg accents",
            "Designer collection item"
        ]
    },
    {
        id: 14,
        name: "Wooden Frame Sofa",
        price: "₹45,000",
        image: woodenFrameSofaImg,
        filter: "none",
        details: "Celebrate the beauty of natural wood with this Wooden Frame Sofa. The visible wooden elements add warmth and organic texture to your living room.",
        manufacturing: "The exposed frame is crafted entirely from premium grade Solid Teak wood, polished to highlight the natural grain patterns.",
        moreInfo: [
            "100% Solid Teak wood frame",
            "Polished natural finish",
            "Detachable cushions",
            "Classic wooden aesthetic"
        ]
    },
    {
        id: 15,
        name: "Tufted Cushion Sofa",
        price: "₹48,000",
        image: tuftedCushionSofaImg,
        filter: "none",
        details: "Enjoy the classic look of specialized stitching with the Tufted Cushion Sofa. The tufting adds depth and texture, enhancing both the look and comfort.",
        manufacturing: "Supported by a hidden Solid Teak wood frame. The tufting is hand-stitched by skilled artisans to ensure uniformity and durability.",
        moreInfo: [
            "Solid Teak wood frame",
            "Hand-tufted detailing",
            "Thick comfortable padding",
            "Elegant traditional look"
        ]
    },
    {
        id: 16,
        name: "Family 3-Seater Sofa",
        price: "₹45,000",
        image: familyThreeSeaterSofaImg,
        filter: "none",
        details: "Designed for family life, this generous 3-Seater Sofa offers plenty of room for everyone. Durable and comfortable, it's the heart of the family room.",
        manufacturing: "Built tough with a Solid Teak wood frame to withstand the rigors of daily family use. Fabric is easy to clean and maintain.",
        moreInfo: [
            "Solid Teak wood frame",
            "Spacious 3-seater capacity",
            "Kid and pet-friendly fabric",
            "Robust construction"
        ]
    },
    {
        id: 17,
        name: "Custom-Made Sofa",
        price: "₹65,000",
        image: customMadeSofaImg,
        filter: "none",
        details: "Your vision, our craftsmanship. The Custom-Made Sofa is a placeholder for your unique design ideas, brought to life with our expert manufacturing.",
        manufacturing: "We build your custom design upon our standard high-quality Solid Teak wood frame to ensure that your unique piece is as durable as it is beautiful.",
        moreInfo: [
            "Solid Teak wood frame base",
            "Fully customizable fabric",
            "Made to your dimensions",
            "Personalized consultation"
        ]
    },
];

const sofaTypes = [
    { id: 1, name: "Fabric Sofas", count: "120+ Items", image: classicFabricSofaImg },
    { id: 2, name: "L-Shape Sofas", count: "80+ Items", image: lShapeSofaImg },
    { id: 3, name: "Recliner Sofas", count: "45+ Items", image: reclinerSofaImg },
    { id: 4, name: "Sofa Cum Beds", count: "60+ Items", image: sofaCumBedImg },
    { id: 5, name: "Wooden Sofas", count: "150+ Items", image: woodenFrameSofaImg },
    { id: 6, name: "Chesterfield", count: "30+ Items", image: chesterfieldImg },
    { id: 7, name: "U-Shape Sofas", count: "25+ Items", image: uShapeSofaImg },
    { id: 8, name: "Custom Made", count: "Unlimited", image: customMadeSofaImg },
];

const newArrivals = [
    {
        id: 101,
        name: "Modern Minimalist Grey",
        price: "₹60,000",
        image: sofa1Img,
        details: "A sleek grey sofa that perfectly blends modern minimalism with everyday comfort.",
        manufacturing: "Constructed with a kiln-dried hardwood frame and high-density foam cushions."
    },
    {
        id: 102,
        name: "Blush Pink Velvet",
        price: "₹65,000",
        image: sofa2Img,
        details: "Soft, luxurious velvet in a stunning blush pink shade. A statement piece for any room.",
        manufacturing: "Hand-upholstered velvet over a solid wood frame with gold-finished legs."
    },
    {
        id: 103,
        name: "Contemporary Red 3-Seater",
        price: "₹58,000",
        image: sofa3Img,
        details: "Bold and beautiful, this red 3-seater adds a pop of color and plush comfort.",
        manufacturing: "bosting a reinforced frame and durable fabric designed for heavy daily use."
    },
    {
        id: 104,
        name: "cozy Beige Loveseat",
        price: "₹48,000",
        image: sofa4Img,
        details: "Perfect for smaller spaces, this beige loveseat offers cozy seating without compromising style.",
        manufacturing: "Compact solid wood frame with stain-resistant fabric upholstery."
    },
    {
        id: 105,
        name: "Elegant Cream Sofa",
        price: "₹42,000",
        image: sofa5Img,
        details: "Understated elegance. This cream sofa features clean lines and superior comfort.",
        manufacturing: "Double-doweled joints and a solid teak base ensure long-lasting stability."
    },
    {
        id: 106,
        name: "Modern White Sectional",
        price: "₹48,000",
        image: sofa6Img,
        details: "A spacious white sectional that brings a bright, airy feel to your living room.",
        manufacturing: "Modular design with heavy-duty connectors and premium fabric cover."
    },
    {
        id: 107,
        name: "Nordic Grey 2-Seater",
        price: "₹40,000",
        image: sofa7Img,
        details: "Nordic design principles meet modern comfort in this stylish grey 2-seater.",
        manufacturing: "Features exposed oak legs and a robust internal frame system."
    },
    {
        id: 108,
        name: "L-Shape Tan Sectional",
        price: "₹85,000",
        image: sofa8Img,
        details: "Warm tan upholstery on a generous L-shape frame. Ideal for lounging.",
        manufacturing: "Supported by a reinforced corner-blocked frame for maximum durability."
    },
    {
        id: 109,
        name: "Modern Beige Recliner",
        price: "₹125,000",
        image: sofa9Img,
        details: "Relax in style with this modern beige recliner sofa. Smooth mechanism and soft fabric.",
        manufacturing: "Steel reclining mechanism integrated into a solid wood frame construction."
    },
    {
        id: 110,
        name: "Mustard Yellow Velvet",
        price: "₹60,000",
        image: sofa10Img,
        details: "Vibrant mustard yellow velvet sofa that becomes the focal point of any living area.",
        manufacturing: "High-grade velvet fabric tested for durability, over a solid teak frame."
    },
    {
        id: 111,
        name: "Classic Wooden Settee",
        price: "₹58,000",
        image: sofa11Img,
        details: "Traditional wooden settee with comfortable cushioning. Timeless and durable.",
        manufacturing: "100% Solid Teak wood frame with polished finish and high-density foam seat."
    },
    {
        id: 112,
        name: "Luxe Grey 2-Seater Sofa",
        price: "₹65,000",
        image: twoSitSofaImg,
        details: "A luxury 2-seater with sleek wooden trim and plush grey upholstery. Modern design with dark accent pillows for a sophisticated living space.",
        manufacturing: "Premium hardwood frame with walnut-finish armrest accents. High-resilience foam wrapped in soft grey fabric."
    },
    {
        id: 113,
        name: "Aero Curved 2-Seater",
        price: "₹37,999",
        image: aero2SeaterImg,
        details: "Elegant curved silhouette in a warm sand tone. This compact 2-seater brings organic, sculptural beauty to any room.",
        manufacturing: "Moulded plywood internal frame with high-density foam. Upholstered in premium linen-blend fabric."
    },
    {
        id: 114,
        name: "Blue Charm 2-Seater",
        price: "₹27,500",
        image: blue2SitSofaImg,
        details: "A vibrant blue fabric sofa with gold-finished legs that adds a cheerful pop of color to your living room decor.",
        manufacturing: "Solid wood frame with reinforced joints. Upholstered in durable blue woven fabric with brushed gold metal legs."
    },
    {
        id: 115,
        name: "Mint Velvet Channel Sofa",
        price: "₹45,000",
        image: blueSofaImg,
        details: "Stunning mint-teal velvet 3-seater with elegant channel tufting. A statement piece that exudes retro sophistication.",
        manufacturing: "Kiln-dried hardwood frame with tapered walnut legs. Channel-stitched premium velvet upholstery."
    },
    {
        id: 116,
        name: "Heritage Green Wood Sofa",
        price: "₹62,000",
        image: greenSofaImg,
        details: "A masterpiece of craftsmanship featuring a sculpted walnut wood frame with deep green tufted cushions. Artisan-made for discerning tastes.",
        manufacturing: "Handcrafted solid walnut wood shell with precision-cut curves. Tufted cushions filled with premium foam."
    },
    {
        id: 117,
        name: "Charcoal Grey 3-Seater",
        price: "₹48,000",
        image: greySofa3Img,
        details: "A button-tufted charcoal grey sofa with natural oak legs. Clean lines and timeless appeal make it perfect for any living room.",
        manufacturing: "Solid wood frame with natural oak tapered legs. Button-tufted polyester-blend fabric with stain resistance."
    },
    {
        id: 118,
        name: "Pastel Teal Compact Sofa",
        price: "₹32,000",
        image: leather2SitImg,
        details: "A cute and compact 2-seater in pastel teal with button-accent backrest. Perfect for apartments and cozy nooks.",
        manufacturing: "Lightweight birch wood frame with natural wood legs. Soft-touch fabric with high-resilience cushion filling."
    },
    {
        id: 119,
        name: "Beige Teak Platform Sofa",
        price: "₹48,000",
        image: sofaBeigeImg,
        details: "Minimalist beige sofa resting on a beautiful teak wood platform base. The exposed wooden frame adds warmth and natural elegance.",
        manufacturing: "Solid teak wood platform frame with rounded edges. Deep-filled linen cushions for supreme comfort."
    },
    {
        id: 120,
        name: "Forest Green Linen Sofa",
        price: "₹45,000",
        image: sofaForestGreenImg,
        details: "A beautiful forest green 3-seater with tapered wooden legs and plush cushioning. Brings nature-inspired calm to your home.",
        manufacturing: "Hardwood frame with walnut-stained tapered legs. Premium linen upholstery with feather-blend cushion fill."
    },
    {
        id: 121,
        name: "Artisan L-Shaped Daybed",
        price: "₹110,000",
        image: sofaInspoImg,
        details: "A unique L-shaped daybed with a sculptural wooden base. Its unconventional design makes it a conversation-starting centerpiece.",
        manufacturing: "Handcrafted solid teak wood base with caster wheels. Bouclé fabric upholstery with high-density foam padding."
    },
    {
        id: 122,
        name: "Diamond Tufted Wingback Sofa",
        price: "₹42,000",
        image: styleSofaImg,
        details: "A classic diamond-tufted wingback sofa in sophisticated taupe. Timeless elegance meets modern comfort for the refined home.",
        manufacturing: "Solid hardwood frame with dark-stained tapered legs. Hand-tufted diamond pattern with premium fabric upholstery."
    }
];

const SofaGrid = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    return (
        <section className="section-padding container" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
            {/* Sofa Types Section */}
            <div className="category-header-section" style={{
                textAlign: 'center',
                marginBottom: '60px',
                backgroundColor: '#FAF9F6',
                padding: '60px 20px',
                borderRadius: '0'
            }}>
                <h1 style={{
                    fontSize: 'clamp(28px, 5vw, 42px)',
                    color: 'var(--color-primary)',
                    marginBottom: '16px',
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: '600'
                }}>
                    Exclusive Sofa Collection
                </h1>
                <p style={{
                    fontSize: '16px',
                    color: '#666',
                    maxWidth: '900px',
                    margin: '0 auto 60px',
                    lineHeight: '1.6'
                }}>
                    Explore our diverse range of premium sofas, crafted for every style and comfort need.
                </p>

                <div className="types-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    gap: '20px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {sofaTypes.map((type) => (
                        <div key={type.id} style={{
                            textAlign: 'center',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                width: '100%',
                                aspectRatio: '4/3',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                margin: '0 auto 12px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                                backgroundColor: '#fff',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'}
                                onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'}
                            >
                                <img
                                    src={type.image}
                                    alt={type.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        padding: '0',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                />
                            </div>
                            <h3 style={{
                                fontSize: '15px',
                                fontWeight: '600',
                                color: 'var(--color-primary)',
                                marginBottom: '4px',
                                fontFamily: "'Playfair Display', serif"
                            }}>
                                {type.name}
                            </h3>
                            <p style={{
                                fontSize: '12px',
                                color: '#888',
                                margin: 0
                            }}>
                                {type.count}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <h2 style={{
                textAlign: 'center',
                fontSize: '32px',
                color: 'var(--color-primary)',
                marginBottom: '48px',
                marginTop: '80px',
                fontFamily: "'Playfair Display', serif"
            }}>
                Our Premium Selection
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '32px'
            }}>
                {sofas.map((sofa) => (
                    <div key={sofa.id} style={{
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        transition: 'transform 0.3s ease',
                        cursor: 'pointer'
                    }}
                        onClick={() => openModal(sofa)}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{ height: '220px', overflow: 'hidden', backgroundColor: '#f9f9f9' }}>
                            <img
                                src={sofa.image}
                                alt={sofa.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease',
                                    filter: sofa.filter || 'none'
                                }}
                            />
                        </div>
                        <div style={{ padding: '20px' }}>
                            <h3 style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                marginBottom: '8px',
                                color: '#333'
                            }}>{sofa.name}</h3>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '12px'
                            }}>
                                <span style={{
                                    fontSize: '16px',
                                    color: '#757575',
                                    fontWeight: '500'
                                }}>{sofa.price}</span>
                            </div>
                            <button style={{
                                width: '100%',
                                padding: '10px 0',
                                backgroundColor: 'transparent',
                                border: '1px solid var(--color-primary)',
                                borderRadius: '6px',
                                color: 'var(--color-primary)',
                                fontWeight: '500',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
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
                                    openModal(sofa);
                                }}
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Fresh Arrivals Section */}
            <h2 style={{
                textAlign: 'center',
                fontSize: '32px',
                color: 'var(--color-primary)',
                marginBottom: '48px',
                marginTop: '100px',
                fontFamily: "'Playfair Display', serif"
            }}>
                Fresh Arrivals
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '32px'
            }}>
                {newArrivals.map((sofa) => (
                    <div key={sofa.id} style={{
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        transition: 'transform 0.3s ease',
                        cursor: 'pointer'
                    }}
                        onClick={() => openModal(sofa)}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{ height: '220px', overflow: 'hidden', backgroundColor: '#f9f9f9' }}>
                            <img
                                src={sofa.image}
                                alt={sofa.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease'
                                }}
                            />
                        </div>
                        <div style={{ padding: '20px' }}>
                            <h3 style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                marginBottom: '8px',
                                color: '#333'
                            }}>{sofa.name}</h3>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '12px'
                            }}>
                                <span style={{
                                    fontSize: '16px',
                                    color: '#757575',
                                    fontWeight: '500'
                                }}>{sofa.price}</span>
                            </div>
                            <button style={{
                                width: '100%',
                                padding: '10px 0',
                                backgroundColor: 'transparent',
                                border: '1px solid var(--color-primary)',
                                borderRadius: '6px',
                                color: 'var(--color-primary)',
                                fontWeight: '500',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
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
                                    openModal(sofa);
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
        </section>
    );
};

export default SofaGrid;

