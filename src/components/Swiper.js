import { useState } from "react";
import webstoreImg from "../imageData/webstoreImg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HomeSwiper = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    const newIndex =
      (currentImageIndex - 1 + webstoreImg.length) % webstoreImg.length;
    setCurrentImageIndex(newIndex);
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % webstoreImg.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <>
      <div className="image-slider">
        <img
          src={webstoreImg[currentImageIndex]}
          alt="slider"
          className="swiper-img"
        />
        <div className="swiper-buttons">
          <ArrowBackIcon className="back-arrow" onClick={previousImage}>
            Previous
          </ArrowBackIcon>
          <ArrowForwardIcon className="forward-arrow" onClick={nextImage}>
            Next
          </ArrowForwardIcon>
        </div>
      </div>
    </>
  );
};

export default HomeSwiper;
