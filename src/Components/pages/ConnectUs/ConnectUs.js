import React from 'react'
import './Connectus.css'
import school from "../../assets/school.png";

function ConnectUs() {

    const list =[
        {
            "type": "Schools",
            "imageSrc": school,
            "heading": "Schools"
        },
        {
            "type": "Colleges",
            "imageSrc": school,
            "heading": "Colleges"
        },
        {
            "type": "Polytechnic",
            "imageSrc": school,
            "heading": "Polytechnic"
        },
        {
            "type": "Industries",
            "imageSrc": school,
            "heading": "Industries"
        },
        {
            "type": "StartUps",
            "imageSrc": school,
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