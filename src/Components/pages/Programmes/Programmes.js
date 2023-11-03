import React from "react";
import "./Programmes.css";
import img1 from "../../assets/img/3dprinter.jpg";
import { programdata } from "./programmedata";


function Programmes() {
  return (
    <div className="programmes-container">
      <div className="header-container">
        <div className="headerimg">
          <img src={img1} alt="" />
        </div>
        <div className="header-text">
          <h1 className="heading">Our Programmes
</h1>
        </div>
      </div>
      <div className="bodycontainer">
          <p className="body-text1" style={{textAlign:"justify"}}>
          Our wide range of programs at IDEA LAB serves both teachers and students, creating an atmosphere that values creativity and innovation. There are many options to investigate, ranging from interesting workshops meant to refine critical thinking and problem-solving abilities to entrepreneurship programs meant to foster aspiring business owners. Tech presentations, hackathons, and cooperative research projects offer venues for exhibiting skills and sharing innovative concepts. Our cutting-edge maker spaces and prototyping facilities promote practical investigation and facilitate the conversion of concepts into real innovations. Furthermore, our industry collaborations and internships provide practical exposure, and our incubator and accelerator programs mentor and assist those enthusiastic about starting their own businesses.     
          </p>
        <div className="programmessection">
      {programdata.map(({ Program, TargetAudience, Description,Frequency }, index) => (
        <div className="program-card">
        <div className="program-card-header">
            <h2 className="program-card-title">{Program}</h2>
            {/* <p className="program-card-subtitle">Sr. No: sdfsdf</p> */}
        </div>
        <div className="program-card-body">
            <p><strong>Target Audience:</strong> {TargetAudience}</p>
            <p><strong>Description:</strong> {Description}</p>
            <p><strong>Frequency:</strong> {Frequency}</p>
            
        </div>
    </div> 
      ))}
        </div>
    </div>

     

    </div>
  );
}

export default Programmes;
