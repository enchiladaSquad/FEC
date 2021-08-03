import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const ZoomImage = ({ url, setZooming }) => {
  const imageRef = useRef(null);
  const [bgPos, setBgPos] = useState('center');

  return (
    <div
      id="zoom-image-wrapper"
      onClick={() => {
        setZooming(false);
      }}
      onMouseMove={(e) => {
        const { width, height } = imageRef.current.getBoundingClientRect();
        setBgPos(
          `${(e.clientX / width) * 100}% ${(e.clientY / height) * 100}%`,
        );
      }}
      onMouseLeave={() => {
        setBgPos('center');
      }}
    >
      <div
        ref={imageRef}
        id="zoom-image"
        style={{
          backgroundImage: `url('${url}')`,
          backgroundPosition: bgPos,
        }}
      />
    </div>
  );
};

ZoomImage.propTypes = {
  url: PropTypes.string.isRequired,
  setZooming: PropTypes.func.isRequired,
};

export default ZoomImage;
