import React from 'react';
import './card.css';

function Card({ id, imageUrl, title, country, description }) {
  
  return (
    <div className='Card-cont'>
    <article class="card_img">
    <img
      class="card__background"
      src={imageUrl}
      alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
      width="1920"
      height="2193"
    />
    <div class="card__content | flow">
      <div class="card__content--container | flow">
        <h2 class="card__title">{title}</h2>
        <p class="card__description">
          {description}
        </p>
      </div>
    </div>
  </article>
  </div>
  );
}

export default Card;
