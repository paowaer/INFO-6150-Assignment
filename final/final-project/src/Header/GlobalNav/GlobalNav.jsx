import { useState } from "react";
import "./GlobalNav.css";
import menu from "./Menu/Menu";

import PropTypes from "prop-types";

function GlobalNav({ className, setPage }) {
  const [showMenu, setShowMenu] = useState(false);

  const listHtml = menu.map((item) => {
    return (
      <li key={item.name} className="global-nav__item">
        <a
          className="global-nav__link"
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

  const showClass = showMenu ? "" : "global-nav__list--collapsed";

  return (
    <nav className={`global-nav ${className}`}>
      <button
        className={`global-nav__toggle burger-icon`}
        onClick={() => setShowMenu(!showMenu)}
      ></button>
      <div className={`menu-container ${showMenu ? "" : "collapsed"}`}>
        <ul className={`global-nav__list ${showClass}`}>{listHtml}</ul>
      </div>
    </nav>
  );
}

GlobalNav.propTypes = {
  className: PropTypes.string,
  setPage: PropTypes.func.isRequired,
};

export default GlobalNav;
