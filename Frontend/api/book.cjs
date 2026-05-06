const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

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
        to: process.env.EMAIL_USER,
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
        res.status(200).json({ message: 'Booking request sent successfully!' });
    } catch (error) {
        console.error('Error sending booking email:', error);
        res.status(500).json({ message: 'Failed to send booking request.' });
    }
});

module.exports = app;
