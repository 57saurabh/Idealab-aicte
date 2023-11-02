import React from 'react';

import servicesimg from "../../assets/img/services.jpg";
import './team.css'
import Teamcard from './Teamcard';
import { Coordinator, chiefMentor } from './dataTeams';

function Teams() {
  return (
    <div className='container' ><div className="header-container">
    <div className="headerimg">
      <img src={servicesimg} alt="" />
    </div>
    <div className="header-text">
      <h1 className="heading">Our Team</h1>
    </div>
  </div>
    <div className="bodycontainer">
        < >  
            <div className="team">
                {
                    chiefMentor.map((item)=>{
                        return(
                            <div key={item.id} style={{margin:'1rem'}}>
                                <Teamcard 
                            img={item.img}
                            name={item.name}
                            position={item.position}
                            />
                            </div>
                            
                        )
                    }
                    )
                }
            </div>
            <h1 className='heading'>Co-Coordinators</h1>
            <div className="team">
                {
                    Coordinator.map((item)=>{
                        return(
                            <div key={item.id} style={{margin:'1rem'}}>
                                <Teamcard 
                            img={item.img}
                            name={item.name}
                            position={item.position}
                            />
                            </div>
                            
                        )
                    }
                    )
                }
            </div>
        </>
        </div>
        </div>
  )
}

export default Teams