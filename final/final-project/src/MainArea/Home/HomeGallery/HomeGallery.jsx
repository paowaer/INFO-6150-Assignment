import { useState } from "react";
import "./HomeGallery.css";
import Model from "./Model/Model";
import images from "./Images";

function HomeGallery() {
  const [model, setModel] = useState(false);
  const [currentImgSrc, setCurrentImgSrc] = useState("");
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const getImage = (src, index) => {
    setModel(true);
    setCurrentImgSrc(src);
    setCurrentImgIndex(index);
  };

  const handleCloseModal = () => {
    setModel(false);
  };

  return (
    <>
      <Model
        isOpen={model}
        onClose={handleCloseModal}
        imgSrc={currentImgSrc}
        imgAlt={images[currentImgIndex]?.alt || " "}
        images={images}
        currentImageIndex={currentImgIndex}
        setCurrentImgIndex={setCurrentImgIndex}
        setCurrentImgSrc={setCurrentImgSrc}
      />
      <div className="home-gallery">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            className="home-gallery__pic"
            alt={image.alt}
            onClick={() => {
              getImage(image.src, index);
            }}
            tabIndex="0"
          />
        ))}
      </div>
    </>
  );
}

export default HomeGallery;
