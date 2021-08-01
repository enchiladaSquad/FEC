import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  ExpandLess as PrevThumbnail,
  ExpandMore as NextThumbnail,
  ArrowBack as PrevImage,
  ArrowForward as NextImage,
  Fullscreen,
} from '@material-ui/icons';

const THUMBNAIL_LENGTH = 7;

const Thumbnail = ({ photo, index, isImageThumbnail }) => (
  <div>
    <img
      id={isImageThumbnail ? 'current-thumbnail' : null}
      className="carousel-thumbnail"
      // onClick={setCurrentPhotoIndex(i)}
      src={photo.thumbnail_url}
      alt={photo.alt + index}
      key={index}
    />
  </div>
);

const ImageCarousel = ({
  photos,
  currentPhotoIndex,
  setCurrentPhotoIndex,
  alt,
}) => {
  const [thumbMin, setThumbMin] = useState(0);
  const [thumbMax, setThumbMax] = useState(0);
  const [currentThumbnails, setCurrentThumbnails] = useState([]);
  const [expanding, setExpanding] = useState(false);

  useEffect(() => {
    setThumbMin(0);
    setThumbMax(6);
    setCurrentThumbnails(photos.slice(thumbMin, thumbMax + 1));
  }, []);

  useEffect(() => {
    setCurrentThumbnails(photos.slice(thumbMin, thumbMax + 1));
  }, [photos, thumbMin, thumbMax]);

  const handlePrevThumbnail = () => {
    setThumbMin((prevMin) => (prevMin > 0 ? prevMin - 1 : prevMin));
    setThumbMax((prevMax) => (prevMax > THUMBNAIL_LENGTH - 1 ? prevMax - 1 : prevMax));
  };

  const handleNextThumbnail = () => {
    setThumbMin((prevMin) => (prevMin < photos.length - THUMBNAIL_LENGTH ? prevMin + 1 : prevMin));
    setThumbMax((prevMax) => (prevMax < photos.length - 1 ? prevMax + 1 : prevMax));
  };

  const handlePrevImage = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : photos.length - 1));
  };

  const handleNextImage = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const isImageThumbnail = (thumbnail) => {
    if (photos[currentPhotoIndex].thumbnail_url === thumbnail.thumbnail_url) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <div id="fs-icon-container">
        <Fullscreen id="fs-icon" />
      </div>

      <div className="main-photo-container">
        <PrevImage id="arrow-left" onClick={handlePrevImage} />
        <img
          id="main-photo"
          src={photos[currentPhotoIndex].url || ''}
          alt={alt}
        />
        <NextImage id="arrow-right" onClick={handleNextImage} />
      </div>

      <div>
        <div id="carousel-container">
          <PrevThumbnail
            style={{
              // fontSize: 'large',
              zIndex: '5',
              visibility: thumbMin > 0 ? 'visible' : 'hidden',
            }}
            onClick={handlePrevThumbnail}
          />
          {currentThumbnails.map((photo, i) => (
            <Thumbnail
              isImageThumbnail={isImageThumbnail(photo)}
              photo={photo}
              index={i}
            />
          ))}
          <NextThumbnail
            style={{
              zIndex: '5',
              visibility: thumbMax < photos.length - 1 ? 'visible' : 'hidden',
            }}
            onClick={handleNextThumbnail}
          />
        </div>
      </div>
    </div>
  );
};

ImageCarousel.propTypes = {
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

export default ImageCarousel;
