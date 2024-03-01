import React from "react";
import { motion } from "framer-motion";
import ReturnTop from "./ReturnTop";

const Contact = () => {
  return (
    <section>
      <div className="contact-container">
        <div className="contact-message">Contact</div>
        <div className="contact">
          <form action="https://formsubmit.co/9cc5775898fe7b24b684bc331c8d80c2" method="POST">
            <div className="contact-text">
              <textarea name="message" placeholder="" required />
            </div>
            <div className="inputs">
              <div>
                <input type="text" name="subject" placeholder="Subject" required />
              </div>
              <div>
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div>
                <input type="email" name="email" placeholder="Email" required />
              </div>
            </div>
            <div className="button-container">
              <motion.button
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                type="submit"
                className="send-button">
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
