import React, { useState, useEffect } from "react";
import "../styles/TextBlur.css";

const TextBlur = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollDirection(currentPosition > scrollPosition ? "down" : "up");
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      {" "}
      <div className={`text-container ${scrollPosition > 200 ? "blur" : ""}`}>
        <div className="contents-container">
          <div
            className={`name-container ${
              scrollDirection === "up" ? "front" : ""
            }`}
          >
            <div id="home-text">
              <div className="line line1">
                <div className="word">HI, </div>
                <p className="word">IM JACOB.</p>
              </div>

              <div className="line line2">
                <p className="word">I</p>
                <p className="word">MAKE THINGS</p>
              </div>

              <div className="line line3">
                <p className="word">FOR </p>
                <p className="word">THE WEB.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextBlur;
