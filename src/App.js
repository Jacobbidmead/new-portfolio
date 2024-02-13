import React, { useState, useEffect } from "react";
import "./App.css";
import { motion } from "framer-motion";
import VueIconComponent from "./components/VueIcon";
import JsIconComponet from "./components/JsIcon";
import MongoDbIconComponent from "./components/MongoDbIcon";
import NextIconComponent from "./components/NextIcon";
import ReactIconComponent from "./components/ReactIcon";
import TsIconComponent from "./components/TsIcon";
import NodeIconComponent from "./components/NodeIcon";
import ThreejsIconComponent from "./components/Threejs";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Burger from "./components/Burger";
import StarsSvg from "./components/Stars";
import Projects from "./components/Projects";

const isMobile = window.innerWidth < 601;

const boxAnimate = isMobile
  ? {
      offscreen: { y: 0, opacity: 1 },
      onscreen: { y: 0, opacity: 1 },
    }
  : {
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

const boxAnimateTop = isMobile
  ? {
      offscreen: { y: 0, opacity: 1 },
      onscreen: { y: 0, opacity: 1 },
    }
  : {
      offscreen: { y: 0, opacity: 0 },
      onscreen: {
        y: 50,
        opacity: 1,
        transition: {
          type: "tween",
          bounce: 0.5,
          duration: 1,
        },
      },
    };

const textAnimate = isMobile
  ? {
      offscreen: { y: 0 },
      onscreen: { y: 0 },
    }
  : {
      offscreen: { y: 200 },
      onscreen: {
        y: 0,
        transition: {
          type: "tween",
          bounce: 0.5,
          duration: 1,
        },
      },
    };

const App = () => {
  // Initial value for isMobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 601);
  const [backgroundColor, setBackgroundColor] = useState("rgb(4, 4, 4)");

  // Event listener function
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 601);
  };

  // Set up the event listener when the component mounts
  useEffect(() => {
    window.addEventListener("resize", checkMobile);

    // Cleanup the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []); // The empty array means this useEffect runs once when the component mounts.

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setBackgroundColor("rgb(12, 9, 16 )");
      } else setBackgroundColor("rgb(4, 4, 4)");
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div style={{ backgroundColor: backgroundColor }} className="bg">
        <div className="main-page-container">
          <img src="images/gradient.webp" alt="" className="hero-img" />
          {isMobile ? (
            <div>
              <Burger />{" "}
            </div>
          ) : null}
          <div className="hi-container">
            <div className="hi">Hi, Im Jacob</div>
            <div className="hi-lower">I make things for the web.</div>
          </div>
          <StarsSvg className="overlay-svg" />

          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={textAnimate}
            viewport={{ once: true, amount: 0.1 }}
            className="contents-container"
          ></motion.div>
        </div>
        <div>
          <div className="welcome-container">
            <div className="welcome">
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={textAnimate}
                viewport={{ once: true, amount: 0.1 }}
                className="about about-left"
              >
                <motion.div>
                  <p>
                    Im a creative Front End JavaScript developer with a passion
                    for design and creating intuatuive UI. I build web
                    applications with TypeScript, React & Next.js. Im also
                    experienced with Vue & Nuxt.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={boxAnimateTop}
                viewport={{ once: true, amount: 0.1 }}
                className="about about-center"
              >
                <motion.div>
                  <p>
                    {" "}
                    My journey started with Haiku Academy's full stack web
                    development bootcamp, which I completed in October 2022.
                    since graduating, I have learnt to utilise my
                    problem-solving skills to create intuative and responsive
                    web applications in a professional enviroment.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={boxAnimate}
                viewport={{ once: true, amount: 0.1 }}
                className="about about-right"
              >
                {" "}
                <div>
                  <p>
                    I have a creative background, studying print & time based
                    media at UAL. A passionate photographer & explorer, I have
                    documented my travels around the world over the last ten
                    years.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="my-stack">
            <div>
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={boxAnimate}
                viewport={{ once: true, amount: 0.3 }}
                className="icons"
              >
                <JsIconComponet />
                <TsIconComponent />
                <NextIconComponent />
                <ReactIconComponent />
                <NodeIconComponent />
                <VueIconComponent />
                <MongoDbIconComponent />
                <ThreejsIconComponent />
              </motion.div>
            </div>
          </div>
          <div>
            <Projects />
          </div>
          <div className="contact">
            <Contact />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
