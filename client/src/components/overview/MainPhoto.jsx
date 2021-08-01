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
}) => (
  <div id="main-photo-container" style={{ width: expanded ? '100%' : '' }}>
    <div id="icon-container">
      <PrevImage id="arrow-left" onClick={handlePrevImage} />
      <Fullscreen
        id="fs-icon"
        onClick={() => {
          setExpanded((expanded) => !expanded);
        }}
      />
      <NextImage id="arrow-right" onClick={handleNextImage} />
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
