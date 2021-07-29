import React from 'react';
import PropTypes from 'prop-types';

const StarRating = ({ rating }) => {
  const quarteredRating = (Math.round(rating * 4) / 4).toFixed(2);
  const wholeRating = quarteredRating.slice(0, 1);
  const remainingFraction = quarteredRating.slice(2);
  const starFill = [0, 0, 0, 0, 0];
  for (let i = 0; i < wholeRating; i += 1) {
    starFill[i] = 100;
  }
  starFill[starFill.indexOf(0)] = remainingFraction;
  return (
    <>
      {starFill.map((percent) => <span key={Math.random()} className={`star star-${percent} fa fa-star`} />)}
    </>
  );
};

StarRating.propTypes = { rating: PropTypes.number.isRequired };
export default StarRating;
