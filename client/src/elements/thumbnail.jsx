import React from 'react';

const StyleThumbnail = ({ styleId, url, handleClick }) => {
  return (
    <a onClick={(e) => handleClick(styleId)}>
      <img src={url} alt={`style-${styleId}`}></img>
    </a>
  );
};

export default StyleThumbnail;
