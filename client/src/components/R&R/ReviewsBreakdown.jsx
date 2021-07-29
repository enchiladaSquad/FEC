import React, { useState, useContext } from 'react';
import StarRating, { AverageRatings } from '../SharedComponents';
import { ProductContext } from '../../context';

const ReviewsBreakdown = () => {
  const { reviews, reviewsMeta, reviewSort, setReviewSort } = useContext(ProductContext);
  return (
    <>
      <div>ratings</div>
      <StarRating rating={AverageRatings(reviewsMeta.ratings)} />
    </>
  );
};

export default ReviewsBreakdown;
