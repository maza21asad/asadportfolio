import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      All rights reserved © 2024 Mohammed Asaduzzaman Asad.
      <br />
      Contact via{" "}
      <a href="mailto:maza21asad@gmail.com" className="gmail">
        email
      </a>
      . Lets connect on{" "}
      <a
        href="https://www.linkedin.com/in/mohammed-asaduzzaman-asad-ab25a11b3"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedIn"
      >
        LinkedIn
      </a>
      .
    </footer>
  );
}

export default Footer;
