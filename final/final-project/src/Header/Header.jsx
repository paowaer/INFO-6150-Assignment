import "./Header.css";

import GlobalNav from "./GlobalNav/GlobalNav";
import ModeChanger from "./ModeChanger/ModeChanger";
import PropTypes from "prop-types";

function Header({ setPage }) {
  const handleSkipToMain = () => {
    const mainArea = document.getElementById("MainArea");
    if (mainArea) {
      mainArea.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <a
        href="#MainArea"
        className="skip-to-MainArea"
        onClick={(e) => {
          e.preventDefault();
          handleSkipToMain();
        }}
      >
        Skip
      </a>
      <h1 className="header__title">Deja View</h1>
      <GlobalNav className="header__nav" setPage={setPage} />
      <ModeChanger />
    </header>
  );
}

Header.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Header;
