import React, { useState, useContext } from 'react';
// import React from 'react';
import { ProductContext } from '../../context';
import ReviewsBreakdown from './ReviewsBreakdown';
import ReviewsList from './ReviewsList';

const Reviews = () => {
  const { reviews, reviewsMeta, reviewSort, setReviewSort } = useContext(ProductContext);
  const [starFilter, setStarFilter] = useState([]);
  return (
    <div className="reviews">
      <ReviewsBreakdown setStarFilter={setStarFilter} starFilter={starFilter} />
      <ReviewsList starFilter={starFilter} />
    </div>
  );
};

export default Reviews;
