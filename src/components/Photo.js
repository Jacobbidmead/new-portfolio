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
        <div className="photo-nav">
          <ArrowIconComponent />
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
      </div>
    </>
  );
};

export default Photo;
