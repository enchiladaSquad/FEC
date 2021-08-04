import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MainPhoto from 'components/overview/MainPhoto';
import ZoomImage from 'components/overview/ZoomImage';
import ImageCarousel from 'components/overview/ImageCarousel';

const ImageGallery = ({
  photos, alt, zooming, setZooming,
}) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="image-gallery-container">
      {zooming ? (
        <ZoomImage
          url={photos[currentPhotoIndex].url}
          setZooming={setZooming}
        />
      ) : (
        <>
          <MainPhoto
            photos={photos}
            currentPhotoIndex={currentPhotoIndex}
            alt={alt}
            expanded={expanded}
            setExpanded={setExpanded}
            setZooming={setZooming}
            setCurrentPhotoIndex={setCurrentPhotoIndex}
          />
          <ImageCarousel
            photos={photos}
            setCurrentPhotoIndex={setCurrentPhotoIndex}
            currentPhotoIndex={currentPhotoIndex}
            alt={alt}
          />
        </>
      )}
    </div>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail_url: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  alt: PropTypes.string.isRequired,
  zooming: PropTypes.bool.isRequired,
  setZooming: PropTypes.func.isRequired,
};

export default ImageGallery;
