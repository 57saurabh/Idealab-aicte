import React from "react";
// import introvid from "../../assets/video/IntrovideoIdeaLab_1.mp4";
import "./HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="Hero-container">
      <video autoPlay loop muted className="background-video">
        <source src='https://res.cloudinary.com/dctffa5fc/video/upload/v1694583165/IntrovideoIdeaLab_2_ft2jpk.mp4' type="video/mp4" />
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
          <Link to='/login' className="hero">Want to Develop Something?</Link>
          <Link to='/login' className="hero">Already Develop, Want Assistance?</Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
