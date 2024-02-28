import React from "react";
import "./works.css";
import Proj1 from "../../assets/p1.jpeg";
import Proj2 from "../../assets/p2.jpeg";
import Proj3 from "../../assets/p3.jpeg";
// import Proj4 from "../../assets/p4.jpeg";
// import Proj5 from "../../assets/p5.jpeg";

function Works() {
  return (
    <section id="works">
      <h2 className="workTitle">My projects</h2>
      <span className="workDesc">
        This is the description about my projects. Right now the projects
        sections are empty and under develop.
      </span>
      <div className="projects">
        <img src={Proj1} alt="" className="projectsImg" />
        <img src={Proj2} alt="" className="projectsImg" />
        <img src={Proj3} alt="" className="projectsImg" />
        {/* <img src={Proj4} alt="" className="projectsImg" /> */}
        {/* <img src={Proj5} alt="" className="projectsImg" /> */}
        {/* <img src={Proj1} alt="" className="projectsImg" /> */}
      </div>
      <button className="worksBtn">See more</button>
    </section>
  );
}

export default Works;
