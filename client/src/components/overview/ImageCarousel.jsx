import React from 'react';

import Thumbnail from 'components/overview/Thumbnail';

import {
  ExpandLess as PrevThumbnail,
  ExpandMore as NextThumbnail,
} from '@material-ui/icons';

const isImageThumbnail = (thumbnail, photos, currentPhotoIndex) => {
  if (photos[currentPhotoIndex].thumbnail_url === thumbnail.thumbnail_url) {
    return true;
  }
  return false;
};

const ImageCarousel = ({
  thumbLength,
  thumbStart,
  setThumbStart,
  currentThumbnails,
  photos,
  setCurrentPhotoIndex,
  currentPhotoIndex,
}) => (
  <div id="carousel-container">
    <PrevThumbnail
      style={{
        zIndex: '5',
        visibility: thumbStart > 0 ? 'visible' : 'hidden',
      }}
      onClick={() => {
        setThumbStart((prevMin) => (prevMin > 0 ? prevMin - 1 : prevMin));
      }}
    />
    {currentThumbnails
      ? currentThumbnails.map((photo, i) => (
        <Thumbnail
          isImageThumbnail={isImageThumbnail(
            photo,
            photos,
            currentPhotoIndex,
          )}
          photo={photo}
          index={i}
          setCurrentPhotoIndex={setCurrentPhotoIndex}
        />
      ))
      : null}
    <NextThumbnail
      style={{
        zIndex: '5',
        visibility:
          thumbStart + thumbLength < photos.length - 1 ? 'visible' : 'hidden',
      }}
      onClick={() => {
        const lastIndex = photos.length - thumbLength;
        console.log('LastIndex:', lastIndex);
        console.log('thumbStart:', thumbStart);

        setThumbStart((prevStart) => (prevStart < lastIndex ? prevStart + 1 : prevStart));
      }}
    />
  </div>
);

export default ImageCarousel;
