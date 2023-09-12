import React from "react";
import printerimg from "../../assets/img/3dprinter.jpg";
import "./Infrastructure.css";

const printersData = [
    {
      id: 1,
      name:"3D Printer",
      img:printerimg,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laudantium rerum provident eius modi molestias explicabo eligendi porro dolorum, deleniti praesentium commodi quod amet, dolores at maxime esse optio non fuga adipisci? Nobis, quaerat voluptatibus, a saepe eius animi consequuntur dolore quis soluta id atque debitis dolorum quibusdam ipsam sed culpa repudiandae, adipisci dolor.",
    },
    {
      id: 2,
      name:"3D Scanner",
      img:printerimg,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laudantium rerum provident eius modi molestias explicabo eligendi porro dolorum, deleniti praesentium commodi quod amet, dolores at maxime esse optio non fuga adipisci? Nobis, quaerat voluptatibus, a saepe eius animi consequuntur dolore quis soluta id atque debitis dolorum quibusdam ipsam sed culpa repudiandae, adipisci dolor. Fugiat blanditiis, rerum quisquam iure, eum tempore rem sit est neque amet magnam, dolorem ullam nisi inventore sunt adipisci? Voluptatibus corrupti consequatur dolorem perspiciatis molestiae fuga recusandae accusamus quam blanditiis voluptas voluptatum commodi eveniet et quisquam, sapiente natus, reiciendis, quos at deserunt cumque neque? Itaque, et?",
    },
    // ... more printer objects
  ];
  



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
      {printersData.map((printer, index) => (
        <div className="bodybox" key={printer.id}>
          <h1 className="heading mb2">{printer.name}</h1>
          <div className="bodybox-content">
          {index % 2 === 0 ? (
              <>
                <div className="bodybox-content-img">
                  <img src={printerimg} alt="" />
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
                  <img src={printerimg} alt="" />
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
