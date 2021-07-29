import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  ExpandLess as PrevThumbnail,
  ExpandMore as NextThumbnail,
  ArrowBack as PrevImage,
  ArrowForward as NextImage,
} from '@material-ui/icons';

const THUMBNAIL_LENGTH = 7;

const ImageCarousel = ({
  photos,
  currentPhotoIndex,
  setCurrentPhotoIndex,
  alt,
}) => {
  const [thumbMin, setThumbMin] = useState(0);
  const [thumbMax, setThumbMax] = useState(0);
  const [currentThumbnails, setCurrentThumbnails] = useState([]);

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
    setThumbMax((prevMax) => (prevMax > THUMBNAIL_LENGTH ? prevMax - 1 : prevMax));
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

  return (
    <div>
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
          <PrevThumbnail onClick={handlePrevThumbnail} />
          {currentThumbnails.map((photo, i) => (
            <img
              id={i === currentPhotoIndex ? 'current-thumbnail' : null}
              className="carousel-thumbnail"
              // onClick={setCurrentPhotoIndex(i)}
              src={photo.thumbnail_url}
              alt={alt + i}
              key={i}
            />
          ))}
          <NextThumbnail onClick={handleNextThumbnail} />
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
