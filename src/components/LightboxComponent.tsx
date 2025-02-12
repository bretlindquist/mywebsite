// src/components/LightboxComponent.tsx

import React, { useEffect } from 'react';
import GLightbox from 'glightbox';

interface LightboxComponentProps {
  imageUrl: string;       // Or whatever type is appropriate
  thumbnailUrl: string;   // Or whatever type is appropriate
  alt?: string;          // Optional string
}

const LightboxComponent: React.FC<LightboxComponentProps> = ({ imageUrl, thumbnailUrl, alt }) => {
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
