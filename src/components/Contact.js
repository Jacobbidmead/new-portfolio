import React, { useState } from "react";
import { motion } from "framer-motion";
import UpIconComponent from "./Up";

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    // send formData to the server-side

    const response = await fetch("http://localhost:3001/send-email", {
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
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("http://localhost:3001/send-email", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     // Rest of your code
  //   } catch (error) {
  //     console.error("There was a problem with the fetch operation:", error);
  //   }

  // };

  return (
    <>
      <section>
        <motion.div className="contact">
          <div></div>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit">Send Email</button>
            </form>
          </div>
        </motion.div>
      </section>
      <div className="return-top" onClick={goToTop}>
        <UpIconComponent />
      </div>
    </>
  );
};

export default Contact;
