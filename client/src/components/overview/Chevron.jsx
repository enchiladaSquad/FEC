import React from 'react';
import PropTypes from 'prop-types';

const Chevron = ({ facingRight, handleClick, id }) => {
  return (
    <svg
      onClick={handleClick}
      style={{ transform: `rotate(${facingRight === true ? '0' : '180'})` }}
      className="icon"
    >
      <path d="M 10 6 L 8.59 7.41 L 13.17 12 l -4.58 4.59 L 10 18 l 6 -6 Z" />
    </svg>
  );
};

export default Chevron;

Chevron.propTypes = {
  facingRight: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
