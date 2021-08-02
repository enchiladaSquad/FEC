import React from 'react';

import {
  ArrowBack as PrevImage,
  ArrowForward as NextImage,
  Fullscreen,
} from '@material-ui/icons';

const MainPhoto = ({
  handlePrevImage,
  handleNextImage,
  photos,
  currentPhotoIndex,
  alt,
  expanded,
  setExpanded,
  setZooming,
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
          handlePrevImage();
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
          handleNextImage();
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
