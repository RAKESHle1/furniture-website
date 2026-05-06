const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Reusable Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log('SMTP Connection Error:', error);
    } else {
        console.log('Server is ready to send emails');
    }
});

// HTML Template Helper
const createEmailTemplate = (title, content, isInternal = false) => `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
    body { font-family: 'Helvetica', 'Arial', sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
    .email-container { max-width: 600px; margin: 0 auto; background-color: #ffffff; overflow: hidden; font-size: 16px; color: #333333; line-height: 1.6; }
    .header { background-color: #4A3B32; padding: 25px 30px; display: flex; align-items: center; justify-content: space-between; }
    .logo-container { background-color: white; padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 65px; height: 65px; flex-shrink: 0; }
    .logo { max-width: 100%; max-height: 100%; object-fit: contain; }
    .brand-text { flex-grow: 1; margin-left: 20px; text-align: right; }
    .brand-text h1 { margin: 0; font-family: 'Times New Roman', serif; font-size: 22px; letter-spacing: 2px; text-transform: uppercase; font-weight: bold; color: #ffffff; line-height: 1.2; }
    .sub-header { font-size: 11px; letter-spacing: 1px; opacity: 0.9; margin-top: 5px; text-transform: uppercase; color: #D4AF37; }
    .content { padding: 40px 30px; }
    .h2-title { color: #4A3B32; font-size: 22px; margin-top: 0; margin-bottom: 20px; border-bottom: 2px solid #D4AF37; padding-bottom: 10px; display: inline-block; font-family: 'Times New Roman', serif; }
    .product-card { background-color: #FAFAF5; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; margin: 25px 0; }
    .product-card table { width: 100%; border-collapse: collapse; }
    .product-image-container { width: 120px; height: 120px; background-color: #ddd; border-radius: 6px; overflow: hidden; vertical-align: top; padding-right: 20px; }
    .product-image { width: 120px; height: 120px; object-fit: cover; display: block; border-radius: 6px; }
    .product-details { vertical-align: top; padding-left: 15px; }
    .product-name { margin: 0 0 8px 0; color: #4A3B32; font-size: 18px; font-weight: bold; line-height: 1.3; }
    .product-price { margin: 0; color: #D4AF37; font-weight: bold; font-size: 16px; }
    .info-table { width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 15px; }
    .info-table td { padding: 12px 0; border-bottom: 1px solid #eee; }
    .info-table td.label { font-weight: bold; color: #666; width: 35%; }
    .info-table td.value { color: #333; }
    .footer { background-color: #2D2D2D; color: #ffffff; padding: 30px 20px; text-align: center; font-size: 13px; }
    .footer p { margin: 5px 0; opacity: 0.8; }
    .footer strong { color: #D4AF37; }
    .button { display: inline-block; background-color: #4A3B32; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; font-weight: bold; margin-top: 20px; }
    @media only screen and (max-width: 480px) {
        .content { padding: 20px; }
        .header { flex-direction: column; text-align: center; }
        .brand-text { margin-left: 0; margin-top: 15px; text-align: center; }
        .product-card { flex-direction: column; text-align: center; }
        .product-image-container { margin: 0 auto 15px; }
    }
</style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <div class="logo-container">
                <img src="https://designcraftfurniture.in/DCF_logo.png" alt="DCF" class="logo" />
            </div>
            <div class="brand-text">
                <h1>DESIGN CRAFT FURNITURE</h1>
                <div class="sub-header">Premium Custom Furniture</div>
            </div>
        </div>
        
        <!-- Content -->
        <div class="content">
            <h2 class="h2-title">${title}</h2>
            ${content}
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>Need assistance? Contact us anytime.</p>
            <p>Call: <strong>+91 93926 42078</strong></p>
            <p>Email: <strong>designcraftsf@gmail.com</strong></p>
            <div style="margin-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px;">
                <p>&copy; ${new Date().getFullYear()} Design Craft Furniture. All rights reserved.</p>
            </div>
        </div>
    </div>
</body>
</html>
`;

// Contact Form Email Route
app.post('/api/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    const content = `
        <p>You have received a new inquiry via the website contact form.</p>
        <table class="info-table">
            <tr><td class="label">Name:</td><td class="value">${name}</td></tr>
            <tr><td class="label">Email:</td><td class="value">${email}</td></tr>
            <tr><td class="label">Subject:</td><td class="value">${subject}</td></tr>
        </table>
        <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #D4AF37; margin-top: 20px;">
            <strong>Message:</strong><br/>
            ${message.replace(/\n/g, '<br>')}
        </div>
    `;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `New Inquiry: ${subject}`,
        html: createEmailTemplate('New Contact Inquiry', content, true)
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email.' });
    }
});

// Booking Email Route
app.post('/api/book', async (req, res) => {
    const { name, location, phone, email, product } = req.body;

    // Validation
    if (!name || !location || !phone || !email) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    if (!product || !product.name || !product.price) {
        return res.status(400).json({ message: 'Product information is missing.' });
    }

    console.log(`Received booking request from ${name} for ${product.name}`);

    // Convert relative image URLs to absolute URLs for email
    const FRONTEND_URL = 'https://designcraftfurniture.in';
    let productImage = product.image || '';

    // If the image is a relative path (starts with /), make it absolute
    if (productImage && productImage.startsWith('/')) {
        productImage = `${FRONTEND_URL}${productImage}`;
    } else if (productImage && !productImage.startsWith('http')) {
        // If it's not a full URL and doesn't start with /, add frontend URL
        productImage = `${FRONTEND_URL}/${productImage}`;
    }

    console.log('Product image URL:', productImage);

    // 1. Email to Admin
    const adminContent = `
        <p>A customer has requested a booking for a product. Please review the details below.</p>
        
        <div class="product-card">
            <table>
                <tr>
                    <td class="product-image-container">
                        ${productImage ? `<img src="${productImage}" class="product-image" alt="Product" />` : '<div style="width:120px;height:120px;background:#ccc;border-radius:6px;"></div>'}
                    </td>
                    <td class="product-details">
                        <div class="product-name">${product.name}</div>
                        <div class="product-price">${product.price}</div>
                    </td>
                </tr>
            </table>
        </div>

        <table class="info-table">
            <tr><td class="label">Customer Name:</td><td class="value">${name}</td></tr>
            <tr><td class="label">Email Address:</td><td class="value">${email}</td></tr>
            <tr><td class="label">Phone Number:</td><td class="value">${phone}</td></tr>
            <tr><td class="label">Delivery Location:</td><td class="value">${location}</td></tr>
        </table>

        <p style="margin-top: 20px;"><strong>Action Required:</strong> Please contact the customer at <strong>${phone}</strong> to confirm the order details.</p>
    `;

    const adminMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `New Booking: ${product.name} - ${name}`,
        html: createEmailTemplate('New Booking Request', adminContent, true)
    };

    // 2. Email to User
    const userContent = `
        <p>Dear <strong>${name}</strong>,</p>
        <p>Thank you for choosing <strong>Design Craft Furniture</strong>! We have successfully received your booking request.</p>
        
        <div class="product-card">
            <table>
                <tr>
                    <td class="product-image-container">
                        ${productImage ? `<img src="${productImage}" class="product-image" alt="Product" />` : '<div style="width:120px;height:120px;background:#ccc;border-radius:6px;"></div>'}
                    </td>
                    <td class="product-details">
                        <div class="product-name">${product.name}</div>
                        <div class="product-price">${product.price}</div>
                    </td>
                </tr>
            </table>
        </div>

        <p>We have recorded your delivery details:</p>
        <table class="info-table">
            <tr><td class="label">Location:</td><td class="value">${location}</td></tr>
            <tr><td class="label">Contact:</td><td class="value">${phone}</td></tr>
        </table>

        <p><strong>What's Next?</strong><br/>
        Our expert team will review your request and get back to you shortly at <strong>${phone}</strong> to finalize the order, discuss any customizations, and arrange delivery.</p>
        
        <p>If you have any questions in the meantime, please reply to this email or verify the contact details in the footer.</p>
    `;

    const userMailOptions = {
        from: `"Design Craft Furniture" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Booking Received - ${product.name}`,
        html: createEmailTemplate('Booking Confirmation', userContent, false)
    };

    try {
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userMailOptions)
        ]);
        console.log('✅ Booking emails sent successfully to Admin and User.');
        res.status(200).json({
            success: true,
            message: 'Booking request sent successfully!'
        });
    } catch (error) {
        console.error('❌ Error sending booking emails:', error);
        console.error('Error details:', error.message);
        res.status(500).json({
            success: false,
            message: 'Failed to send booking confirmation. Please try again or call us directly.'
        });
    }
});

// Health check endpoint
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Design Craft Furniture API is running!',
        endpoints: {
            contact: 'POST /api/send-email',
            booking: 'POST /api/book'
        }
    });
});


if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;
