import React from "react";
import "./intro.css";
import bgImg from "../../assets/Asad.png";
import hireMe from "../../assets/hire-me.png";
import { Link } from "react-scroll";

function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="greeting">Assalamualaikum, </span>
        <span className="introText">
          I'm <span className="intoAsad">Mohammed Asaduzzaman Asad</span> <br />{" "}
          Software Engineer
        </span>
        <p className="introPara">
          I'm a recent graduate with a Bachelor of Engineering in Software
          Engineering from Xiamen University Malaysia.
        </p>
        <Link>
          <button
            className="hireMeBtn"
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth", duration: "500" });
            }}
          >
            <img src={hireMe} alt="Hire me" className="hireMe" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bgImg} alt="bgImg" className="bgImg"></img>
    </section>
  );
}

export default Intro;
