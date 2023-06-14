// import Room from "./components/spline";
import Nav from "./components/Nav.js";
import "./App.css";
import { useState, useEffect } from "react";
import TextBlur from "./components/TextBlur.js";

const colors = ["rgb(10, 26, 99)", "#FFC0CB", "#FFDAB9"];

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
      <div className="welcome">
        <p className="word">WELCOME TO MY HOME</p>
      </div>
    </>
  );
};

export default App;
