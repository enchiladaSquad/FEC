import React from 'react';

import {
  ArrowBack as PrevImage,
  ArrowForward as NextImage,
  Fullscreen,
} from '@material-ui/icons';

const MainPhoto = ({
  handleNextImage,
  photos,
  currentPhotoIndex,
  alt,
  expanded,
  setExpanded,
  setZooming,
  setCurrentPhotoIndex,
}) => (
  <div
    id="main-photo-container"
    onClick={() => {
      setZooming(true);
    }}
    style={{ width: expanded ? '100%' : '' }}
  >
    <div id="icon-container">
      <PrevImage
        id="arrow-left"
        onClick={(e) => {
          e.stopPropagation();
          setCurrentPhotoIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : photos.length - 1));
        }}
      />
      <Fullscreen
        id="fs-icon"
        onClick={(e) => {
          e.stopPropagation();
          setExpanded((expanded) => !expanded);
        }}
      />
      <NextImage
        id="arrow-right"
        onClick={(e) => {
          e.stopPropagation();
          setCurrentPhotoIndex(
            (prevIndex) => (prevIndex + 1) % photos.length,
          );
        }}
      />
    </div>

    <img
      id="main-photo"
      style={{ maxHeight: expanded ? '50em' : '' }}
      src={photos[currentPhotoIndex].url || ''}
      alt={alt}
    />
  </div>
);
export default MainPhoto;
