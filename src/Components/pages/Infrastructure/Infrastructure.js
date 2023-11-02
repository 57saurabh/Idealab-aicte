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
            <p className="body-text1" style={{textAlign:"center"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ullam incidunt illum reiciendis! Itaque, esse sunt accusamus sint nihil quas. Eveniet exercitationem nihil aut non rem ea corporis omnis quam, repudiandae aspernatur! Animi aspernatur, nihil quae natus perferendis nobis. Excepturi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias repudiandae ab suscipit natus voluptates officia sed facere corrupti obcaecati omnis voluptas molestiae deleniti tempora, asperiores nobis eum libero dolores reiciendis beatae veniam. Commodi facilis nam suscipit, aspernatur veritatis odit nesciunt?
            </p>
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
