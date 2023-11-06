import React from "react";
import Props from "../Component/Props";
import Src from "../Component/Src";

const Todo = () => {
  return (
    <>
      <div className="container-fluid prjct">
        <div className="row">
         
            <Props src="Todo1.jpg" />
        
          <div className="col-md-7 text-center mt-4 heading_Todo">
            <h1>To-do</h1>
            <div className="about_prjct ms-0 p-2 mt-4">
              <strong>About</strong>
              <p>I'm excited to showcase my latest project, a TODO application developed using my ReactJS skills. This project is a testament to my ability to create practical and efficient solutions using cutting-edge technology. With the TODO app, I've harnessed the power of ReactJS to build a feature-rich application that helps users manage their tasks and stay organized. It's a reflection of my dedication to delivering high-quality web applications that bring value to users, all while demonstrating my proficiency in ReactJS.</p>
            </div>
            <div className="src">
              <p>Experience the project firsthand by clicking the <strong>Button</strong> below ,To view the source code and further details you can access the project documentation and resources by following the provided <strong>Link</strong></p>
              <Src
                link="https://github.com/techjmi/TodoList"/>
            </div>
            <div className="more_about mt-4">
              <button className="button_cv glow" onClick={() => window.open("https://todolist.md-shamimsham11.repl.co/")} rel="noopener noreferrer">
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

export default Todo;
