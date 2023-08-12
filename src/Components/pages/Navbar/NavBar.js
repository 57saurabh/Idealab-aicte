import React, { useState } from 'react'
import './NavBar.css'
import img1 from '../../assets/logos/AICTE.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import img2 from '../../assets/logos/abes_aicte.png'
import { click as handleClick } from '@testing-library/user-event/dist/click';



function NavBar() {
  
  const [active, setactive] = useState(false);

  handleClick =() => setactive(!active);

  return (
    <>
    <div className="nav-container">
        <div className="logoimg1">
            <img className='logoimg' src={img1} alt="idealab-abes" />
        </div>
        <ul className={active?(`menu active`):'menu'}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="logoimg2">
            <img className='logoimg' src={img2} alt="aicte-abes" />
        </div>
        <div className="hamburger" onClick={handleClick}>
          {
            active ? <AiOutlineClose/> : <AiOutlineMenu/>
          }
            {/* <AiOutlineMenu size={34} /> */}
            </div>
        
    </div>
    {/* <hr className='line' /> */}
   
    </>
  )
}

export default NavBar