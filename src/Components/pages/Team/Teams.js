import React from 'react';

import servicesimg from "../../assets/img/services.jpg";
import './team.css'
import Teamcard from './Teamcard';
import { coordinators } from './dataTeams';

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
        <p className="body-text1" style={{textAlign:"center"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ullam incidunt illum reiciendis! Itaque, esse sunt accusamus sint nihil quas. Eveniet exercitationem nihil aut non rem ea corporis omnis quam, repudiandae aspernatur! Animi aspernatur, nihil quae natus perferendis nobis. Excepturi. 
        </p>
        <div className="teamcontainer">
            <h1 className='heading'>Coordinators</h1>
            <div className="team">
                {
                    coordinators.map((item)=>{
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
                    coordinators.map((item)=>{
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
        </div>
        </div>
        </div>
  )
}

export default Teams