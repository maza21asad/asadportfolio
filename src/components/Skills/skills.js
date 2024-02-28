import React from "react";
import "./skills.css";
import Cpp from "../../assets/c++.png";
import Java from "../../assets/java.png";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JavaScript from "../../assets/javascript.png";
import Github from "../../assets/github.png";
import Tailwind from "../../assets/tailwind.png";

function Skills() {
  return (
    <section id="skills">
      <h2 className="skillTitle">Skills</h2>
      <div className="skillsImgs">
        <img src={Cpp} alt="" className="skillImg" />
        <img src={Java} alt="" className="skillImg" />
        <img src={JavaScript} alt="" className="skillImg" />
        <img src={Github} alt="" className="skillImg" />
        <img src={HTML} alt="" className="skillImg" />
        <img src={CSS} alt="" className="skillImg" />
        <img src={Tailwind} alt="" className="skillImg" />
      </div>
    </section>
  );
}

export default Skills;
