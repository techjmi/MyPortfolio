import React from "react";
import Props from "../Component/Props";
import Src from "../Component/Src";
import { Link } from 'react-router-dom';

const Accordion = () => {
  return (
    <>
      <div className="container-fluid prjct">
        <div className="row">
         
            <Props src="Accordion2.jpg" />
         
          <div className="col-md-7 text-center mt-3 heading_Accordion">
            <h1>Accordion</h1>
            <div className="about_prjct p-2 ms-0">
            <strong>About</strong>
            <p className="ms-0">I am proud to share that I have created a project using my skills in ReactJS. This project is an accordion component that allows users to expand and collapse sections of content. With my knowledge of ReactJS, I was able to build an interactive and user-friendly accordion that enhances the user experience. It's a testament to my abilities as a developer and my commitment to creating engaging web applications using modern technologies like ReactJS.</p>
              </div>
            <div className="src">
              <p>Experience the project firsthand by clicking the <strong>Button</strong> below ,To view the source code and further details you can access the project documentation and resources by following the provided <strong>Link</strong></p>
             <Src link ="https://github.com/techjmi/AccordianReact" target="_blank" rel="noopener noreferrer" />
            </div>
            <div className="more_about">
              <button className="button_cv" onClick={() => window.open("https://accordianreact.md-shamimsham11.repl.co/", "_blank")} rel="noopener noreferrer">
                Click Here
              </button>

            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
