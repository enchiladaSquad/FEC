// import React, { useState, useContext } from 'react';
import React from 'react';
// import { ProductContext } from '../../context';
import ReviewsBreakdown from './ReviewsBreakdown';
import ReviewsList from './ReviewsList';

const Reviews = () => {
  // const { reviews, reviewsMeta, reviewSort, setReviewSort } = useContext(ProductContext);

  return (
    <div className="reviews">
      <ReviewsBreakdown />
      <ReviewsList />
    </div>
  );
};

export default Reviews;
