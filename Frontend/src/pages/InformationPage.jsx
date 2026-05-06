import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const InformationPage = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    const sectionStyle = {
        padding: '80px 0',
        borderBottom: '1px solid #eee'
    };

    const titleStyle = {
        fontSize: '32px',
        fontFamily: "'Playfair Display', serif",
        color: 'var(--color-primary)',
        marginBottom: '24px'
    };

    const textStyle = {
        lineHeight: '1.8',
        color: '#666',
        fontSize: '16px',
        marginBottom: '16px'
    };

    return (
        <div className="information-page">
            {/* Header */}
            <section style={{
                padding: '60px 0',
                backgroundColor: '#FAF9F6',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{
                        fontSize: '48px',
                        fontFamily: "'Playfair Display', serif",
                        color: 'var(--color-primary)'
                    }}>Help & Information</h1>
                </div>
            </section>

            {/* Furniture Care */}
            <section id="furniture-care" style={sectionStyle}>
                <div className="container">
                    <h2 style={titleStyle}>Furniture Care</h2>
                    <p style={textStyle}>
                        DesignCraft furniture is built to last a lifetime. To ensure your pieces remain in pristine condition, we recommend the following care instructions:
                    </p>
                    <ul style={{ ...textStyle, paddingLeft: '20px' }}>
                        <li><strong>Dusting:</strong> Use a soft, lint-free cloth to dust regularly. Avoid using silicone-based sprays.</li>
                        <li><strong>Avoid Direct Sunlight:</strong> Prolonged exposure to direct sunlight can cause wood to fade or crack.</li>
                        <li><strong>Temperature Control:</strong> Keep furniture away from heat sources like radiators or air vents.</li>
                        <li><strong>Liquid Spills:</strong> Blot spills immediately with a dry cloth. Use coasters for hot and cold drinks.</li>
                        <li><strong>Cleaning:</strong> For deeper cleaning, use a damp cloth with mild soap, followed immediately by a dry cloth.</li>
                    </ul>
                </div>
            </section>

            {/* Our Process */}
            <section id="our-process" style={sectionStyle}>
                <div className="container">
                    <h2 style={titleStyle}>Our Process</h2>
                    <p style={textStyle}>
                        Crafting a piece of DesignCraft furniture involves several stages of meticulous work by our master artisans:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginTop: '30px' }}>
                        {[
                            { step: '1. Sourcing', desc: 'Selection of premium, sustainably harvested hardwoods like Teak and Sheesham.' },
                            { step: '2. Seasoning', desc: 'Kiln-drying the wood to the perfect moisture content to prevent warping.' },
                            { step: '3. Joinery', desc: 'Using traditional dovetail and mortise-and-tenon joints for maximum strength.' },
                            { step: '4. Finishing', desc: 'Sand-finishing by hand and applying multi-layer eco-friendly polishes.' }
                        ].map((item, index) => (
                            <div key={index} style={{ padding: '20px', backgroundColor: '#FAF9F6', borderRadius: '12px' }}>
                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '10px' }}>{item.step}</h4>
                                <p style={{ fontSize: '14px', color: '#666' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section id="faqs" style={sectionStyle}>
                <div className="container">
                    <h2 style={titleStyle}>Frequently Asked Questions</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {[
                            { q: "Do you offer customization?", a: "Yes, we offer customization on select sofa sets and wardrobes. Please visit our showroom to discuss your requirements." },
                            { q: "What kind of wood do you use?", a: "We primarily work with Solid Teak, Sheesham (Indian Rosewood), and premium Walnut." },
                            { q: "Do you provide home delivery?", a: "Yes, we provide professional home delivery and assembly services across Hyderabad and neighboring regions." },
                            { q: "What is the warranty on your furniture?", a: "We provide a 5-year warranty against any manufacturing defects on all our solid wood furniture." }
                        ].map((faq, index) => (
                            <div key={index}>
                                <h4 style={{ fontSize: '18px', color: 'var(--color-primary)', marginBottom: '8px' }}>Q: {faq.q}</h4>
                                <p style={{ color: '#666' }}>A: {faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Privacy Policy */}
            <section id="privacy-policy" style={sectionStyle}>
                <div className="container">
                    <h2 style={titleStyle}>Privacy Policy</h2>
                    <p style={textStyle}>
                        Your privacy is important to us. It is DesignCraft's policy to respect your privacy regarding any information we may collect from you across our website.
                    </p>
                    <p style={textStyle}>
                        We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
                    </p>
                    <p style={textStyle}>
                        We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
                    </p>
                </div>
            </section>

            {/* Terms & Conditions */}
            <section id="terms-&-conditions" style={{ ...sectionStyle, borderBottom: 'none' }}>
                <div className="container">
                    <h2 style={titleStyle}>Terms & Conditions</h2>
                    <p style={textStyle}>
                        By accessing our website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                    </p>
                    <p style={textStyle}>
                        The materials on DesignCraft's website are provided on an 'as is' basis. DesignCraft makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, or fitness for a particular purpose.
                    </p>
                    <p style={textStyle}>
                        In no event shall DesignCraft be liable for any damages arising out of the use or inability to use the materials on our website.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default InformationPage;
