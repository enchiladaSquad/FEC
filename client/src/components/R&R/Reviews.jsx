import React, { useState, useContext } from 'react';
import { ProductContext } from '../../context';

const Reviews = () => {
  const {reviews, reviewsMeta, reviewSort, setReviewSort } = useContext(ProductContext)

  return <div>This is the Ratings and Reviews widget!</div>;
};

export default Reviews;