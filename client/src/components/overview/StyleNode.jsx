import React from 'react';
import PropTypes from 'prop-types';

import { CheckCircle } from '@material-ui/icons';

const StyleNode = ({
  index, src, alt, marked, setStyleIndex,
}) => {
  return (
    <div style={{ position: 'relative' }}>
      <div
        className="image-container"
        onClick={() => {
          setStyleIndex(index);
        }}
      >
        <img
          className={`style-node ${marked ? '' : 'opac'}`}
          key={index}
          src={src}
          alt={alt}
        />
      </div>
      {marked ? (
        <CheckCircle
          style={{
            top: '0px',
            right: '15px',
          }}
          className="style-check"
        />
      ) : null}
    </div>
  );
};

export default StyleNode;

StyleNode.propTypes = {
  index: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  marked: PropTypes.bool.isRequired,
  setStyleIndex: PropTypes.func.isRequired,
};
