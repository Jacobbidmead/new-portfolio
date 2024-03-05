import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/FloatingNav.css";
import { useNavigate } from "react-router-dom";

const FloatingNav = ({ scrollToSection }) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [navOpacity, setNavOpacity] = useState("rgba(114, 114, 114, 0)");
  const [navBorder, setNavBorder] = useState("none");
  const navigate = useNavigate(); // Use the useNavigate hook here

  const backgroundX = activeButtonIndex !== null ? `${activeButtonIndex * 100}%` : "0%";
  const buttons = ["About", "Skillset", "Projects", "Contact", "Photo"];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setNavOpacity("rgba(114, 114, 114, 0.2)");
        setNavBorder("1px solid #404040b5");
      } else {
        setNavOpacity("rgba(114, 114, 114, 0)");
        setNavBorder("none");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleButtonClick = (index, label) => {
    if (label === "Photo") {
      navigate("/Photo");
    } else {
      setActiveButtonIndex(index);
      scrollToSection(label.toLowerCase());
    }
  };

  return (
    <div className="floating-nav-container">
      <div className="floating-nav" style={{ backgroundColor: navOpacity, border: navBorder }}>
        {buttons.map((label, index) => (
          <div
            key={label}
            className="fn-links"
            onClick={() => handleButtonClick(index, label)}
            style={{
              position: "relative",
              width: "20%",
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
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 250, damping: 25 }}
          style={{
            position: "absolute",
            width: "19.5%",
            height: "64%",
            backgroundColor: "rgba(114, 114, 114, 0.2)",
            borderRadius: "30px",
          }}
        />
      </div>
    </div>
  );
};

export default FloatingNav;
