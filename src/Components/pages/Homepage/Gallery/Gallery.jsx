import React, { useEffect, useState } from "react";
import { initializeApp } from 'firebase/app';
import Masonry from "react-responsive-masonry";
import { ResponsiveMasonry } from "react-responsive-masonry";
import { getFirestore, collection, query, onSnapshot } from 'firebase/firestore';
import "./gallery.css"
import { dataimage } from "./gallerydata";

const Gallery = () => {
  const [data, setData] = useState([]);
   

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };



  
  const [selectedImage, setSelectedImage] = useState(null);
      
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (

      
      
   <>
   <div className='OurInnovation-container'>
       <div className='heading'>
         <h1  className="heading mb2" >Gallery</h1>
       </div>
    

     <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
     <Masonry
      breakpointCols={breakpointColumnsObj}
      columnClassName="my-masonry-grid_column"
    >
      {dataimage.map((imageUrl, index) => (
        <div key={index}>
            <>
          <img src={imageUrl} 
          style={{width: "100%", display: "block"}} alt={`Image ${index}`}  onClick={() => handleImageClick(imageUrl)} />
          </>
        </div>
      ))}
    </Masonry>
    </ResponsiveMasonry>
     </div>

     {/* {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <img
              src={selectedImage}
              alt="Selected Image"
              className="modal-image"
            />
          </div>
        </div>
      )} */}


     </>
  );
};

export default Gallery;

