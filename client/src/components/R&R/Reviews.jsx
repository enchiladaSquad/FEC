import React, { useState, useContext } from 'react';
import { ProductContext } from '../../context';
import ReviewsBreakdown from './ReviewsBreakdown';

const Reviews = () => {
  const {reviews, reviewsMeta, reviewSort, setReviewSort } = useContext(ProductContext);

  return <ReviewsBreakdown />;
};

export default Reviews;
