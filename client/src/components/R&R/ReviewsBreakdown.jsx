import React, { useState, useContext } from 'react';
import StarRating from '../SharedComponents';
import { averageRatings } from '../../utils';
import { ProductContext } from '../../context';

const ReviewsBreakdown = () => {
  const { reviews, reviewsMeta, reviewSort, setReviewSort } = useContext(ProductContext);
  return (
    <>
      <div>Ratings Average</div>
      <StarRating rating={Number(averageRatings(reviewsMeta.ratings))} />
    </>
  );
};

export default ReviewsBreakdown;
