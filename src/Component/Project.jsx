import React from "react";
import Calc from "../project/Calc"
import Accordion from "../project/Accordion"
import Todo from "../project/Todo"
import Weather from "../project/Weather"
import Responsive from "../project/Responsive"
import Covid from "../project/Covid"

const Project = () => {
  
  return (
    <>
      <Covid />
       <Todo />
      <Weather />
      <Calc />
     
      <Accordion />
      
      <Responsive />
     
    </>
  );
};

export default Project;
