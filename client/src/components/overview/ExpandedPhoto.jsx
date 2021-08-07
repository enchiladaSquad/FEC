import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Fullscreen } from '@material-ui/icons';

import ZoomPhoto from 'components/overview/ZoomPhoto';

const ExpandedPhoto = ({ imgSrc, disableExpanded }) => {
  const [zooming, setZooming] = useState(false);
  return (
    <>
      {zooming ? (
        <ZoomPhoto imgSrc={imgSrc} disableZooming={() => setZooming(false)} />
      ) : (
        <div
          id="expanded-photo-container"
          style={{ width: '100%' }}
          onClick={() => {
            setZooming(true);
          }}
        >
          <img src={imgSrc} style={{ width: '100%' }} alt={''} />
          <Fullscreen
            id="fs-icon"
            fontSize="large"
            onClick={(e) => {
              e.stopPropagation();
              disableExpanded();
            }}
          />
        </div>
      )}
    </>
  );
};

export default ExpandedPhoto;

ExpandedPhoto.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  disableExpanded: PropTypes.func.isRequired,
};
