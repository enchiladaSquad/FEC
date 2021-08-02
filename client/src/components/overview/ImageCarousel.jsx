import React from 'react';

import Thumbnail from 'components/overview/Thumbnail';

import {
  ExpandLess as PrevThumbnail,
  ExpandMore as NextThumbnail,
} from '@material-ui/icons';

const ImageCarousel = ({
  thumbMin,
  handlePrevThumbnail,
  currentThumbnails,
  thumbMax,
  photos,
  handleNextThumbnail,
  isImageThumbnail,
  setCurrentPhotoIndex,
}) => {
  console.log('handlePrevThumbnail:', handlePrevThumbnail);
  return (
    <div id="carousel-container">
      {typeof handlePrevThumbnail === 'function' ? (
        <PrevThumbnail
          style={{
            // fontSize: 'large',
            zIndex: '5',
            visibility: thumbMin > 0 ? 'visible' : 'hidden',
          }}
          onClick={handlePrevThumbnail}
        />
      ) : null}
      {currentThumbnails
        ? currentThumbnails.map((photo, i) => (
          <Thumbnail
            isImageThumbnail={isImageThumbnail(photo)}
            photo={photo}
            index={i}
            setCurrentPhotoIndex={setCurrentPhotoIndex}
          />
        ))
        : null}
      {photos && typeof handleNextThumbnail === 'function' ? (
        <NextThumbnail
          style={{
            zIndex: '5',
            visibility: thumbMax < photos.length - 1 ? 'visible' : 'hidden',
          }}
          onClick={handleNextThumbnail}
        />
      ) : null}
    </div>
  );
};

export default ImageCarousel;
