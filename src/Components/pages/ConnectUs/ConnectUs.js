import React from 'react'
import './Connectus.css'
import school from "../../assets/img/school.jpg";
import colleges from  '../../assets/img/college.jpg'
import polytechnic from  '../../assets/img/polytechic.jpg'
import startup from  '../../assets/img/startup.jpg'
import industries from  '../../assets/img/industries.jpg'
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
            "type": "Polytechnic",
            "imageSrc": polytechnic,
            "heading": "Polytechnic"
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