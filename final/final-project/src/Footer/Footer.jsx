import "./Footer.css";
import menu from "../Header/GlobalNav/Menu/Menu";

import PropTypes from "prop-types";

function Footer({ className, setPage }) {
  const listHtml = menu.map((item) => {
    return (
      <li key={item.name} className="footer-nav__item">
        <a
          className="footer-nav__link"
          href={item.path}
          onClick={(e) => {
            e.preventDefault();
            setPage(e.target.innerText);
          }}
        >
          {item.name}
        </a>
      </li>
    );
  });

  return (
    <nav className={`footer-nav ${className}`}>
      <ul className="footer-nav__list">{listHtml}</ul>
    </nav>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
  setPage: PropTypes.func.isRequired,
};

export default Footer;
