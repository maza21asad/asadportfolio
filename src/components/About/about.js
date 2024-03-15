import "./about.css";

function About() {
  function openTab(e, tabname) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    for (let tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }
    e.currentTarget.classList.add("active-link");
    var tabContent = document.getElementById(tabname);
    if (tabContent) {
      tabContent.classList.add("active-tab");
    }
  }

  return (
    <section id="about">
      <span className="aboutTitle">About Me </span>
      <span className="aboutDesc">
        I am passionate Software Engineer with experience in Web development and
        Android application development.
      </span>
      <div className="tabs">
        <p
          className="tab-links active-link"
          onClick={(e) => openTab(e, "education")}
        >
          Education
        </p>
        <p className="tab-links" onClick={(e) => openTab(e, "experience")}>
          Experiences
        </p>
        <p className="tab-links" onClick={(e) => openTab(e, "other")}>
          Others
        </p>
      </div>
      {/* ---------------Education---------------- */}
      <div className="tab-contents active-tab" id="education">
        <ul>
          <li>
            <span>Bachelor of Engineering in Software Engineering</span>
            <br />
            Xiamen University Malysia
          </li>
          <li>
            <span>HSC</span>
            <br />
            Chattogram Biggan Collage
          </li>
          <li>
            <span>SSC</span>
            <br />
            Mirza Ahmed Ispahani Smrity Biddalaya
          </li>
          <li>
            <span>JSC</span>
            <br />
            Mirza Ahmed Ispahani Smrity Biddalaya
          </li>
        </ul>
      </div>
      {/* ----------------Experinces----------------- */}
      <div className="tab-contents" id="experience">
        <ul>
          <li>
            <span>Software Engineer Intern</span>
            <br />
            Ronas Netwoork & Services <br />
            February 2023 - June 2023
          </li>
        </ul>
      </div>
      {/* ---------------others------------------ */}
      <div className="tab-contents" id="other">
        <ul>
          <li>
            <span>Volunteering:</span>
          </li>
          <li>
            <span>Sports:</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
