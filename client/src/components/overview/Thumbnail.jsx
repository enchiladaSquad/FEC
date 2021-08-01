import React from 'react';

const Thumbnail = ({ photo, index, isImageThumbnail }) => (
  <div className="thumbnail-container">
    <img
      className="carousel-thumbnail"
      id={isImageThumbnail ? 'current-thumbnail' : null}
      // onClick={setCurrentPhotoIndex(i)}
      src={photo.thumbnail_url}
      alt={photo.alt + index}
      key={index}
    />
  </div>
);

export default Thumbnail;
