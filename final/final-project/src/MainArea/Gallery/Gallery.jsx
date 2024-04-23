import { useRef, useState } from "react";
import "./Gallery.css";
import Button from "../../Button/Button";
import PropTypes from "prop-types";
import Model from "../Home/HomeGallery/Model/Model";
import images, { tabContents } from "./Images";

function Gallery() {
  const [model, setModel] = useState(false);
  const [currentImgSrc, setCurrentImgSrc] = useState("");
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const [activeTab, setActiveTab] = useState("America");
  const [currentImgSet, setCurrentImgSet] = useState(images.US);

  const galleryAreaRef = useRef(null);

  const buttonClick = (imgSet) => {
    setCurrentImgSet(imgSet);
    if (galleryAreaRef.current) {
      galleryAreaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getImage = (src, index) => {
    setCurrentImgSrc(src);
    setCurrentImgIndex(index);
    setModel(true);
  };

  const handleCloseModal = () => {
    setModel(false);
  };

  return (
    <>
      <h2 className="gallery__title">From..</h2>
      <div className="gallery__tabs">
        <ul>
          <li
            data-tabs="America"
            aria-label="Open the America tab"
            className={activeTab === "America" ? "active" : ""}
            onClick={() => setActiveTab("America")}
          >
            America
          </li>
          <li
            data-tabs="Asia"
            aria-label="Open the Asia tab"
            className={activeTab === "Asia" ? "active" : ""}
            onClick={() => setActiveTab("Asia")}
          >
            Asia
          </li>
          <li
            data-tabs="Europe"
            aria-label="Open the Europe tab"
            className={activeTab === "Europe" ? "active" : ""}
            onClick={() => setActiveTab("Europe")}
          >
            Europe
          </li>
        </ul>
      </div>

      <div className="gallery__cards">
        {tabContents[activeTab].map((card) => (
          <div key={card.id} className="gallery__card">
            <img
              className="gallery__card-pic"
              src={card.imgSrc}
              alt={card.alt}
            />
            <h3 className="gallery__card-title">{card.title}</h3>
            <p className="gallery__card-text">{card.text}</p>
            <Button
              className="gallery__card-button"
              visual="button"
              onClick={() => buttonClick(card.imgSet)}
              ariaLabel="Load more"
            >
              Load more
            </Button>
          </div>
        ))}
      </div>

      <Model
        isOpen={model}
        onClose={handleCloseModal}
        imgSrc={currentImgSrc}
        imgAlt={images[currentImgIndex]?.alt || " "}
        images={currentImgSet}
        currentImageIndex={currentImgIndex}
        setCurrentImgIndex={setCurrentImgIndex}
        setCurrentImgSrc={setCurrentImgSrc}
      />

      <div className="gallery__pic" ref={galleryAreaRef}>
        {currentImgSet.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            className="gallery__pic-item"
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

Gallery.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Gallery;
