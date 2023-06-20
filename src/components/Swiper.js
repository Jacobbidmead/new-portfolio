import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
          <ArrowBackIcon className="back-arrow" onClick={previousImage} />
          <ArrowForwardIcon className="forward-arrow" onClick={nextImage} />
        </div>
      </div>
    </>
  );
};

export default ImageSwiper;
