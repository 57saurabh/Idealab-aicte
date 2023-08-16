import Card from './Card/Card'
import { carddata } from './Card/carddata'
import './OurInnovation.css'

import React from 'react'

function OurInnovation() {
  return (
    <div className='OurInnovation-container'>
      <h1 className='heading' >Our Innovations</h1>
        
        <div className="card-container">
      {carddata.map((card) => (
        <Card
          key={card.id}
          imageUrl={card.imageUrl}
          title={card.title}
          country={card.country}
          description={card.description}
        />
      ))}
        </div>
        
    </div>
  )
}

export default OurInnovation