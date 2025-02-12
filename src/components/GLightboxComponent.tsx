// components/LightboxComponent.tsx
import React, { useEffect } from 'react';
import GLightbox from 'glightbox';

const LightboxComponent = ({ imageUrl, thumbnailUrl, alt }) => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.glightbox'
    });
    
    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <div>
      <a href={imageUrl} className="glightbox">
        <img src={thumbnailUrl} alt={alt} />
      </a>
    </div>
  );
};

export default LightboxComponent;
