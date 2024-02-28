import React from "react";
import "./about.css";
import WebDev from "../../assets/web-development.png";
import MobileDev from "../../assets/mobile-development.png";

function About() {
  return (
    <section id="about">
      <span className="aboutTitle">What I do </span> <br />
      <span className="aboutDesc">
        I am passionate Software Engineer with experience in Web development and
        Android application development. I have a strong understanding of
        frontend development and proficient in HTML, CSS and JavaScript.
        Typscript and Tailwind CSS is my current learning materials. Also
        proficient with C++ and Java for the Android application development.
        Morover, I have a basic knowledge of python.{" "}
      </span>
      <div className="aboutBars">
        <div className="devBar">
          <img src={WebDev} alt="WebDev" className="devBarImg" />
          <div className="devBarText">
            <h2>Wed development</h2>
            <p>
              Skill: HTML, CSS, Tailwind, JavaScript, TypeScript, Java, Python
            </p>
          </div>
        </div>
        <div className="devBar">
          <img src={MobileDev} alt="MobileDev" className="devBarImg" />
          <div className="devBarText">
            <h2>Android application development</h2>
            <p>Skill: Java, Python, XML</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
