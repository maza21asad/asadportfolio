import React from "react";
import "./services.css";
import WebDev from "../../assets/web-development.png";
import MobileDev from "../../assets/mobile-development.png";
import Cpp from "../../assets/c++.png";
import Java from "../../assets/java.png";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JavaScript from "../../assets/javascript.png";
import Github from "../../assets/github.png";
import Tailwind from "../../assets/tailwind.png";
import Python from "../../assets/python.png";

function Services() {
  return (
    <section id="service">
      <span className="serviceTitle">What I do </span>
      <span className="serviceDesc">
        I am passionate Software Engineer with experience in Web development and
        Android application development. I have a strong understanding of
        frontend development and proficient in HTML, CSS and JavaScript.
        Typscript and Tailwind CSS is my current learning materials. Also
        proficient with C++ and Java for the Android application development.
        Morover, I have a basic knowledge of python.{" "}
      </span>
      <div className="serviceBars">
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

      <div className="skillsImgs">
        <img src={Cpp} alt="C++" className="skillImg" />
        <img src={Java} alt="Java" className="skillImg" />
        <img src={JavaScript} alt="JavaScript" className="skillImg" />
        <img src={Python} alt="Python" className="skillImg" />
        <img src={HTML} alt="HTML" className="skillImg" />
        <img src={CSS} alt="CSS" className="skillImg" />
        <img src={Tailwind} alt="Tailwind" className="skillImg" />
        <img src={Github} alt="Github" className="skillImg" />
      </div>
    </section>
  );
}

export default Services;
