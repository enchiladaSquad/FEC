import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const ZoomPhoto = ({ imgSrc, disableZooming }) => {
  const imageRef = useRef(null);
  const [bgPos, setBgPos] = useState('center');
  // const [imageWidth, setImageWidth] = useState(0);
  // const [imageHeight, setImageHeight] = useState(0);

  // useEffect(() => {
  //   const img = new Image();
  //   img.onload = () => {
  //     setImageWidth(img.width);
  //     setImageHeight(img.height);
  //   };
  //   img.src = imgSrc;
  // }, [imgSrc]);

  return (
    <div
      id="zoom-image-wrapper"
      style={{
        width: '80%',
        height: 'auto',
      }}
      onClick={disableZooming}
      onMouseMove={(e) => {
        const { width, height } = imageRef;
        // setImageWidth(width);
        // setImageHeight(height);
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
          backgroundImage: `url('${imgSrc}')`,
          backgroundPosition: bgPos,
          // width: `${imageWidth}`,
          // height: `${imageHeight}`,
          padding: `calc(100% / ${16 / 9})`,
        }}
      />
    </div>
  );
};

ZoomPhoto.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  disableZooming: PropTypes.func.isRequired,
};

export default ZoomPhoto;
