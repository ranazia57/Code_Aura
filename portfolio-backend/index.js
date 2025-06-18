require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const faqs = require('./faqs.json');
const axios = require('axios');
const nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// === Chat Endpoint (Google Gemini) ===
app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;

  // Custom FAQ check
  const found = faqs.find(faq =>
    userMessage.toLowerCase().includes(faq.question.toLowerCase())
  );
  if (found) {
    return res.json({ answer: found.answer });
  }

  // Google Gemini API call
  try {
    const geminiRes = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GOOGLE_API_KEY}`,
      {
        contents: [
          { parts: [{ text: userMessage }] }
        ]
      }
    );
    // Gemini ka response thoda nested hota hai
    const answer = geminiRes.data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, no answer found.";
    res.json({ answer });
  } catch (err) {
    console.error('Gemini API Error:', err.response ? err.response.data : err.message);
    res.status(500).json({ answer: 'Sorry, something went wrong.' });
  }
});

// === Lead Capture Endpoint (same as before) ===
app.post('/api/lead', async (req, res) => {
  const { name, email, message } = req.body;

  // 1. PDF generate (in-memory)
  const doc = new PDFDocument();
  let buffers = [];
  doc.on('data', buffers.push.bind(buffers));
  doc.on('end', async () => {
    const pdfData = Buffer.concat(buffers);

    // 2. Email send (credentials from .env)
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Client Requirement (PDF)',
      text: `A new client has submitted their requirements.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      attachments: [
        {
          filename: 'client-requirement.pdf',
          content: pdfData
        }
      ]
    };

    try {
      await transporter.sendMail(mailOptions);
      res.json({ success: true, message: "PDF sent to your email!" });
    } catch (err) {
      console.error('Email Error:', err.response ? err.response.data : err.message);
      res.status(500).json({ success: false, message: "Email sending failed", error: err });
    }
  });

  // PDF content
  doc.fontSize(20).text('Client Requirement', { align: 'center' });
  doc.moveDown();
  doc.fontSize(14).text(`Name: ${name}`);
  doc.text(`Email: ${email}`);
  doc.moveDown();
  doc.text('Message/Requirements:');
  doc.text(message);
  doc.end();
});

app.listen(5000, () => console.log('Server running on port 5000'));