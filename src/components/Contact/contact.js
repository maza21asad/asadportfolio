import React from "react";
import "./contact.css";
import Github from "../../assets/github.png";
import LinkedIn from "../../assets/linkedin.png";
import Gmail from "../../assets/gmail.png";

function Contact() {
  return (
    <section id="contact">
      <h2 className="contactTitle">Contact me</h2>
      <span className="contactDesc">
        Fill out the form below to discuss any work opportunities.
      </span>
      <img src="" alt="" className="letsConnectImg" />
      <form className="contactForm">
        <input type="text" className="name" placeholder="Your name" />
        <input type="email" className="email" placeholder="Your email" />
        <textarea
          name="message"
          className="msg"
          rows="5"
          placeholder="Your message"
        />
      </form>
      <button type="submit" value="Send" className="submitBtn">
        Submit
      </button>
      <div className="socialLinks">
        <img src={LinkedIn} alt="LinkedIn" className="link" />
        <img src={Github} alt="Github" className="link" />
        <img src={Gmail} alt="Gmail" className="link" />
      </div>
    </section>
  );
}

export default Contact;
