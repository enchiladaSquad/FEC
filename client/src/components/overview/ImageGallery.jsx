import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MainPhoto from 'components/overview/MainPhoto';
import ZoomImage from 'components/overview/ZoomImage';
import ImageCarousel from 'components/overview/ImageCarousel';

const THUMBNAIL_LENGTH = 7;

const ImageGallery = ({
  photos,
  currentPhotoIndex, // Why is this included?
  setCurrentPhotoIndex,
  alt,
}) => {
  const [thumbStart, setThumbStart] = useState(0);
  const [currentThumbnails, setCurrentThumbnails] = useState([]);

  const [expanded, setExpanded] = useState(false);
  const [zooming, setZooming] = useState(false);

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

  // Todo: streamline handlers
  // const handlePrevThumbnail = () => {
  //   setThumbStart((prevStart) => (prevStart > 0 ? prevStart - 1 : prevStart));
  // };

  // const handleNextThumbnail = () => {
  //   setThumbStart((prevStart) => (prevStart < photos.length - THUMBNAIL_LENGTH ? prevStart + 1 : prevStart));
  // };

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
            photos={photos}
            currentPhotoIndex={currentPhotoIndex}
            alt={alt}
            expanded={expanded}
            setExpanded={setExpanded}
            setZooming={setZooming}
            setCurrentPhotoIndex={setCurrentPhotoIndex}
          />
          <ImageCarousel
            thumbStart={thumbStart}
            setThumbStart={setThumbStart}
            currentThumbnails={currentThumbnails}
            thumbLength={THUMBNAIL_LENGTH}
            photos={photos}
            setCurrentPhotoIndex={setCurrentPhotoIndex}
            currentPhotoIndex={currentPhotoIndex}
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
