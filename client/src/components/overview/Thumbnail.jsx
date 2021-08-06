import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = ({
  photo, alt, isImageThumbnail, handleClick,
}) => (
  <div className="thumbnail-container" onClick={handleClick}>
    <img
      className="carousel-thumbnail"
      id={isImageThumbnail ? 'current-thumbnail' : null}
      src={photo.thumbnail_url}
      alt={`${alt}`}
    />
  </div>
);

export default Thumbnail;

Thumbnail.propTypes = {
  photo: PropTypes.shape({
    thumbnail_url: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  isImageThumbnail: PropTypes.bool.isRequired,
  alt: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
