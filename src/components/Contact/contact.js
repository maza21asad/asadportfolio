import React, { useRef, useState } from "react";
import "./contact.css";
import Github from "../../assets/github.png";
import LinkedIn from "../../assets/linkedin.png";
import Gmail from "../../assets/gmail.png";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [isFormValid, setIsFormValid] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3jfrfo9", "template_9afjtcr", form.current, {
        publicKey: "VwkeFWWPSZv-Ny4WB",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          setIsFormValid(false);
          alert("Email Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleInputChange = () => {
    const nameInput = form.current["from_name"].value;
    const emailInput = form.current["your_email"].value;
    const messageInput = form.current["message"].value;
    setIsFormValid(nameInput && emailInput && messageInput);
  };

  return (
    <section id="contact">
      <h2 className="contactTitle">Contact me</h2>
      <span className="contactDesc">
        Fill out the form below to discuss any work opportunities.
      </span>
      <img src="" alt="" className="letsConnectImg" />
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your name"
          name="from_name"
          onChange={handleInputChange}
        />
        <input
          type="email"
          className="email"
          placeholder="Your email"
          name="your_email"
          onChange={handleInputChange}
        />
        <textarea
          name="message"
          className="msg"
          rows="5"
          placeholder="Your message"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          value="Send"
          className="submitBtn"
          disabled={!isFormValid}
        >
          SUBMIT
        </button>
      </form>
      <div className="socialLinks">
        <img src={LinkedIn} alt="LinkedIn" className="link" />
        <img src={Github} alt="Github" className="link" />
        <img src={Gmail} alt="Gmail" className="link" />
      </div>
    </section>
  );
}

export default Contact;
