import React from "react";
import Props from "../Component/Props";
import Src from "../Component/Src";

const Calc = () => {
  return (
    <>
      <div className="container-fluid prjct">
        <div className="row">
         
            <Props src="caclc.jpg" />
         
          <div className="col-md-7 text-center mt-3 heading_Calc">
            <h1>Calculator</h1>
            <div className="about_prjct p-2 ms-0">
              <strong>About</strong>
              <p>I created a web-based calculator application using HTML, CSS, and JavaScript. The calculator supports basic arithmetic operations, features a responsive design for various devices, and provides a user-friendly interface for performing calculations. This project allowed me to improve my coding skills and gain a deeper understanding of web development. I plan to enhance the calculator's functionality in the future to make it even more versatile and user-friendly.</p>
              </div>
            
            <div className="src">
              <p>Experience the project firsthand by clicking the <strong>Button</strong> below ,To view the source code and further details you can access the project documentation and resources by following the provided <strong>Link</strong></p>
            </div>
            <Src 
            link="https://github.com/techjmi/Calculator"
            />
            <div className="more_about">
              <button className="button_cv" onClick={() => window.open("https://calculator.md-shamimsham11.repl.co/")} rel="noopener noreferrer">
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

export default Calc;
