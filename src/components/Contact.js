import React from "react";
import { motion } from "framer-motion";
import ReturnTop from "./ReturnTop";
// import Asset from "./Asset";

const Contact = () => {
  return (
    <section>
      <div className="contact-container">
        <div className="contact-asset">{/* <Asset /> */}</div>
        <div className="contact">
          <form
            action="https://formsubmit.co/9cc5775898fe7b24b684bc331c8d80c2"
            method="POST"
          >
            <div className="contact-text">
              <textarea
                name="message"
                placeholder="To discuss a project or comission, send me a message..."
                required
              />
            </div>
            <div className="inputs">
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
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
