import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MainPhoto from 'components/overview/MainPhoto';
import ZoomImage from 'components/overview/ZoomImage';
import ImageCarousel from 'components/overview/ImageCarousel';

const THUMBNAIL_LENGTH = 7;

const ImageGallery = ({
  photos,
  currentPhotoIndex,
  setCurrentPhotoIndex,
  alt,
}) => {
  const [thumbMin, setThumbMin] = useState(0);
  const [thumbMax, setThumbMax] = useState(0);
  const [currentThumbnails, setCurrentThumbnails] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [zooming, setZooming] = useState(false);

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
    <>
      {zooming ? (
        <ZoomImage
          url={photos[currentPhotoIndex].url}
          setZooming={setZooming}
        />
      ) : (
        <>
          <MainPhoto
            handlePrevImage={handlePrevImage}
            handleNextImage={handleNextImage}
            photos={photos}
            currentPhotoIndex={currentPhotoIndex}
            alt={alt}
            expanded={expanded}
            setExpanded={setExpanded}
            setZooming={setZooming}
          />
          <ImageCarousel
            thumbMin={thumbMin}
            handlePrevThumbnail={handlePrevThumbnail}
            currentThumbnails={currentThumbnails}
            thumbMax={thumbMax}
            photos={photos}
            handleNextThumbnail={handleNextThumbnail}
            isImageThumbnail={isImageThumbnail}
            setCurrentPhotoIndex={setCurrentPhotoIndex}
          />
        </>
      )}
    </>
  );
};

ImageGallery.propTypes = {
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

export default ImageGallery;
