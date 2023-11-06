import React from "react";
import Skill from "./Skill"
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className="container-fluid about">
        <div className="row">
          <div className="col-md-5">
            <div className="container img_about">
              <img
                src="/photoprofile.jpg"
                alt="Your Image"
                width="300"
                height="300"
                className="img-fluid img_res"
                style={{ margin: "100px 0" }}
              />

            </div>
          </div>
          <div className="col-md-7">
            <div className="header_about my-4 mb-1">
              <h1 className="fFamily">About Me</h1>
            </div>
            <div className="fFamily">
              <strong className="my-2">Md Shamim Akhter</strong>
              <p>Web Developer</p>
            </div>
            <div className="hr">
              <hr />
            </div>
            <div className="intro_about">
              <p>
                Greetings, I'm Md Shamim Akhter, a budding MERN (MongoDB, Express.js, React, Node.js) developer with a strong appetite for learning and a knack for problem-solving. While I may be at the early stages of my career, I'm driven by a desire to continuously expand my knowledge and skills.
<br />
                As a fresher in the field, I'm committed to crafting web applications that possess a unique, contemporary look-and-feel. I'm dedicated to taking ideas from the drawing board and transforming them into fully functional, outstanding platforms.

                My journey in web development has just begun, and I approach it with an enthusiastic attitude, ready to tackle challenges and create innovative solutions. I'm excited to see where this dynamic world of web development will lead me. You can explore my work in the Projects section, for project section click on the below link<Link to="/project" className="nav-link "style={{ textDecoration: 'underline' }}>View My Project</Link>

                You're welcome to connect with me
                  on&nbsp;
                  <a href="https://www.linkedin.com/in/md-shamim-akhter-b12624193" target="_blank">LinkedIn</a><br />I'm open
                  to&nbsp;
                  <strong>Job</strong> opportunities where I can contribute, learn, and grow. If you have a fitting opportunity
                  that
                  matches my skills and experience, please feel free to <strong>Contact</strong> me  
                <span> <Link to="/contact" className="nav-link" style={{ textDecoration: 'underline' }}>
                    Contact Me
                  </Link>
                  </span> 
              </p>
            </div>
            <Skill />
            <div className="hr">
              <hr />
            </div>
            {/* cv part */}
            <div className="cv">
              <button className="button_cv">
                <a href="Md_Resume.pdf" download="Md_Resume.pdf">
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
