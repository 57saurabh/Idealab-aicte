import React, { useState } from "react";
import "./Footer.css";
import logo1 from "../../assets/logos/AICTE.png";

import {
  AiOutlineMail,
  AiOutlineArrowRight,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import {MdLocationPin} from "react-icons/md";

import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");
  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform some action with the email value here
    console.log(email);
  };

  return (
    <section className="footer">
      <div className="container-footer">
        <div className="row-upper-f">
          
          <div className="col-upper-f">
            <p>Get Newsletters from</p>
            <h2>
              AICTE IDEA lab,
              <br /> ABES Engineering College{" "}
            </h2>
            <span>
              <form className="form-flex" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email"
                  className="subscribe-input"
                  value={email}
                  onChange={handleChange}
                  required
                />
                <button className="subscribe-btn-f" type="submit">
                  <AiOutlineArrowRight />
                </button>
              </form>
            </span>
          </div>
          <div className="col-bottom-f-division">
          <div className="col-bottom-f">
            <h4>Work With Us</h4>
            <ul className="permalinks">
              <li>
                {" "}
                <Link to="/">Join Us</Link>
              </li>
              <li>
                <Link to="/">Membership</Link>
              </li>
            </ul>
          </div>
          <div className="col-bottom-f">
            <h4 style={{ marginBottom: ".2rem" }}>Let's Connect</h4>
            <span>
              <a href="/">
                <AiOutlineMail />
              </a>
            </span>
            <span>
              <a href="/" target="_blank" rel="noreferrer">
                <AiOutlineInstagram />
              </a>
            </span>
            <span>
              <a
                href="/"
                target="_blank" rel="noreferrer"
              >
                <AiOutlineLinkedin />
              </a>
            </span>
            <span>
              <a
                href="https://goo.gl/maps/4QNBNKG54GGsdcxA7"
                target="_blank" rel="noreferrer"
              >
                <MdLocationPin/>
              </a>
            </span>
            
          </div>
          </div>
          

          
          
          <div className="col-logo">
            <Link to="/">
              {" "}
              <img src={logo1} alt="" />
            </Link>
            <span
              style={{ fontSize: ".6rem", fontWeight: "800", color: "black" }}
            >
              © Copyright @ AICTE-IDEA Lab
            </span>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Footer;
