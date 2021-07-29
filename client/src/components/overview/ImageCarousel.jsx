import React, { useState } from 'react';
import {
  ExpandLess,
  ExpandMore,
  ArrowBack,
  ArrowForward,
} from '@material-ui/icons';

const ImageCarousel = ({ photos, currentPhotoIndex, alt }) => {
  const [thumbMin, setThumbMin] = useState(0);
  const [thumbMax, setThumbMax] = useState(4);

  return (
    <div>
      <div>
        <ArrowBack />
        <img
          id="main-photo"
          src={photos[currentPhotoIndex].url || ''}
          alt={alt}
        />
        <ArrowForward />
      </div>

      <div>
        <ExpandLess />
        <div id="carousel-container">
          {photos
            .filter((photo, i) => i >= thumbMin && i <= thumbMax)
            .filter((photo, i) => i !== currentPhotoIndex)
            .map((photo, i) => (
              <img
                className="carousel-thumbnail"
                src={photo.thumbnail_url}
                alt={alt + i}
                key={i}
              />
            ))}
          <ExpandMore />
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
