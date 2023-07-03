import { motion } from "framer-motion";
import UpIconComponent from "./Up";

// const boxAnimate = {
//   offscreen: { y: 200, opacity: 0 },
//   onscreen: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: "tween",
//       bounce: 0.5,
//       duration: 1,
//     },
//   },
// };

const goToTop = () => {
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
          <div>To discuss a project or collaboration, send an email to </div>
          <div className="email ">
            <span className="hover-underline-animation">
              {" "}
              jacob.bidmead.fullstack@outlook.com
            </span>
          </div>
        </motion.div>
      </section>
      <div onClick={goToTop} className="return-top">
        <UpIconComponent />
      </div>
    </>
  );
};

export default Contact;
