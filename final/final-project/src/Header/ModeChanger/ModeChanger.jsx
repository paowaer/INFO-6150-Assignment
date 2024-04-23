import { useState } from "react";
import "./ModeChanger.css";

function ModeChanger() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const root = document.documentElement;

    root.style.setProperty(
      "--color-header-bg",
      darkMode ? "#24262F" : "#D5D7E3"
    );
    root.style.setProperty(
      "--color-header-text",
      darkMode ? "#D5D7E3" : "#24262F"
    );

    root.style.setProperty("--color-page-bg", darkMode ? "#33353E" : "#ECEEFA");
    root.style.setProperty(
      "--color-page-text",
      darkMode ? "#D5D7E3" : "#33353E"
    );

    root.style.setProperty(
      "--color-footer-bg",
      darkMode ? "#24262F" : "#D5D7E3"
    );
    root.style.setProperty(
      "--color-footer-text",
      darkMode ? "#D5D7E3" : "#24262F"
    );
  };

  return (
    <button
      className={`"dark-mode-button gg-dark-mode`}
      onClick={toggleDarkMode}
    ></button>
  );
}

export default ModeChanger;
