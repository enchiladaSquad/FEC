import React, { useState, useEffect } from 'react';

import Thumbnail from 'components/overview/Thumbnail';

import {
  ExpandLess as PrevThumbnail,
  ExpandMore as NextThumbnail,
} from '@material-ui/icons';

const THUMBNAIL_LENGTH = 7;

const ImageCarousel = ({ photos, setCurrentPhotoIndex, currentPhotoIndex }) => {
  const [thumbStart, setThumbStart] = useState(0);
  const [currentThumbnails, setCurrentThumbnails] = useState([]);

  useEffect(() => {
    setThumbStart(0);
    setCurrentThumbnails(
      photos.slice(thumbStart, thumbStart + THUMBNAIL_LENGTH),
    );
  }, []);

  useEffect(() => {
    setCurrentThumbnails(
      photos.slice(thumbStart, thumbStart + THUMBNAIL_LENGTH),
    );
  }, [photos, thumbStart]);

  return (
    <div id="carousel-container">
      <PrevThumbnail
        className="arrow-icon"
        style={{
          visibility: thumbStart > 0 ? 'visible' : 'hidden',
        }}
        onClick={() => {
          setThumbStart((prevMin) => (prevMin > 0 ? prevMin - 1 : prevMin));
        }}
      />
      {currentThumbnails.map((photo, i) => (
        <Thumbnail
          isImageThumbnail={
            photos[currentPhotoIndex].thumbnail_url === photo.thumbnail_url
          }
          photo={photo}
          index={i}
          setCurrentPhotoIndex={setCurrentPhotoIndex}
        />
      ))}
      <NextThumbnail
        className="arrow-icon"
        style={{
          visibility:
            thumbStart + THUMBNAIL_LENGTH < photos.length - 1
              ? 'visible'
              : 'hidden',
        }}
        onClick={() => {
          setThumbStart((prevStart) => (prevStart < photos.length - THUMBNAIL_LENGTH
            ? prevStart + 1
            : prevStart));
        }}
      />
    </div>
  );
};
export default ImageCarousel;
