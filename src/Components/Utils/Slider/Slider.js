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
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slider ${index}`}
          className={index === currentImage ? 'active' : ''}
        />
      ))}
    </div>
  );
};

export default Slider;
