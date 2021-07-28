import React from 'react';

const ImageCarousel = ({ photos, currentPhotoIndex, alt }) => (
  <div>
    <div>
      {photos
        .filter((photo, i) => i !== currentPhotoIndex)
        .map((photo, i) => (
          <img src={photo.thumbnail_url} alt={alt + i} key={i} />
        ))}
    </div>
    <img src={photos[currentPhotoIndex].url || ''} alt={alt} />
  </div>
);

export default ImageCarousel;
