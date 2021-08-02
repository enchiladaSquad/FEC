import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MainPhoto from 'components/overview/MainPhoto';
import ZoomImage from 'components/overview/ZoomImage';
import ImageCarousel from 'components/overview/ImageCarousel';

const ImageGallery = ({
  photos,
  currentPhotoIndex,
  setCurrentPhotoIndex,
  alt,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [zooming, setZooming] = useState(false);

  return (
    <>
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
          />
        </>
      )}
    </>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail_url: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  currentPhotoIndex: PropTypes.number.isRequired,
  setCurrentPhotoIndex: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGallery;
