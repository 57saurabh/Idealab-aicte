import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'; // Import the icons you need


function Teamcard(props) {


  return (
    <div className="teamcard">
    <div className="teamimg">
        <img src={props.img} alt="" />
        </div>
        <div className="teamtext">
            <h2 className='heading mb2'>{props.name}</h2>
            <p>{props.position}</p>
            {/* <div className="social">
                <a href="https://www.facebook.com/"><FaFacebookF /></a>
                <a href="https://www.instagram.com/"><FaInstagram /></a>
                <a href="https://www.linkedin.com/"><FaLinkedinIn /></a>
                <a href="https://www.twitter.com/"><FaTwitter /></a>
            </div> */}
            </div>

                </div>
  )
}

export default Teamcard