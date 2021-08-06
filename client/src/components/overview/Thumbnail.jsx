import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = ({
  photo,
  index,
  alt,
  isImageThumbnail,
  setCurrentPhotoIndex,
}) => (
  <div
    className="thumbnail-container"
    onClick={() => {
      setCurrentPhotoIndex(index);
    }}
    key={index}
  >
    <img
      className="carousel-thumbnail"
      id={isImageThumbnail ? 'current-thumbnail' : null}
      src={photo.thumbnail_url}
      alt={`${alt}-${index}`}
    />
  </div>
);

export default Thumbnail;

Thumbnail.propTypes = {
  photo: PropTypes.shape({
    thumbnail_url: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isImageThumbnail: PropTypes.bool.isRequired,
  setCurrentPhotoIndex: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
};
