import React from 'react';

const Thumbnail = ({
  photo,
  index,
  isImageThumbnail,
  setCurrentPhotoIndex,
}) => (
  <div
    className="thumbnail-container"
    onClick={(e) => {
      setCurrentPhotoIndex(index);
    }}
  >
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
