import React, { useState, useRef } from 'react';

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
      {/* <img
        id="zoom-image"
        alt=""
        style={{
          backgroundImage: '',
          // margin: '0',
          // padding: '0',
          // boxSizing: 'border-box',
          // width: '100%',
          // paddingTop: 'calc(100% / (16/9))', // used to calculate height based on the aspect-ratio,
          // backgroundPosition
          // backgroundRepeat
        }}
      /> */}
    </div>
  );
};

export default ZoomImage;
