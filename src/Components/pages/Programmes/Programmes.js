import React from "react";
import "./Programmes.css";
import img1 from "../../assets/img/3dprinter.jpg";

const sections = [
  { 
    title: "PROGRAMME 1",
   icon: "📣",
    description: "Marketing description ...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique corporis iusto ratione impedit aliquam quas, aliquid maxime, suscipit est placeat consequatur voluptates neque quia reiciendis velit numquam, molestias ipsa vel iste? Voluptas! "
 },
  {
     title: "PROGRAMME 2",
   icon: "♟️",
    description: "Strategy description... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique corporis iusto ratione impedit aliquam quas, aliquid maxime, suscipit est placeat consequatur voluptates neque quia reiciendis velit numquam, molestias ipsa vel iste? Voluptas!"
 },
  { 
    title: "PROGRAMME 3",
   icon: "💻",
    description: "Technology description... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique corporis iusto ratione impedit aliquam quas, aliquid maxime, suscipit est placeat consequatur voluptates neque quia reiciendis velit numquam, molestias ipsa vel iste? Voluptas!" 
},
  { 
    title: "PROGRAMME 4",
   icon: "👥",
    description: "Workforce description... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique corporis iusto ratione impedit aliquam quas, aliquid maxime, suscipit est placeat consequatur voluptates neque quia reiciendis velit numquam, molestias ipsa vel iste? Voluptas!" 
},
];

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
          <p className="body-text1" style={{textAlign:"center"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ullam incidunt illum reiciendis! Itaque, esse sunt accusamus sint nihil quas. Eveniet exercitationem nihil aut non rem ea corporis omnis quam, repudiandae aspernatur! Animi aspernatur, nihil quae natus perferendis nobis. Excepturi.
             
          </p>
        <div className="programmessection">
      {sections.map(({ title, icon, description }, index) => (
        <div className="section" key={index}>
          <div className="programmes-icon">{icon}</div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      ))}
        </div>
    </div>
    </div>
  );
}

export default Programmes;
