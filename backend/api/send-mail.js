require("dotenv").config();
const nodemailer = require("nodemailer");

const myEmail = process.env.OUTLOOK_EMAIL;
const myPassword = process.env.OUTLOOK_PASS;

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

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
};
