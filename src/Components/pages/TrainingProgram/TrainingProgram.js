import React from "react";
import TrainingImgCollage from "../../assets/SliderImg/Picture4.png";
import "./Training.css";
// import Slider from '../../Utils/Slider/Slider'

function TrainingProgram() {
  return (
    <div className="training-container">
      <h1 className="heading mb2" style={{ color: "#fff" }}>
        Our Training Programs
      </h1>
      <div className="training">
        <div className="training-content ">
          <ul style={{textAlign:'left'}}>
            <li> Faculty Development Programmes </li>
            <li> Professional Skilling Programmes </li>
            <li> Skilling Programmes </li>
            <li> School Teacher Awareness Programmes </li>
            <li> Open Day for School Student </li>
            <li> Annual Conferences </li>
            <li> Bootcamps </li>
            <li> Ideation workshops </li>
            <li> Awareness workshops for Industry </li>
            <li> Projects by school students </li>
          </ul>
        </div>
        <div className="trainingimgcollage">
          <img src={TrainingImgCollage} alt="TrainingImgCollage" />
        </div>
      </div>
    </div>
  );
}

export default TrainingProgram;
