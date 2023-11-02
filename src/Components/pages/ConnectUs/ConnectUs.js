import React from 'react'
import './Connectus.css'
import school from "../../assets/ICONS/School.png";
import colleges from  '../../assets/ICONS/Institution.png'
import polytechnic from  '../../assets/img/polytechic.jpg'
import startup from  '../../assets/ICONS/Startup.png'
import industries from  '../../assets/ICONS/Industry.png'
function ConnectUs() {

    const list =[
        {
            "type": "Schools",
            "imageSrc": school,
            "heading": "Schools"
        },
        {
            "type": "Colleges",
            "imageSrc": colleges,
            "heading": "Colleges"
        },
       
        {
            "type": "Industries",
            "imageSrc": industries,
            "heading": "Industries"
        },
        {
            "type": "StartUps",
            "imageSrc": startup,
            "heading": "StartUps"
        }
    ]
    

  return (
    <div className='connectus-container'>
        <h1 className='heading mb2'>Who Can Connect To Us?</h1>
        <div className='connectus-content'>

                {
                    list.map((item, index) => {
                        return(
                            <div className="items" key={item.type}>
                                <img className='item-img' src={item.imageSrc} alt="" />
                                <h2 className='item-heading'>{item.heading}</h2>
                            </div>
                        )
                    }
                    )
                }
 
            </div>
    </div>
  )
}

export default ConnectUs