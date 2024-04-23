import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Gallery from "./Gallery/Gallery";

import PropTypes from "prop-types";

function MainArea({ page, setPage }) {
  return (
    <main id="MainArea">
      {page === "Home" && <Home setPage={setPage} />}
      {page === "Gallery" && <Gallery setPage={setPage} />}
      {page === "About" && <About />}
      {page === "Contact" && <Contact />}
    </main>
  );
}

MainArea.propTypes = {
  setPage: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
};

export default MainArea;
