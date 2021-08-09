import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Thumbnail from 'components/overview/Thumbnail';

import {
  ExpandLess as PrevThumbnail,
  ExpandMore as NextThumbnail,
} from '@material-ui/icons';

const THUMBNAIL_LENGTH = 7;

const ImageCarousel = ({
  photos,
  setCurrentPhotoIndex,
  currentPhotoIndex,
  alt,
}) => {
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
      <div>
        <PrevThumbnail
          id="arrow-up"
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
            handleClick={() => {
              setCurrentPhotoIndex(i);
            }}
            photo={photo}
            alt={alt}
            key={i}
          />
        ))}
        <NextThumbnail
          id="arrow-down"
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
    </div>
  );
};
export default ImageCarousel;

ImageCarousel.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail_url: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setCurrentPhotoIndex: PropTypes.func.isRequired,
  currentPhotoIndex: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
};
