import React from "react";
// import introvid from "../../assets/video/IntrovideoIdeaLab_1.mp4";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="Hero-container">
      <video autoPlay loop muted className="background-video">
        <source src='https://abes.ac.in/images/IntrovideoIdeaLab.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="contentbox">
        <div className="upper">
          <h1>AICTE -IDEA Lab</h1>
          <h1>
            ABES Engineering College,
            <br />
            Ghaziabad
          </h1>
        </div>
        <div className="lower">
          <button className="hero">Want to Develop Something?</button>
          <button className="hero">Already Develop, Want Assistance?</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
