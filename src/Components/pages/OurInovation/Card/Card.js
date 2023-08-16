import React from 'react';
import './card.css';

function Card({ id, imageUrl, title, country, description }) {
  
  return (
    <div className="card">
      <div className="imgbx">
      <img src={imageUrl} alt="" />
      </div>
      <div className="card-content">
      <h2>{title}</h2>
        <h3>{country}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
