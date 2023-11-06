import React from "react";
import Props from "../Component/Props";
import Src from "../Component/Src";
import { Link } from 'react-router-dom';

const Covid = () => {
  return (
    <>
      <div className="container-fluid prjct">
        <div className="row">

            <Props src="Covid.jpg" />

          <div className="col-md-7 text-center mt-3 heading_Covid">
            <h1>Covid-Data</h1>
            <div className="about_prjct p-2 ms-0">
            <strong>About</strong>
            <p className="ms-0">I am proud to share that I have created a project using my skills in ReactJS. This project is a responsive and interactive COVID-19 information component that enables users to expand and collapse sections of content, providing them with easy access to essential pandemic information. Leveraging my expertise in ReactJS and web development, I designed a user-friendly experience that adapts seamlessly to various devices, ensuring that users can access crucial data on COVID-19 effortlessly. This project not only showcases my proficiency as a developer but also reflects my unwavering dedication to crafting engaging web applications with cutting-edge technologies like ReactJS, with a strong focus on user experience and accessibility</p>
              </div>
            <div className="src">
              <p>Experience the project firsthand by clicking the <strong>Button</strong> below ,To view the source code and further details you can access the project documentation and resources by following the provided <strong>Link</strong></p>
             <Src link ="https://github.com/techjmi/APIcallingReact" target="_blank" rel="noopener noreferrer" />
            </div>
            <div className="more_about">
              <button className="button_cv" onClick={() => window.open("https://apicallingreact.md-shamimsham11.repl.co/")} rel="noopener noreferrer">
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

export default Covid;
