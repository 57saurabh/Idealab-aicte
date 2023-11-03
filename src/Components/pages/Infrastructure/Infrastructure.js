import React from "react";
import printerimg from "../../assets/img/3dprinter.jpg";
import "./Infrastructure.css";
import { ifraData } from "./datainfra";


  

function Infrastructure() {
  return (
    <div className="container">
      <div className="header-container">
        <div className="headerimg">
          <img src={printerimg} alt="" />
        </div>
        <div className="header-text">
          <h1 className="heading">Our Infrastructure</h1>
        </div>
      </div>
        <div className="bodycontainer">
            <p className="body-text1" style={{textAlign:"justify"}}>
            The infrastructure is made up of adaptable spaces that are woven together harmoniously to foster creativity and teamwork. Inside its physical walls, a variety of workspaces with adaptable furniture and state-of-the-art technology support a range of creative activities. Collaboration areas are lively hubs where interactive whiteboards and displays encourage idea-sharing and brainstorming sessions. Prototyping tools and materials are available at the Maker Spaces for hands-on creation. A special presentation space serves as a platform for seminars and idea pitches, immersing attendees in an inspiring environment. In this dynamic, forward-thinking venue, every person's innovation finds its home thanks to an inclusive environment and accessible amenities.</p>
      <div className="bodyboxcontainer">
      {ifraData.map((printer, index) => (
        <div className="bodybox" key={printer.id}>
          <h1 className="heading mb2">{printer.name}</h1>
          <div className="bodybox-content">
          {index % 2 === 0 ? (
              <>
                <div className="bodybox-content-img">
                  <img src={printer.img} alt="" />
                </div>
                <div className="bodybox-content-text">
                  <p>{printer.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className="bodybox-content-text">
                  <p>{printer.description}</p>
                </div>
                <div className="bodybox-content-img">
                  <img src={printer.img} alt="" />
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
        </div>

    </div>
  );
}

export default Infrastructure;
