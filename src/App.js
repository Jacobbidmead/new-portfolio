import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav.js";
import TextBlur from "./components/TextBlur.js";

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
        <Nav />
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
            applications with JavaScript, TypeScript, React & Next.js. My
            journey began with curiosity about the digital world and has evolved
            into a career, where I utilize my problem-solving skills to create
            intuative and responsive web applications.
          </p>
        </div>
      </div>
      <div className="">
        <span>My Stack</span>
      </div>
    </>
  );
};

export default App;
