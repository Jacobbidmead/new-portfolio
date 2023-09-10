import React, { useState } from "react";
import { motion } from "framer-motion";
import ReturnTop from "./ReturnTop";
// import Asset from "./Asset";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://jacobbidmead.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        alert("Email sent successfully");
      } else {
        alert("Error sending email");
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <section>
      <div className="contact-container">
        <div className="contact-asset">{/* <Asset /> */}</div>
        <div className="contact">
          <form onSubmit={handleSubmit}>
            <div className="contact-text">
              <textarea
                name="message"
                placeholder="To discuss a project or comission, send me a message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputs">
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="button-container">
              <motion.button
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                type="submit"
              >
                Send
              </motion.button>
              <ReturnTop />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
