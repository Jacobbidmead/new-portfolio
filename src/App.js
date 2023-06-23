import React, { useState, useEffect } from "react";
import "./App.css";
import { motion } from "framer-motion";
import TextBlur from "./components/TextBlur.js";
import VueIconComponent from "./components/VueIcon";
import JsIconComponet from "./components/JsIcon";
import MongoDbIconComponent from "./components/MongoDbIcon";
import NextIconComponent from "./components/NextIcon";
import ReactIconComponent from "./components/ReactIcon";
import TsIconComponent from "./components/TsIcon";
import NodeIconComponent from "./components/NodeIcon";
import ThreejsIconComponent from "./components/Threejs";
import SimpleAccordion from "./components/Accordion";

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

const textAnimate = {
  offscreen: { y: 100 },
  onscreen: {
    y: 0,
    transition: {
      type: "tween",
      bounce: 0.5,
      duration: 1,
    },
  },
};

const colors = ["#FFC0CB", "#FFDAB9", "#FFFFE0", "#E0FFFF", "#D8BFD8"];

const App = () => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevColorIndex) => (prevColorIndex + 1) % colors.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div
        className="main-page-container"
        style={{ backgroundColor: colors[colorIndex] }}
      >
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={textAnimate}
          viewport={{ once: true, amount: 0.1 }}
          className="contents-container"
        >
          <TextBlur />
        </motion.div>
      </div>
      <div className="welcome-container">
        <div className="welcome">
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={textAnimate}
            viewport={{ once: true, amount: 0.1 }}
            className="about"
          >
            Im creative front end developer with an experience in{" "}
            <span className="highlight-1">UX/UI design,</span>
            <span className="highlight-2"> 3D imaging</span> and{" "}
            <span className="highlight-3"> photography.</span> I build web
            applications with TypeScript, React & Vue . My journey started with
            haiku academys full stack web development bootcamp, which I
            completed in october 2022. since graduating, I have learnt to
            utilise my problem-solving skills to create intuative and responsive
            web applications. I have a creative background, studying print &
            time based media at UAL.
          </motion.div>
        </div>
      </div>
      <div className="my-stack">
        {/* <div className="stack-header">My Stack</div> */}
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
      <div>
        <SimpleAccordion />
      </div>
    </>
  );
};

export default App;
