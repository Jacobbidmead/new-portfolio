const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3001;

// Load environment variables for email and password
const myEmail = process.env.OUTLOOK_EMAIL; // Make sure to set this in your .env file
const myPassword = process.env.OUTLOOK_PASS; // Make sure to set this in your .env file
console.log(myEmail, myPassword);

app.use(express.json()); // Middleware for parsing JSON data from incoming requests
app.use(cors()); // Middleware for handling CORS issues

app.post("/send-email", async (req, res) => {
  try {
    const { email, subject, message } = req.body;

    // Configure nodemailer with Outlook SMTP settings
    let transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com", // Outlook SMTP server
      port: 587,
      secure: false, // upgrade later with STARTTLS
      auth: {
        user: myEmail, // Your Outlook email from .env
        pass: myPassword, // Your App Password from .env
      },
      tls: {
        ciphers: "SSLv3",
      },
    });

    // Mail options
    let mailOptions = {
      from: myEmail, // Your Outlook email
      to: email,
      subject: subject,
      text: message,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send success response
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
