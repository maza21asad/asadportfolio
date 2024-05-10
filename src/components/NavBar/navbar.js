import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/LogoAsad.png";
import contactImg from "../../assets/contact-form.png";
import { Link } from "react-scroll";
import MobMenu from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // darkMode

  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    setIsDarkMode(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.querySelector("body").setAttribute("data-theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="navbar">
      {/* -----------------Desktop Navbar--------------- */}
      <Link to="intro" smooth offset={-100} duration={500}>
        {" "}
        <img src={logo} alt="Logo" className="logo" />{" "}
      </Link>
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          smooth
          // spy
          offset={-100}
          duration={500}
          class="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          smooth
          // spy
          offset={-50}
          duration={500}
          class="desktopMenuListItem"
        >
          About
        </Link>
        {/* <Link
          activeClass="active"
          to="works"
          smooth
          // spy
          offset={-100}
          duration={500}
          class="desktopMenuListItem"
        >
          Projects
        </Link> */}
        <Link
          activeClass="active"
          to="service"
          smooth
          // spy
          offset={-100}
          duration={500}
          class="desktopMenuListItem"
        >
          My Service
        </Link>
      </div>

      <div className="contact-DarkMode-container">
        <button
          className="desktopMenuBtn"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth", duration: "500" });
          }}
        >
          <img src={contactImg} alt="Contact Me" className="desktopMenuImg" />{" "}
          CONTACT ME
        </button>

        {/* ------- DarkMode -------- */}
        <div className="dark_mode">
          <input
            className="dark_mode_input"
            type="checkbox"
            id="darkmode-toggle"
            onChange={toggleTheme}
            checked={isDarkMode}
          />
          <label
            className="dark_mode_label"
            for="darkmode-toggle"
            title={isDarkMode ? "Change to Light Mode" : "Change to Dark Mode"}
          ></label>
        </div>
      </div>

      {/* ----------------Mobile Navbar--------------- */}
      <img
        src={MobMenu}
        style={{ background: "#627a84" }}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          smooth
          offset={-100}
          duration={500}
          class="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          smooth
          offset={-50}
          duration={500}
          class="listItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        {/* <Link
          activeClass="active"
          to="works"
          smooth
          offset={-100}
          duration={500}
          class="listItem"
          onClick={() => setShowMenu(false)}
        >
          Projects
        </Link> */}
        <Link
          activeClass="active"
          to="service"
          smooth
          offset={-100}
          duration={500}
          class="listItem"
          onClick={() => setShowMenu(false)}
        >
          My Service
        </Link>
        <Link
          activeClass="active"
          to="contact"
          smooth
          offset={-100}
          duration={500}
          class="listItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
        {/* ---------------- */}
        <div className="dark_mode2">
          Theme: Dark/Light
          <input
            className="dark_mode_input"
            type="checkbox"
            id="darkmode-toggle"
            onChange={toggleTheme}
            checked={isDarkMode}
          />
          <label
            className="dark_mode_label"
            for="darkmode-toggle"
            title={isDarkMode ? "Change to Light Mode" : "Change to Dark Mode"}
          ></label>
        </div>
        {/* --------------- */}
      </div>
    </nav>
  );
};

export default Navbar;
