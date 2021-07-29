import React, { useState, useContext } from 'react';
import StarRating from '../SharedComponents';
import { averageRatings } from '../../utils';
import { ProductContext } from '../../context';

const ReviewsBreakdown = () => {
  const { reviews, reviewsMeta, reviewSort, setReviewSort } = useContext(ProductContext);

  const recommendPercentage = () => {
    const total = Number(reviewsMeta.recommended.true) + Number(reviewsMeta.recommended.false);
    return Math.round((reviewsMeta.recommended.true / total) * 100);
  };

  const formatCharacteristics = () => {
    return Object.keys(reviewsMeta.characteristics).map((key) => {
      reviewsMeta.characteristics[key].char = key;
      return reviewsMeta.characteristics[key];
    });
  };

  return (
    <>
      <div>{averageRatings(reviewsMeta.ratings)}</div>
      <StarRating rating={averageRatings(reviewsMeta.ratings)} />
      <div>{recommendPercentage()}% of reviews recommended this product</div>
      {formatCharacteristics().map((characteristic) => {
        return (
          <div key={characteristic.id}>
            {characteristic.char}: {Number((characteristic.value)).toFixed(1)}
          </div>
        );
      })}
    </>
  );
};

export default ReviewsBreakdown;
