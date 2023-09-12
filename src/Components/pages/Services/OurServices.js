import React from 'react'
import './OurServices.css'
import servicesimg from '../../assets/img/services.jpg'

const serviceData = [
    {
      title: 'Service1',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, tempora sed debitis voluptatum provident quibusdam sequi repudiandae ab hic similique cupiditate. Reiciendis quod vel porro est consequatur minus ipsum incidunt iste unde.'
    },
    {
      title: 'Service2',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, tempora sed debitis voluptatum provident quibusdam sequi repudiandae ab hic similique cupiditate. Reiciendis quod vel porro est consequatur minus ipsum incidunt iste unde.'
    },
    {
      title: 'Service3',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, tempora sed debitis voluptatum provident quibusdam sequi repudiandae ab hic similique cupiditate. Reiciendis quod vel porro est consequatur minus ipsum incidunt iste unde.'
    },
    {
      title: 'Service4',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, tempora sed debitis voluptatum provident quibusdam sequi repudiandae ab hic similique cupiditate. Reiciendis quod vel porro est consequatur minus ipsum incidunt iste unde.'
    },
    {
      title: 'Service5',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, tempora sed debitis voluptatum provident quibusdam sequi repudiandae ab hic similique cupiditate. Reiciendis quod vel porro est consequatur minus ipsum incidunt iste unde.'
    },
    {
      title: 'Service6',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, tempora sed debitis voluptatum provident quibusdam sequi repudiandae ab hic similique cupiditate. Reiciendis quod vel porro est consequatur minus ipsum incidunt iste unde.'
    },

]

function OurServices() {
  return (
    <div className='container' >
    <div className="header-container">
      <div className="headerimg">
        <img src={servicesimg} alt="" />
      </div>
      <div className="header-text">
        <h1 className="heading">Our Services</h1>
      </div>
    </div>
      <div className="bodycontainer">
          <p className="body-text1" style={{textAlign:"center"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ullam incidunt illum reiciendis! Itaque, esse sunt accusamus sint nihil quas. Eveniet exercitationem nihil aut non rem ea corporis omnis quam, repudiandae aspernatur! Animi aspernatur, nihil quae natus perferendis nobis. Excepturi.
             
          </p>
          <div className="servicebodyContainer">
          {serviceData.map((service, index) => (
        <div className="servicebody" key={index}>
          <div className="bodyHeading">
            <h1 className='Heading mb2'>{service.title}</h1>
          </div>
          <div className="bodyText"><p>
            {service.description}
            </p>
            </div>
        </div>
      ))}
   
    
      </div>
        </div>
  </div>
  )
}

export default OurServices