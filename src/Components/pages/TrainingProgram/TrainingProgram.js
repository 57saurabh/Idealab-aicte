import React from 'react'
import TrainingImgCollage from '../../assets/SliderImg/Picture4.png'
import './Training.css'
// import Slider from '../../Utils/Slider/Slider'


function TrainingProgram() {
  return (
    <div className='training-container'>
      <h1 className='heading' style={{color:'#fff'}}>Our Training Programs</h1>
      <div className='training'>
      <div className="training-content ">
        <ul>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, quaerat.</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, quaerat.</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, quaerat.</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, quaerat.</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, quaerat.</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, quaerat.</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, quaerat.</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, quaerat.</li>
        </ul>
      </div>
      <div className="trainingimgcollage">
        <img src={TrainingImgCollage} alt="TrainingImgCollage" />
      </div>
      </div>
    
    </div>

  )
}

export default TrainingProgram