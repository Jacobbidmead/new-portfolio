import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/FloatingNav.css";

const FloatingNav = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);

  // Determine background position based on active button index
  const backgroundX = activeButtonIndex !== null ? `${activeButtonIndex * 100}%` : "0%";

  // Function to set the active button index
  const changeButtonColor = (index) => {
    setActiveButtonIndex(index);
  };

  const buttons = ["About", "Skillset", "Projects", "Contact", "Photo"];

  return (
    <div className="floating-nav-container">
      <div className="floating-nav">
        {buttons.map((label, index) => (
          <div
            key={label}
            className="fn-links"
            onClick={() => changeButtonColor(index)}
            style={{
              position: "relative",
              width: "20%", // This should match the background block width
              display: "inline-block",
              textAlign: "center",
            }}>
            {label}
          </div>
        ))}
        <motion.div
          className="background-block "
          initial={false}
          animate={{ x: backgroundX }}
          transition={{ type: "tween", duration: 0.3 }}
          style={{
            position: "absolute",
            width: "19.5%", // Assuming each button is 20% of the container width
            height: "64%",
            backgroundColor: "rgba(114, 114, 114, 0.3)",
            borderRadius: "30px",
          }}
        />
      </div>
    </div>
  );
};

export default FloatingNav;
