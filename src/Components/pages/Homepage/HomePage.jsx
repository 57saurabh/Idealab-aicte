import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import ConnectUs from '../ConnectUs/ConnectUs'
import TrainingProgram from '../TrainingProgram/TrainingProgram'
import OurInnovation from '../OurInovation/OurInnovation'
import img1 from '../../assets/img/3dprinter.jpg'
import img2 from '../../assets/img/startup.jpg'
// import ImageGallery from './gallery/ImageGallery'
// import { image } from './gallery/gallerydata'
import Gallery from './Gallery/Gallery'
// import Footer from '../Footer/Footer'
// import NavBar from '../Navbar/NavBar'


function HomePage() {
  return (
    <>
  
    <HeroSection/>
    <ConnectUs/>
    <TrainingProgram/>
    <OurInnovation/>
    <Gallery/>
    
  
   

    </>
  )
}

export default HomePage