import React from 'react';
import PropTypes from 'prop-types';

import {
  ChevronLeft as PrevImage,
  ChevronRight as NextImage,
  Fullscreen,
} from '@material-ui/icons';

// import Chevron from 'components/overview/Chevron';

const MainPhoto = ({
  photos,
  currentPhotoIndex,
  alt,
  expanded,
  setExpanded,
  setZooming,
  setCurrentPhotoIndex,
}) => {
  return (
    <div
      id="main-photo-container"
      onClick={() => {
        setZooming(true);
      }}
      style={{ width: expanded ? '100%' : '' }}
    >
      <img
        id="main-photo"
        style={{ maxHeight: expanded ? '50em' : '' }}
        src={photos[currentPhotoIndex].url || ''}
        alt={alt}
      />
      <PrevImage
        id="arrow-left"
        fontSize="large"
        onClick={(e) => {
          e.stopPropagation();
          setCurrentPhotoIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : photos.length - 1));
        }}
      />
      <NextImage
        id="arrow-right"
        fontSize="large"
        onClick={(e) => {
          e.stopPropagation();
          setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
        }}
      />
      <Fullscreen
        id="fs-icon"
        fontSize="large"
        onClick={(e) => {
          e.stopPropagation();
          setExpanded((prevExpanded) => !prevExpanded);
        }}
      />
    </div>
  );
};

MainPhoto.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail_url: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  currentPhotoIndex: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
  setExpanded: PropTypes.func.isRequired,
  setZooming: PropTypes.func.isRequired,
  setCurrentPhotoIndex: PropTypes.func.isRequired,
};

export default MainPhoto;
