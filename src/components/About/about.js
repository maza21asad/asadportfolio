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
        <p className="tab-links" onClick={(e) => openTab(e, "volunteering")}>
          Volunteering
        </p>
        <p className="tab-links" onClick={(e) => openTab(e, "sports")}>
          Sports
        </p>
      </div>
      {/* ---------------Education---------------- */}
      <div className="tab-contents active-tab" id="education">
        <ul>
          <li>
            <span>Bachelor of Engineering in Software Engineering</span>
            <br />
            Xiamen University Malaysia <tr /> [Sepang, Selangor, Malaysia]{" "}
            <br /> February 2018 - September 2023
          </li>
          <li>
            <span>Higher Secondary Certificate(HSC)</span>
            <br />
            Chattogram Biggan Collage <tr /> [Chattogram, Bangladesh] <br />{" "}
            2016
          </li>
          <li>
            <span>Secondary School Certificate(SSC)</span>
            <br />
            Mirza Ahmed Ispahani Smrity Biddalaya <tr /> [Chattogram,
            Bangladesh] <br /> 2014
          </li>
          <li>
            <span>Junior School Certificate(JSC)</span>
            <br />
            Mirza Ahmed Ispahani Smrity Biddalaya <tr /> [Chattogram,
            Bangladesh] <br /> 2011
          </li>
        </ul>
      </div>
      {/* ----------------Experinces----------------- */}
      <div className="tab-contents" id="experience">
        <ul>
          <li>
            <span>Software Engineer Intern</span>
            <br />
            Ronas Netwoork & Services <tr /> [Cyberjaya, Malaysia]
            <br />
            February 2023 - June 2023 (5 months) <br />
            <ul>
              <li>
                Assisted in website development enabling video conversations
                between technicians and customers, featuring dynamic tools like
                on-screen drawing and arrow creation for enhanced visual
                communication.
              </li>
              <li>
                Collaborated on user-friendly, responsive design aligned with
                project specs. Used JavaScript, React.js, HTML5 and CSS to
                enhance UI/UX.
              </li>
              <li>
                Rigorously tested code, ensuring top quality and user
                satisfaction.
              </li>
              <li>
                Managed code repositories via GitHub, optimizing collaboration.
              </li>
              <li>
                Gained insights into front-end, real-time communication, and
                user experience.
              </li>
              <li>
                Expanded skills to Native Mobile Development for project
                continuity.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      {/* ---------------Volunteering------------------ */}
      <div className="tab-contents" id="volunteering">
        <ul>
          <li>
            <span>Assistance Volunteer</span> <br />
            Standard Chartered
            <tr />
            30 September 2023 & 1 October 2023
            <br />I proudly volunteered at the Kuala Lumpur Standard Chartered
            Marathon 2023, representing Xiamen University Malaysia. Assisted in
            orchestrating a seamless event, enhancing community engagement, and
            promoting health and fitness. I am grateful for the opportunity to
            contribute to this inspiring community initiative!
          </li>
          <li>
            <span>
              Voting Administrator (Leader) for the event of "Student Council
              Election For Batch 2020"{" "}
            </span>
            <br />
            Xiamen University Malaysia Student Council
            <tr />
            November 2019 - December 2019 <br />
            As the Voting Administrator Leader. I was responsible for ensuring a
            fair, transparent, and efficient electoral process. I led a team to
            manage all aspects of the election, from voter registration to
            ballot counting, aiming to uphold democracy and ensure every
            student's voice was heard. My commitment was to foster an inclusive
            atmosphere and maintain the integrity of the election, empowering
            students to shape their future.
          </li>
        </ul>
      </div>
      {/* ---------------Sports------------------ */}
      <div className="tab-contents" id="sports">
        <ul>
          <li>
            <span>Outdoor:</span> Cricket, Football, Track and Field, Batminton,
            Dodgeball.{" "}
          </li>
          <li>
            <span>Indoor:</span> Chess.{" "}
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
