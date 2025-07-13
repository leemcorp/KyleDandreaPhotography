import './Portfolio.css';
import React, { useState } from 'react';

// Import all images from the folder
const images = import.meta.glob('../assets/images/weddings_elopements/*.{jpg,jpeg,png,gif}', {
  eager: true,
  import: 'default',
});


function Weddings_Elopements() {
  const [lightbox, setLightbox] = useState(null);
  const imageList = Object.values(images);

  return (
    <section className="gallery">
      <h2>weddings & elopements</h2>
      <div className="grid">
        {imageList.map((src, index) => (
          <img key={index} src={src} alt={`Gallery ${index}`} onClick={() => setLightbox(src)} />
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

export default Weddings_Elopements;