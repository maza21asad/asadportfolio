import React from "react";
import "./footer.css";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="footer">
      All rights researve to Mohammed Asaduzzaman Asad.
      <br />
      Contact via <Link className="gmail">email</Link>. Lets connect on{" "}
      <Link className="linkedIn">LinkedIn</Link>
    </footer>
  );
}

export default Footer;
