import React from "react";
// import introvid from "../../assets/video/IntrovideoIdeaLab_1.mp4";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import Slider from "../../Utils/Slider/Slider";
import img1 from  '../../assets/img/3dprinter.jpg'
import img2 from  '../../assets/img/college.jpg'
import img3 from  '../../assets/img/industries.jpg'
import img4 from  '../../assets/img/startup.jpg'

const imges =[
  img1,
  img2,
  img3,
  img4
]


function HeroSection() {
  return (
    // className="background-video"
    <div className="Hero-container">
      <div className="background-video">
        <Slider images={imges} interval={2000}/>
      </div>

      <div className="contentbox">
        <div className="upper">
          <h1>AICTE IDEA Lab</h1>
          <h1>
            ABES Engineering College,
            <br />
            Ghaziabad
          </h1>
        </div>
        <div className="lower">
         <div className="hero" >
          <h3>AICTE IDEA Lab</h3>
          <p>The All India Council for Technical Education (AICTE) is launching the IDEA Lab in approved institutions. This initiative aims to foster creativity, problem-solving, and lifelong learning among engineering students. The IDEA Lab will provide a platform for students to apply their knowledge in science, technology, engineering, and mathematics (STEM) through hands-on experience and product visualization. This aligns with the National Educational Policy 2020's vision of enabling students to "engage, explore, experience, express and excel.
          </p></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
