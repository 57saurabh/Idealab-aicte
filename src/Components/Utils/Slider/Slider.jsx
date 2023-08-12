import React, { useState, useEffect } from 'react';
import './Slider.css'; // Import the CSS file for styling

const Slider = ({ images, interval }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="slider">
      {
        images.map((item,index) => (
          <div key={index} className={`slider-item ${index === currentImage ? 'active' : ''}`}>
        <img
           
            src={item.image}
            alt={`Slider ${index}`}
            
          />
          <p className="caption">
            {
              item.text
            }
          </p>
        </div>  
        ))
      }

    </div>
  );
};

export default Slider;
