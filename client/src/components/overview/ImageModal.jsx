import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Fullscreen, Cancel } from '@material-ui/icons';

import ZoomPhoto from 'components/overview/ZoomPhoto';

const ImageModal = ({ imgSrc, hideModal }) => {
  const [zooming, setZooming] = useState(false);
  return (
    <div className="modal-background" onClick={hideModal}>
      <div className="modal-container">
        <img src={imgSrc} style={{ width: '100%' }} alt={''} />
        <Cancel
          className="floating-icon"
          onClick={(e) => {
            e.stopPropagation();
            hideModal();
          }}
        />
      </div>
    </div>
    // <div
    // className={}
    //   style={{ width: '100%', position: 'relative' }}
    //   onClick={() => {
    //     setZooming(true);
    //   }}
    // >
    //   <img src={imgSrc} style={{ width: '100%' }} alt={''} />
    //   <Fullscreen
    //     id="fs-icon"
    //     fontSize="large"
    //     onClick={(e) => {
    //       e.stopPropagation();
    //       disableExpanded();
    //     }}
    //   />
    // </div>
  );
};

export default ImageModal;

ImageModal.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
};
