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

  const starPercents = {};
  const keys = [];
  const ratingPercents = () => {
    let ratingTotal = 0;
    Object.keys(reviewsMeta.ratings).forEach((key) => {
      keys.push(key);
    });
    keys.sort((a, b) => {
      return b - a;
    });
    keys.forEach((key) => {
      ratingTotal += Number(reviewsMeta.ratings[key]);
    });
    keys.forEach((key) => {
      starPercents[key] = ((reviewsMeta.ratings[key] / ratingTotal) * 100).toFixed(0);
    });
    return keys;
  };
  return (
    <>
      <div className="averageReview">{averageRatings(reviewsMeta.ratings)}</div>
      <StarRating rating={averageRatings(reviewsMeta.ratings)} />
      <div>{recommendPercentage()}% of reviews recommended this product</div>
      {ratingPercents().map((rating) => {
        return (
          <div key={JSON.stringify(rating)}>
            {rating} Stars: <progress className='percentBar' value={Number(starPercents[rating])} max="100"/>
          </div>
        );
      })}
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
