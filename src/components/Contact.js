import { motion } from "framer-motion";
import UpIconComponent from "./Up";

const goToTop = () => {
  console.log("working");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Contact = () => {
  return (
    <>
      {" "}
      <section>
        <motion.div className="contact">
          <div className="contact-text">
            To discuss a project or collaboration, send an email to{" "}
          </div>
          <div className="email ">
            <span className="hover-underline-animation contact-text">
              {" "}
              jacob.bidmead.fullstack@outlook.com
            </span>
          </div>
        </motion.div>
      </section>
      <div className="return-top" onClick={goToTop}>
        <UpIconComponent onClick={goToTop} />
      </div>
    </>
  );
};

export default Contact;
