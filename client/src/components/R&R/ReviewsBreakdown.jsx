import React, { useState, useContext } from 'react';
import StarRating from '../SharedComponents';
import { averageRatings } from '../../utils';
import { ProductContext } from '../../context';

const ReviewsBreakdown = () => {
  const { reviews, reviewsMeta, reviewSort, setReviewSort } = useContext(ProductContext);
  console.log(reviewsMeta.ratings);
  console.log(averageRatings(reviewsMeta.ratings));
  return (
    <>
      <div>Ratings Average</div>
      <StarRating rating={averageRatings(reviewsMeta.ratings)} />
    </>
  );
};

export default ReviewsBreakdown;
