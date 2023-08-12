import React from 'react'
import './Connectus.css'
import school from "../../assets/school.png";

function ConnectUs() {
  return (
    <div className='connectus-container'>
        <h1 className='heading'>Who Can Connect To Us?</h1>
        <div className='connectus-content'>
                <div className="items">
                    <img className='item-img' src={school} alt="" />
                    <h2 className='item-heading'>Schools</h2>
                </div>
                <div className="items">
                    <img className='item-img' src={school} alt="" />
                    <h2 className='item-heading'>Colleges</h2>
                </div>
                <div className="items">
                    <img className='item-img' src={school} alt="" />
                    <h2 className='item-heading'>Polytechnic</h2>
                </div>
                <div className="items">
                    <img className='item-img' src={school} alt="" />
                    <h2 className='item-heading'>Industires</h2>
                </div>
                <div className="items">
                    <img className='item-img' src={school} alt="" />
                    <h2 className='item-heading'>StartUps</h2>
                </div>
                
                
            </div>
    </div>
  )
}

export default ConnectUs