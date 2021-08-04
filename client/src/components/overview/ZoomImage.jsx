import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const ZoomImage = ({ url, setZooming }) => {
  const imageRef = useRef(null);
  const [bgPos, setBgPos] = useState('center');
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageWidth(img.width);
      setImageHeight(img.height);
    };
    img.src = url;
  }, [url]);

  console.log('imageWidth:', imageWidth);
  console.log('imageHeight:', imageHeight);

  return (
    <div
      id="zoom-image-wrapper"
      style={{
        width: `${imageWidth / 1.5}px`,
        height: `${imageHeight / 1.5}px`,
      }}
      onClick={() => {
        setZooming(false);
      }}
      onMouseMove={(e) => {
        const { width, height } = imageRef.current.getBoundingClientRect();
        setBgPos(
          `${(e.clientX / imageWidth) * 100}% ${
            (e.clientY / imageHeight) * 100
          }%`,
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
          width: `${imageWidth}`,
          height: `${imageHeight}`,
          padding: `calc(100% / ${16 / 9})`,
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
