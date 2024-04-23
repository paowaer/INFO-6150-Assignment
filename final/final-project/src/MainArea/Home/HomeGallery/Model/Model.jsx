import Button from "../../../../Button/Button";
import "./Model.css";
import PropTypes from "prop-types";

function Model({
  isOpen,
  onClose,
  imgSrc,
  imgAlt,
  images,
  currentImageIndex,
  setCurrentImgIndex,
  setCurrentImgSrc,
}) {
  const handleClick = (e) => {
    if (e === "left") {
      const previousIndex =
        (currentImageIndex - 1 + images.length) % images.length;
      setCurrentImgIndex(previousIndex);
      setCurrentImgSrc(images[previousIndex].src);
    } else if (e === "right") {
      const nextIndex = (currentImageIndex + 1 + images.length) % images.length;
      setCurrentImgIndex(nextIndex);
      setCurrentImgSrc(images[nextIndex].src);
    }
  };

  return (
    <div className={isOpen ? "model-open" : "model"}>
      <div className="model-content">
        <img src={imgSrc} alt={imgAlt} />

        <Button
          className="model-button model-arrow-left"
          onClick={() => handleClick("left")}
        >
          &lt;
        </Button>
        <Button
          className="model-button model-arrow-right"
          onClick={() => handleClick("right")}
        >
          &gt;
        </Button>
        <Button
          className="model-button model-close-button"
          ariaLabel={"Close"}
          onClick={() => onClose()}
        >
          Close
        </Button>
      </div>
    </div>
  );
}

Model.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  currentImageIndex: PropTypes.number.isRequired,
  setCurrentImgIndex: PropTypes.func.isRequired,
  setCurrentImgSrc: PropTypes.func.isRequired,
};

export default Model;
