import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/LogoAsad.png";
import contactImg from "../../assets/contact-form.png";
import { Link } from "react-scroll";
import MobMenu from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

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
          to="skills"
          smooth
          // spy
          offset={-100}
          duration={500}
          class="desktopMenuListItem"
        >
          Clients
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contactImg} alt="Contact Me" className="desktopMenuImg" />{" "}
        CONTACT ME
      </button>

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
          to="skills"
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
      </div>
    </nav>
  );
};

export default Navbar;
