import { motion } from "framer-motion";

const boxAnimate = {
  offscreen: { y: 200, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      bounce: 0.5,
      duration: 1,
    },
  },
};

const Contact = () => {
  return (
    <>
      {" "}
      <section>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={boxAnimate}
          viewport={{ once: true, amount: 0.3 }}
          className="contact"
        >
          <div>To discuss a project or collaboration, send an email to </div>
          <div className="email underline-effect">
            jacob.bidmead.fullstack@outlook.com
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
