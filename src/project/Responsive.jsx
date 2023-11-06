import React from "react";
import Props from "../Component/Props";
import Src from "../Component/Src";

const Responsive = () => {
  return (
    <>
      <div className="container-fluid prjct">
        <div className="row">
          
            <Props src="gallery.jpg" />
         
          <div className="col-md-7 text-center mt-3 heading_Responsive">
            <h1>Responsive Image Gallery</h1>
            <div className="about_prjct p-2 ms-0">
            <strong>About</strong>
              <p>I created a responsive image gallery using React.js, HTML, CSS, and JavaScript. The gallery showcases a collection of images with an elegant and user-friendly design. Users can navigate through the images, view them in full-screen mode, and enjoy a seamless browsing experience on both desktop and mobile devices. This project allowed me to hone my skills in React development and responsive web design. In the future, I plan to enhance the gallery with more advanced features such as image categorization, search functionality, and user interactions to create an even more engaging and informative experience for users.</p>
              </div>
            <div className="src">
              <p>Experience the project firsthand by clicking the <strong>Button</strong> below ,To view the source code and further details you can access the project documentation and resources by following the provided <strong>Link</strong></p>
            </div>
            <Src 
              link="https://github.com/techjmi/ResponsiveReactWeb"/>
            <div className="more_about">
              <button className="button_cv" onClick={() => window.open("https://responsiveweb.md-shamimsham11.repl.co/")} rel="noopener noreferrer">
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

export default Responsive;
