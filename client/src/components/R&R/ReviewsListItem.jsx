// import React, { useState, useContext } from 'react';
import React from 'react';
// import { ProductContext } from '../../context';
import StarRating from '../SharedComponents';

const ReviewsListItem = ({ review }) => {
  const formatDate = () => {
    const months = {
      1: 'January',
      2: 'February',
      3: 'March',
      4: 'April',
      5: 'May',
      6: 'June',
      7: 'July',
      8: 'August',
      9: 'September',
      10: 'October',
      11: 'November',
      12: 'December',
    };
    let day = review.date.slice(8, 10);
    let month = review.date.slice(5, 7);
    const year = review.date.slice(0, 4);
    if (day[0] === '0') {
      day = day.slice(1);
    }
    if (month[0] === '0') {
      month = month.slice(1);
    }
    const formattedDate = `${months[month]} ${day}, ${year}`;
    return formattedDate;
  };

  return (
    <div className="review">
      <StarRating rating={review.rating} />
      {review.reviewer_name} {formatDate()}
      <div>{review.summary}</div>
      <div>{review.body}</div>
      <div> {review.recommend ? '✔ I recommend this product' : null} </div>
      <span className="helpful">
        Helpful? <span>Yes </span>
        {'('}{review.helpfulness}{')'}
        <span className="report">Report</span>
      </span>
    </div>
  );
};

export default ReviewsListItem;
