import { React, useState, useEffect } from "react";

const TextBlur = () => {
  const [scrollPosition, setScrollPoistion] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPoistion(positon > scrollPosition ? "down" : "up");
    setScrollPoistion(postion);
  };

  return <></>;
};

export default TextBlur;
