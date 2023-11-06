import React from "react";
import Props from "../Component/Props";
import Src from "../Component/Src";

const Weather = () => {
  return (
    <>
      <div className="container-fluid prjct">
        <div className="row">
         
            <Props src="weather.jpg" />
        
          <div className="col-md-7 text-center mt-3 heading_Weather">
             <h1>Weather</h1>
            <div className="about_prjct p-2 ms-0">
              <strong>About</strong>
              <p>I developed a weather application that fetches real-time weather data from a third-party API using HTML, CSS, NodeJs, ExpressJs and JavaScript. The app displays current weather conditions, including temperature, humidity, and wind speed, for a user-specified location. It provides a simple and intuitive interface for users to access weather information. This project significantly improved my skills in working with APIs and web development. In the future, I aim to expand the app's features to include more detailed weather forecasts and additional data to make it even more informative for users.</p>
            </div>
            <div className="src">
              <p>Experience the project firsthand by clicking the <strong>Button</strong> below ,To view the source code and further details you can access the project documentation and resources by following the provided <strong>Link</strong></p>
            </div>
            <Src 
              link="https://github.com/techjmi/WeatherWebsite"/>
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

export default Weather;
