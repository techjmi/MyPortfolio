import React from "react";
import Type from "./Type";

const Home = () => {
  return (
    <>
      <div className="container-fluid home">
        <div className="row">
          <div className="col-md-6 col-12 img_home">
            <div className="imga_home">
              <img
                src="photoprofile.jpg"
                alt="Your Image"
                className="img-fluid"
                style={{
                  // marginLeft: "50px",
                  marginTop: "30px",
                  backgroundColor: "#3498db",
                  clipPath: "circle(50%)",
                  maxWidth: "100%",
                  height: "auto",  
                }}
              />


            </div>
          </div>
          <div className="col-md-6 col-12 header_home">
            <div class="container1">
              <h3 className="my-3 text-center name">HEY, I'M MD SHAMIM AKHTER</h3>
              {/* <hr class="thick-line text-center" /> */}
              <Type />
              <p className="text-center m-5">I'm a MERN (MongoDB, Express.js, React, Node.js) Developer, specializing in crafting the visual and interactive
                components of web applications to enhance their overall success.</p>
              <div className="container-fluid Social">
                <h4>Follow Me</h4>
                <a href="https://www.facebook.com/profile.php?id=100047398065321" target="_blank"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.twitter.com/saltech23" target="_blank"><i className="fab fa-twitter"></i></a>
                <a href="https://instagram.com/saltech23?igshid=OGQ5ZDc2ODk2ZA==" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/md-shamim-akhter-b12624193" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/techjmi" target="_blank"><i class="fab fa-github"></i></a>
                <a href="https://www.hackerrank.com/techjmi?hr_r=1" target="_blank"><i class="fab fa-hackerrank"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
