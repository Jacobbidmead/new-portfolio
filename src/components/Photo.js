import React, { useState } from "react";
import "../styles/Photo.css";
import saImageData from "../imageData/saImageData";
import asiaImageData from "../imageData/asiaImageData";
import europeImageData from "../imageData/europeImageData";
import ArrowIconComponent from "./Arrow";
import ReturnTop from "./ReturnTop";
import { motion } from "framer-motion";

const saDescription =
  "South & Central America: September 2017 - March 2018. Countries exhibited: Peru, Bolivia, Colombia & Mexico ";
const asiaDescription = "Japan, Vietnam & South Korea: September - November 2019";
const europeDescription = "Life in Europe: 2014 - 2018 - London, Oslo, Palermo, Crete, Barcelona";

const Photo = () => {
  const [largePhoto, setLargePhoto] = useState("images/asia/tracks.png");
  const [allImages, setAllImages] = useState(asiaImageData);
  const [imgDescription, setImgDescription] = useState(asiaDescription);

  const changePic = (el) => {
    setLargePhoto(el);
  };

  const changeToAsia = () => {
    setLargePhoto("images/asia/umbrella.png");
    setAllImages(asiaImageData);
    setImgDescription(asiaDescription);
  };

  const changeToSa = () => {
    setLargePhoto("images/sa/train.png");
    setAllImages(saImageData);
    setImgDescription(saDescription);
  };

  const changeToEurope = () => {
    setLargePhoto("images/europe/chef.png");
    setAllImages(europeImageData);
    setImgDescription(europeDescription);
  };

  return (
    <>
      <div className="photo-view">
        <div className="photo-head-container">
          <ArrowIconComponent />
          <div className="photo-header">
            <span>Moments.</span>
          </div>
        </div>
        <div className="container">
          <div className="photo-container">
            {allImages.map((el, i) => (
              <div key={i} onMouseEnter={() => changePic(el)}>
                <img src={el} alt="" className="photo" />
              </div>
            ))}
          </div>
          <div className="large-photo-container">
            <img className="main-photo" src={largePhoto} alt="" />
            <div>
              <div className="img-description">{imgDescription}</div>
            </div>
          </div>
        </div>
        <div className="photo-nav">
          <motion.div
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={changeToAsia}
            className="change-photos">
            Far East
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={changeToSa}
            className="change-photos">
            Americas
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={changeToEurope}
            className="change-photos">
            Europe
          </motion.div>
        </div>
        <div className="quote">
          "Travel changes you, as you move through this life and this world you change things
          slightly, you leave marks behind, however small. And in return, life — and travel — leaves
          marks on you." <p> - Anthony Bourdain</p>{" "}
          <p className="quote-break">
            Over the last 10 years, I've been shooting street photography. Capturing moments from my
            life & travels; cultures, experiences, landscapes and compositions.
          </p>
          <p className="quote-break">
            {" "}
            Through my work, I attempt to describe my love of anthropology & discovering new
            cultures.
          </p>
          <small>Shot on Contax TVS III</small>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <ReturnTop />
        </div>
      </div>
    </>
  );
};

export default Photo;
