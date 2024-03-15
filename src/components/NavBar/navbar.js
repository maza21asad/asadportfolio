import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/LogoAsad.png";
import contactImg from "../../assets/contact-form.png";
import { Link } from "react-scroll";
import MobMenu from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // const [showMenu, setShowMenu] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const setDarkMode = () => {
  //   document.querySelector("body").setAttribute("data-theme", "dark");
  //   setIsDarkMode(true);
  // };
  // const setLightMode = () => {
  //   document.querySelector("body").setAttribute("data-theme", "light");
  //   setIsDarkMode(false);
  // };

  // const toggleTheme = (e) => {
  //   if (e.target.checked) {
  //     setDarkMode();
  //   } else {
  //     setLightMode();
  //   }
  // };

  // -----darkMode-----
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    //const selectedTheme = localStorage.getItem("selectedTheme");
    //if (selectedTheme === "dark") {
    document.querySelector("body").setAttribute("data-theme", "dark");
    setIsDarkMode(true);
    //}
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.querySelector("body").setAttribute("data-theme", newTheme);
    //localStorage.setItem("selectedTheme", newTheme);
    setIsDarkMode(!isDarkMode);
  };
  // -------------

  return (
    <nav className="navbar">
      {/* -----------------Desktop Navbar--------------- */}
      <img src={logo} alt="Logo" className="logo" />
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
        <Link
          activeClass="active"
          to="works"
          smooth
          // spy
          offset={-100}
          duration={500}
          class="desktopMenuListItem"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="service"
          smooth
          // spy
          offset={-100}
          duration={500}
          class="desktopMenuListItem"
        >
          Clients
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
        <Link
          activeClass="active"
          to="works"
          smooth
          offset={-100}
          duration={500}
          class="listItem"
          onClick={() => setShowMenu(false)}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="service"
          smooth
          offset={-100}
          duration={500}
          class="listItem"
          onClick={() => setShowMenu(false)}
        >
          Clients
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
