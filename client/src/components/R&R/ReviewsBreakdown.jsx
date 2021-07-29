import React, { useState, useContext } from 'react';
import StarRating, { AverageRatings } from '../SharedComponents';
import { ProductContext } from '../../context';

const ReviewsBreakdown = () => {
  const { reviews, reviewsMeta, reviewSort, setReviewSort } = useContext(ProductContext);
  console.log(reviewsMeta.ratings);
  console.log(AverageRatings(reviewsMeta.ratings));
  return (
    <>
      <div>ratings</div>
      <StarRating rating={AverageRatings(reviewsMeta.ratings)} />
    </>
  );
};

export default ReviewsBreakdown;
