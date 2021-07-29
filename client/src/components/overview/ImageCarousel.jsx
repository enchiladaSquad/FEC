import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  ExpandLess,
  ExpandMore,
  ArrowBack,
  ArrowForward,
} from '@material-ui/icons';

const ImageCarousel = ({
  photos,
  currentPhotoIndex,
  setCurrentPhotoIndex,
  alt,
}) => {
  const [thumbMin, setThumbMin] = useState(0);
  const [thumbMax, setThumbMax] = useState(5);
  const [currentThumbnails, setCurrentThumbnails] = useState([]);

  useEffect(() => {
    setThumbMin(0);
    setThumbMax(4);
    setCurrentThumbnails(photos.slice(thumbMin, thumbMax + 1));
  }, []);

  useEffect(() => {
    setCurrentThumbnails(photos.slice(thumbMin, thumbMax + 1));
  }, [photos, thumbMin, thumbMax]);

  const handleClickDown = () => {
    setThumbMin((prevMin) => (prevMin > 0 ? prevMin - 1 : prevMin));
    setThumbMax((prevMax) => (prevMax > 4 ? prevMax - 1 : prevMax));
  };
  const handleClickUp = () => {
    setThumbMin((prevMin) => (prevMin < photos.length - 4 ? prevMin + 1 : prevMin));
    setThumbMax((prevMax) => (prevMax < photos.length - 1 ? prevMax + 1 : prevMax));
  };

  const handleClickLeft = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : photos.length - 1));
  };
  const handleClickRight = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  return (
    <div>
      <div>
        <ArrowBack onClick={handleClickLeft} />
        <img
          id="main-photo"
          src={photos[currentPhotoIndex].url || ''}
          alt={alt}
        />
        <ArrowForward onClick={handleClickRight} />
      </div>

      <div>
        <div id="carousel-container">
          <ExpandLess onClick={handleClickDown} />
          {currentThumbnails
            .filter((photo, i) => i !== currentPhotoIndex)
            .map((photo, i) => (
              <img
                className="carousel-thumbnail"
                src={photo.thumbnail_url}
                alt={alt + i}
                key={i}
              />
            ))}
          <ExpandMore onClick={handleClickUp} />
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;

ImageCarousel.propTypes = {
  photos: PropTypes.array.isRequired,
  currentPhotoIndex: PropTypes.number.isRequired,
};
