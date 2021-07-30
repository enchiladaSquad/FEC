import React, { useState, useContext } from 'react';
import StarRating from '../SharedComponents';
import { averageRatings } from '../../utils';
import { ProductContext } from '../../context';

const ReviewsBreakdown = () => {
  const { reviews, reviewsMeta, reviewSort, setReviewSort } = useContext(ProductContext);
  const options = {
    Size: ['A size too small', 'Perfect', 'A size too big'],
    Width: ['Too narrow', 'Perfect', 'Too wide'],
    Comfort: ['Uncomfortable', 'Ok', 'Perfect'],
    Quality: ['Poor', 'What I expected', 'Perfect'],
    Length: ['Runs short', 'Perfect', 'Runs long'],
    Fit: ['Runs tight', 'Perfect', 'Runs long'],
  };

  const recommendPercentage = () => {
    const total = Number(reviewsMeta.recommended.true) + Number(reviewsMeta.recommended.false);
    return Math.round((reviewsMeta.recommended.true / total) * 100);
  };

  const characteristicArray = [];
  const formatCharacteristics = () => {
    Object.keys(reviewsMeta.characteristics).map((key) => {
      const obj = { ...reviewsMeta.characteristics[key] };
      obj.char = key;
      characteristicArray.push(obj);
    });
    return characteristicArray;
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
    <div className="reviewsBreakdown">
      <div className="starAndAverage">
        <div className="averageReview">{averageRatings(reviewsMeta.ratings)}</div>
        <StarRating rating={averageRatings(reviewsMeta.ratings)} />
      </div>
      <div className="recPercent">{recommendPercentage()}% of reviews recommended this product</div>
      {ratingPercents().map((rating) => {
        return (
          <div className="starBar" key={JSON.stringify(rating)}>
            {rating} Stars: <progress className="percentBar" value={Number(starPercents[rating])} max="100" />
          </div>
        );
      })}
      {formatCharacteristics().map((characteristic) => {
        const style = {
          marginLeft: `${(characteristic.value * 2.75).toFixed(2)}em`,
        };
        return (
          <div className="characteristic" key={characteristic.id}>
            {characteristic.char}: <br />
            <div className="bar">
              <div className="divider1" />
              <div className="divider2" />
              <div className="icon" style={style}>▲</div>
              <div className="options">
                <div className="opt1">{options[characteristic.char][0]}</div>
                <div className="opt2">{options[characteristic.char][1]}</div>
                <div className="opt3">{options[characteristic.char][2]}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewsBreakdown;
