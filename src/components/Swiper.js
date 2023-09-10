import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

const ImageSwiper = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <>
      <div className="image-slider">
        <img
          src={images[currentImageIndex]}
          alt="slider"
          className="swiper-img"
        />
        <div className="swiper-buttons">
          <motion.div className="arrow-icons">
            <ArrowBackIcon className="back-arrow" onClick={previousImage} />
          </motion.div>
          <motion.div className="arrow-icons">
            <ArrowForwardIcon className="forward-arrow" onClick={nextImage} />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ImageSwiper;
