import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Cancel } from '@material-ui/icons';

const ImageModal = ({ imgSrc, hideModal }) => {
  const [zooming, setZooming] = useState(false);
  const ref = useRef(null);
  const imgRef = useRef(null);
  return (
    <div className="modal-background" onClick={hideModal}>
      <div className="modal-container">
        {/* eslint-disable jsx-a11y/click-events-have-key-events */}
        {/* eslint-disable jsx-a11y/no-static-element-interactions */}
        <div
          ref={ref}
          onClick={(e) => {
            setZooming(!zooming);
            e.stopPropagation();
          }}
          onMouseMove={(ev) => {
            if (!zooming) {
              return;
            }
            const { left, top } = ref.current.getBoundingClientRect();
            const { clientX: mouseX, clientY: mouseY } = ev;
            const x = mouseX - left; // Position of Mouse relative to the top-left of the DIV
            const y = mouseY - top; // Position of Mouse relative to the top-left of the DIV
            // We subtract from X and Y because we are calculating relative to them
            const { width, height } = imgRef.current;
            const cx = width / 2;
            const cy = height / 2;
            const percentX = (x - cx) / width;
            const percentY = (y - cy) / height;

            const transStr = `scale(2.5) translate(${(-percentX / 2) * 100}%,${
              (-percentY / 2) * 100
            }%)`;

            imgRef.current.style.transform = transStr;
          }}
          style={{ cursor: `${zooming ? 'zoom-out' : 'zoom-in'}` }}
        >
          <img
            ref={imgRef}
            src={imgSrc}
            style={{
              width: '100%',
              pointerEvents: 'none',
              transform: `${zooming ? 'scale(2.5)' : 'scale(1)'}`,
            }}
            alt={''}
          />
        </div>

        <Cancel
          className="floating-icon"
          onClick={(e) => {
            e.stopPropagation();
            hideModal();
          }}
        />
      </div>
    </div>
  );
};

export default ImageModal;

ImageModal.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
};
