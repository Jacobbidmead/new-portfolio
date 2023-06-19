import React, { useState, useEffect } from "react";
import "./App.css";
import { motion } from "framer-motion";
import Nav from "./components/Nav.js";
import TextBlur from "./components/TextBlur.js";
import VueIconComponent from "./components/VueIcon";
import JsIconComponet from "./components/JsIcon";
import MongoDbIconComponent from "./components/MongoDbIcon";
import NextIconComponent from "./components/NextIcon";
import ReactIconComponent from "./components/ReactIcon";
import TsIconComponent from "./components/TsIcon";
import NodeIconComponent from "./components/NodeIcon";

const boxAnimate = {
  offscreen: { y: 100, opacity: 0 },
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
        <div className="contents-container">
          <TextBlur />
        </div>
      </div>
      <div className="welcome-container">
        <div className="welcome">
          <p className="about">
            Im creative front end developer with an interest in{" "}
            <span className="highlight-1">UX/UI design,</span>
            <span className="highlight-2"> 3D imaging</span> and{" "}
            <span className="highlight-3"> photography.</span> I build web
            applications with TypeScript, Vue & React. My journey started with
            haiku academys full stack web development bootcamp, which I
            completed in october 2022. since graduating, I have learnt to
            utilise my problem-solving skills to create intuative and responsive
            web applications. I have a creative background, studying print &
            time based media at UAL.
          </p>
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
        </motion.div>
      </div>
    </>
  );
};

export default App;
