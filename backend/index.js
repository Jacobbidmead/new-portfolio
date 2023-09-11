require("dotenv").config();

const myEmail = process.env.OUTLOOK_EMAIL;
const myPassword = process.env.OUTLOOK_PASS;

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.post("/send-email", async (req, res) => {
  console.log("Endpoint hit");

  const { email, subject, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "Outlook365",
    auth: {
      user: myEmail,
      pass: myPassword,
    },
  });

  let mailOptions = {
    from: myEmail,
    to: email,
    subject: subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.log("Error in sending email:", error);
    res.status(500).send("Something went wrong");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
