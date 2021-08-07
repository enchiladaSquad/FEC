import React from 'react';
import PropTypes from 'prop-types';

import MainPhoto from 'components/overview/MainPhoto';
import ImageCarousel from 'components/overview/ImageCarousel';

const ImageGallery = ({
  photos,
  alt,
  currentPhotoIndex,
  setCurrentPhotoIndex,
  enableExpanded,
}) => {
  return (
    <div className="image-gallery-container">
      <MainPhoto
        photos={photos}
        currentPhotoIndex={currentPhotoIndex}
        enableExpanded={enableExpanded}
        setCurrentPhotoIndex={setCurrentPhotoIndex}
        alt={alt}
      />
      <ImageCarousel
        photos={photos}
        setCurrentPhotoIndex={setCurrentPhotoIndex}
        currentPhotoIndex={currentPhotoIndex}
        alt={alt}
      />
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
  currentPhotoIndex: PropTypes.number.isRequired,
  setCurrentPhotoIndex: PropTypes.func.isRequired,
  enableExpanded: PropTypes.func.isRequired,
};

export default ImageGallery;
