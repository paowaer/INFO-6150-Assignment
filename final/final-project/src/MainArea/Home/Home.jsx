import "./Home.css";
import Button from "../../Button/Button";

import HomeGallery from "./HomeGallery/HomeGallery";

import PropTypes from "prop-types";

function Home({ setPage }) {
  const buttonClick = () => {
    setPage("Gallery");
  };

  return (
    <>
      <img
        src="\Seattle.jpg"
        className="home__pic"
        alt="this is a view of Seattle from Kerry Park"
      ></img>
      <h2 className="home__title">I&apos;m Ian Ou</h2>
      <p className="home__text">
        I am a coding learner and landscape photographer based in Seattle.
      </p>
      <p className="home__text">
        I thrive in fast-paced environments, whether it&apos;s in technology or
        everyday life.
      </p>
      <p className="home__text">
        Keyboard and lens are my eyes to discover the beauty behind the world.
      </p>
      <p className="home__text">
        Welcome to Deja View, hope you can find some peace here...
      </p>

      <Button
        className="home__button"
        visual="link"
        ariaLabel="navigate to gallery"
        onClick={buttonClick}
      >
        Explore more
      </Button>
      <HomeGallery />
    </>
  );
}

Home.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Home;
