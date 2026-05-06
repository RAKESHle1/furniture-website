import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = React.useState({ loading: false, success: false, error: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: '' });

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({ loading: false, success: true, error: '' });
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
            } else {
                const data = await response.json();
                setStatus({ loading: false, success: false, error: data.message || 'Failed to send message.' });
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus({ loading: false, success: false, error: 'Network error. Please try again later.' });
        }
    };

    return (
        <div className="contact-page">
            {/* Header */}
            <section style={{
                padding: '80px 0 40px',
                textAlign: 'center',
                backgroundColor: '#FAF9F6'
            }}>
                <div className="container">
                    <h1 style={{
                        fontSize: '48px',
                        fontFamily: "'Playfair Display', serif",
                        color: 'var(--color-primary)',
                        marginBottom: '16px'
                    }}>Get In Touch</h1>
                    <p style={{ color: '#666', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
                        Have questions about our furniture or need assistance? Our team is here to help.
                    </p>
                </div>
            </section>

            <section className="container" style={{ padding: '80px 20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px' }}>
                    {/* Contact Info */}
                    <div>
                        <h2 style={{ fontSize: '32px', fontFamily: "'Playfair Display', serif", color: 'var(--color-primary)', marginBottom: '32px' }}>
                            Visit Our Showroom
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '12px',
                                    backgroundColor: 'rgba(234, 88, 12, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <MapPin color="var(--color-accent)" size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '18px', marginBottom: '8px' }}>Our Location</h4>
                                    <p style={{ color: '#666', lineHeight: '1.6' }}>
                                        Polt No 15, Opposite Mahammadia Masjid,<br />
                                        Martanda Nagar Main Road, Hafeezpet,<br />
                                        Hyderabad-500049, Telangana
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '12px',
                                    backgroundColor: 'rgba(234, 88, 12, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <Phone color="var(--color-accent)" size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '18px', marginBottom: '8px' }}>Call Us</h4>
                                    <p style={{ color: '#666' }}>+91 93926 42078</p>
                                    <p style={{ color: '#666', fontSize: '14px' }}>Mon - Sat, 9am - 9pm</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '12px',
                                    backgroundColor: 'rgba(234, 88, 12, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <Mail color="var(--color-accent)" size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '18px', marginBottom: '8px' }}>Email Us</h4>
                                    <p style={{ color: '#666' }}>designcraftsf@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div style={{
                        backgroundColor: '#fff',
                        padding: '40px',
                        borderRadius: '24px',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
                    }}>
                        <h2 style={{ fontSize: '28px', color: 'var(--color-primary)', marginBottom: '24px' }}>Send a Message</h2>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '14px', fontWeight: 600 }}>Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                        style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd' }}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '14px', fontWeight: 600 }}>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                        style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd' }}
                                    />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '14px', fontWeight: 600 }}>Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Inquiry about Wooden Sofa"
                                    required
                                    style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd' }}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '14px', fontWeight: 600 }}>Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="How can we help you?"
                                    required
                                    style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd', resize: 'none' }}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status.loading}
                                style={{
                                    backgroundColor: status.loading ? '#ccc' : 'var(--color-accent)',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '16px',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    marginTop: '10px'
                                }}>
                                {status.loading ? 'Sending...' : 'Send Message'}
                            </button>
                            {status.success && <p style={{ color: 'green', marginTop: '10px' }}>Message sent successfully!</p>}
                            {status.error && <p style={{ color: 'red', marginTop: '10px' }}>{status.error}</p>}
                        </form>
                    </div>
                </div>
            </section>

            <style>{`
                @media (max-width: 768px) {
                    h1 {
                        font-size: 32px !important;
                    }
                    h2 {
                        font-size: 24px !important;
                    }
                    .container {
                        padding-left: 15px !important;
                        padding-right: 15px !important;
                    }
                    /* Form name/email row */
                    div[style*="grid-template-columns: 1fr 1fr"] {
                        grid-template-columns: 1fr !important;
                        gap: 20px !important;
                    }
                    /* Form padding */
                    div[style*="padding: 40px"] {
                        padding: 24px !important;
                    }
                    /* Main grid fix */
                    div[style*="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))"] {
                        gap: 40px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default ContactPage;
