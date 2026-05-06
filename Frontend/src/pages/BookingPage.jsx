import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state?.product; // Get product if passed

    const [formData, setFormData] = useState({
        name: '',
        location: '',
        phone: '',
        email: ''
    });

    const [bookingStatus, setBookingStatus] = useState({
        loading: false,
        success: false,
        error: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setBookingStatus({ loading: true, success: false, error: '' });

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/book`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, product })
            });
            const data = await response.json();

            if (response.ok) {
                setBookingStatus({ loading: false, success: true, error: '' });
                // Scroll to top to show success message
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                setBookingStatus({
                    loading: false,
                    success: false,
                    error: data.message || "Failed to submit booking. Please try again."
                });
            }
        } catch (error) {
            console.error("Error submitting booking:", error);
            setBookingStatus({
                loading: false,
                success: false,
                error: "Network error. Please check your connection and try again."
            });
        }
    };

    return (
        <section className="container" style={{ padding: '120px 20px 80px', minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Success Message Banner */}
            {bookingStatus.success && (
                <div style={{
                    position: 'fixed',
                    top: '100px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#10b981',
                    color: 'white',
                    padding: '20px 40px',
                    borderRadius: '12px',
                    boxShadow: '0 10px 40px rgba(16, 185, 129, 0.3)',
                    zIndex: 9999,
                    maxWidth: '90%',
                    width: '500px',
                    textAlign: 'center',
                    animation: 'slideDown 0.5s ease-out'
                }}>
                    <div style={{ fontSize: '32px', marginBottom: '10px' }}>✓</div>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '22px', fontWeight: 'bold' }}>Booking Confirmed!</h3>
                    <p style={{ margin: '0 0 15px 0', fontSize: '15px', opacity: 0.95 }}>
                        We've received your booking request. Check your email for confirmation details.
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        style={{
                            backgroundColor: 'white',
                            color: '#10b981',
                            border: 'none',
                            padding: '10px 24px',
                            borderRadius: '6px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            fontSize: '14px'
                        }}
                    >
                        Back to Home
                    </button>
                </div>
            )}

            {/* Error Message Banner */}
            {bookingStatus.error && (
                <div style={{
                    position: 'fixed',
                    top: '100px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#ef4444',
                    color: 'white',
                    padding: '20px 40px',
                    borderRadius: '12px',
                    boxShadow: '0 10px 40px rgba(239, 68, 68, 0.3)',
                    zIndex: 9999,
                    maxWidth: '90%',
                    width: '500px',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '36px', marginBottom: '10px' }}>⚠</div>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '20px', fontWeight: 'bold' }}>Booking Failed</h3>
                    <p style={{ margin: 0, fontSize: '14px', opacity: 0.95 }}>{bookingStatus.error}</p>
                </div>
            )}

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                maxWidth: '1200px',
                width: '100%',
                backgroundColor: '#fff',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                borderRadius: '20px',
                overflow: 'hidden'
            }}>
                {/* Left Side - Text */}
                <div style={{
                    flex: '1 1 400px',
                    padding: '60px',
                    backgroundColor: 'var(--color-primary)', // Using the brown/primary color
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', marginBottom: '24px' }}>
                        Custom Furniture & Booking
                    </h2>
                    <p style={{ fontSize: '18px', lineHeight: '1.8', opacity: 0.9 }}>
                        Here at our manufacturing store, we can design any furniture to match your unique vision and ideas.
                        We also feature an extensive collection of demos for you to explore.
                    </p>
                    <p style={{ fontSize: '18px', lineHeight: '1.8', marginTop: '20px', fontWeight: 'bold' }}>
                        Book your product now, and our expert team will get back to you within hours to discuss your requirements.
                    </p>
                    <p style={{ fontSize: '18px', lineHeight: '1.8', marginTop: '10px' }}>
                        For demos, please call: <strong>+91 93926 42078</strong>
                    </p>

                    {product && (
                        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                            <p style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>You are booking:</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '12px' }}>
                                <img src={product.image} alt={product.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
                                <div>
                                    <h4 style={{ margin: 0, fontSize: '16px' }}>{product.name}</h4>
                                    <p style={{ margin: 0, fontSize: '14px', opacity: 0.9 }}>{product.price}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Side - Form */}
                <div style={{
                    flex: '1 1 400px',
                    padding: '60px',
                    backgroundColor: '#fff'
                }}>
                    <h3 style={{ fontSize: '24px', marginBottom: '32px', color: '#333' }}>Enter Your Details</h3>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', color: '#666', fontSize: '14px', fontWeight: '500' }}>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #e0e0e0', outline: 'none', fontSize: '16px' }}
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', color: '#666', fontSize: '14px', fontWeight: '500' }}>Location / Address</label>
                            <input
                                type="text"
                                name="location"
                                required
                                value={formData.location}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #e0e0e0', outline: 'none', fontSize: '16px' }}
                                placeholder="City, Area, or Full Address"
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', color: '#666', fontSize: '14px', fontWeight: '500' }}>Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #e0e0e0', outline: 'none', fontSize: '16px' }}
                                placeholder="+91 93926 42078"
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', color: '#666', fontSize: '14px', fontWeight: '500' }}>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #e0e0e0', outline: 'none', fontSize: '16px' }}
                                placeholder="john@example.com"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={bookingStatus.loading}
                            style={{
                                marginTop: '16px',
                                padding: '16px',
                                backgroundColor: bookingStatus.loading ? '#999' : 'var(--color-primary)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: bookingStatus.loading ? 'not-allowed' : 'pointer',
                                transition: 'transform 0.2s',
                                opacity: bookingStatus.loading ? 0.7 : 1
                            }}
                            onMouseOver={(e) => !bookingStatus.loading && (e.target.style.transform = 'translateY(-2px)')}
                            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                        >
                            {bookingStatus.loading ? 'Processing...' : 'Confirm Booking'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BookingPage;
