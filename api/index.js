const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email sending route
app.post('/api/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Create a transporter using your email service (e.g., Gmail)
    // NOTE: For Gmail, you need to use an "App Password" if 2FA is enabled.
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER, // Sender address (must be your authenticated email)
        to: process.env.EMAIL_USER,   // Receiver address (you want to receive the email)
        replyTo: email,               // Reply to the user's email
        subject: `New Contact Form Submission: ${subject}`,
        text: `
You have a new message from your website contact form:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email. Please check server logs.' });
    }
});

// Booking email route
app.post('/api/book', async (req, res) => {
    const { name, location, phone, email, product } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to yourself
        replyTo: email,
        subject: `New Furniture Booking: ${product.name}`,
        html: `
            <h2>New Booking Request</h2>
            <p><strong>Product:</strong> ${product.name}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Product Image:</strong> <a href="${product.image}">View Image</a></p>
            <hr />
            <h3>Customer Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <br />
            <p>Please contact the customer to confirm the order.</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Booking email sent successfully');
        res.status(200).json({ message: 'Booking request sent successfully!' });
    } catch (error) {
        console.error('Error sending booking email:', error);
        res.status(500).json({ message: 'Failed to send booking request.' });
    }
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;
