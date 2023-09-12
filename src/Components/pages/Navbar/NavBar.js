import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import img1 from "../../assets/logos/AICTE.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import img2 from "../../assets/logos/abes_aicte.png";
import { click as handleClick } from "@testing-library/user-event/dist/click";

function NavBar() {
  
  const [active, setactive] = useState(false);

  handleClick = () => setactive(!active);

  return (
    <>
      <div className="nav-container">
        <div className="logoimg1">
          <img className="logoimg" src={img1} alt="idealab-abes" />
        </div>
        <ul className={active ? `menu active` : "menu"}>
        <li className="dropdown">
            <Link to="/">Home</Link>
          </li>
          <li className="dropdown">
            <Link to="/infrastructure" className="dropdown-toggle">
              Infrastructure 
              {/* <div className="dropdown-menu">
                <Link to="/infrastructure-3dprinter">3D Printer</Link>
                <Link to="/infrastructure-3dscanner">3D Scanner</Link>
              
              </div>  */}
            </Link>
          </li>
          <li className="dropdown">
            <Link to="/services" className="dropdown-toggle">
              Services 
              <div className="dropdown-menu">
                <Link to="#">Prototyping Development</Link>
                <Link to="#">Innovation Testing and Validation</Link>
                <Link to="#">Training Skill</Link>
                <Link to="#">Industrial Consultancy</Link>
                <Link to="#">Re-engineering</Link>
              </div> 
            </Link>
          </li>
          <li className="dropdown">
            <Link to="/programmes" className="dropdown-toggle">
              Programmes 
              <div className="dropdown-menu">
                <Link to="#">Item 1.1</Link>
                <Link to="#">Item 1.2</Link>
                <Link to="#">Item 1.3</Link>
              </div> 
            </Link>
          </li>
          <li className="dropdown">
            <Link to="/team" className="dropdown-toggle">
              Team 
              <div className="dropdown-menu" style={{color:"#4682A9"}}>
                <Link to="#">Coordinators</Link>
                <Link to="#">Co-Coordinator</Link>
                
              </div> 
            </Link>
          </li>
          <li className="dropdown">
            <Link to="/" className="dropdown-toggle">
              About Us 
              <div className="dropdown-menu">
                <Link to="#">Brief</Link>
                <Link to="#">Vision & Mission Objective</Link>
               
              </div> 
            </Link>
          </li>
          <li className="dropdown">
            <Link to="/" className="dropdown-toggle">
              Join Us
              <div className="dropdown-menu">
                <Link to="#">Membership</Link>
                <Link to="#">Plug & play</Link>
              
              </div> 
            </Link>
          </li>
        </ul>
        <div className="logoimg2">
          <img className="logoimg" src={img2} alt="aicte-abes" />
        </div>
        <div className="hamburger" onClick={handleClick}>
          {active ? <AiOutlineClose /> : <AiOutlineMenu />}
        
        </div>
      </div>
      
    </>
  );
}

export default NavBar;
