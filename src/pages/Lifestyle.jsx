import './Portfolio.css';
import React, { useState } from 'react';

// Import all images from the folder
const images = import.meta.glob('../assets/images/lifestyle/*.{jpg,jpeg,png,gif}', {
  eager: true,
  import: 'default',
});

const isMobile = window.innerWidth < 1000;


function Lifestyle() {
  const [lightbox, setLightbox] = useState(null);
  const imageList = Object.values(images);

  return (
    <section className="gallery">
      <h2>lifestyle</h2>
      <div className="grid grid-wrapper">
        {imageList.map((src, index) => (
          <img key={index} src={src} alt={`Gallery ${index}`} onClick={() => {if(!isMobile){setLightbox(src)}}} />
        ))}
      </div>
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Large view" />
        </div>
      )}
    </section>
  );
}

export default Lifestyle;