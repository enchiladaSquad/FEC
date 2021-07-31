import React, { useState, useContext } from 'react';
import { ProductContext } from '../../context';
import ReviewsListItem from './ReviewsListItem';

const ReviewsList = () => {
  const {
    reviews,
    reviewsMeta,
    reviewSort,
    setReviewSort,
  } = useContext(ProductContext);

  return (
    <div className="reviewsList">
      <div className="numberAndSortType">
        Showing {reviews.count} of {' '}
        {Number(reviewsMeta.recommended.true) + Number(reviewsMeta.recommended.false) + ''} {' '}
        reviews, sorted by {reviewSort}
      </div>
      {reviews.results.map((review) => {
        return <ReviewsListItem key={review.review_id} review={review} />;
      })}
    </div>
  );
};

export default ReviewsList;
