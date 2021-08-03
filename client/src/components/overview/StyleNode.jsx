import React from 'react';
import PropTypes from 'prop-types';

import { CheckCircleOutline } from '@material-ui/icons';

const StyleNode = ({
  index, src, alt, marked, setStyleIndex,
}) => {
  return (
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
      {marked ? <CheckCircleOutline className="style-check" /> : null}
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
