import React, { useState } from 'react';
import PropTypes from 'prop-types';

const StarRating = ({ rating = 0, clickable = false, setRating = null }) => {
  const [clickFill, setclickFill] = useState([]);
  const quarteredRating = (Math.round(rating * 4) / 4).toFixed(2);
  const wholeRating = quarteredRating.slice(0, 1);
  const remainingFraction = quarteredRating.slice(2);
  const starFill = [0, 0, 0, 0, 0];
  for (let i = 0; i < wholeRating; i += 1) {
    starFill[i] = 100;
  }
  starFill[starFill.indexOf(0)] = remainingFraction;

  const handleClickFill = (amount) => {
    if (clickable) {
      for (let i = 0; i <= amount; i += 1) {
        starFill[i] = 100;
      }
    }
    setRating(amount + 1);
    setclickFill(starFill);
  };
  return (
    <>
      {clickFill.length
        ? clickFill.map((percent, index) => (
          <span
            index={index}
            onClick={() => { handleClickFill(index) }}
            key={Math.random()}
            className={`star star-${percent} ${clickable ? 'clickable' : ''} fa fa-star`}
          />
        ))
        : starFill.map((percent, index) => <span
          index={index}
          onClick={() => { handleClickFill(index) }}
          key={Math.random()}
          className={`star star-${percent} ${clickable ? 'clickable' : ''} fa fa-star`}
        />)
      }
    </>
  );
};

StarRating.propTypes = { rating: PropTypes.number.isRequired };
export default StarRating;
