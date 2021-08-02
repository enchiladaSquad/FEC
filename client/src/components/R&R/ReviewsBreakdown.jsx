import React, { useContext } from 'react';
import StarRating from '../SharedComponents';
import { averageRatings } from '../../utils';
import { ProductContext } from '../../context';
import { TextRotationAngleupTwoTone } from '@material-ui/icons';

const ReviewsBreakdown = () => {
  const { reviewsMeta } = useContext(ProductContext);
  const options = {
    Size: ['A size too small', 'Perfect', 'A size too big'],
    Width: ['Too narrow', 'Perfect', 'Too wide'],
    Comfort: ['Uncomfortable', 'Ok', 'Perfect'],
    Quality: ['Poor', 'What I expected', 'Perfect'],
    Length: ['Runs short', 'Perfect', 'Runs long'],
    Fit: ['Runs tight', 'Perfect', 'Runs loose'],
  };

  const calculatePercentage = (num1, num2) => {
    return (Number(num1) / Number(num2)) * 100;
  };

  const recommendPercentage = () => {
    const total = Number(reviewsMeta.recommended.true) + Number(reviewsMeta.recommended.false);
    return Math.round(calculatePercentage(reviewsMeta.recommended.true, total));
  };

  const formatCharacteristics = () => {
    const characteristicArray = [];
    Object.keys(reviewsMeta.characteristics).forEach((key) => {
      const obj = { ...reviewsMeta.characteristics[key] };
      obj.char = key;
      characteristicArray.push(obj);
    });
    return characteristicArray;
  };

  const starPercents = {};
  const calcRatingPercentages = () => {
    const keys = ['5', '4', '3', '2', '1'];
    const ratingTotal = keys.reduce((total, key) => {
      let starCount = Number(reviewsMeta.ratings[key]);
      if (isNaN(starCount)) {
        starCount = 0;
      }
      return total + starCount;
    }, 0);

    keys.forEach((key) => {
      starPercents[key] = 0;
      if (reviewsMeta.ratings[key]) {
        starPercents[key] = calculatePercentage(reviewsMeta.ratings[key], ratingTotal).toFixed(0);
      }
    });
    return keys;
  };

  return (
    <div className="reviewsBreakdown">
      <div className="starAndAverage">
        <div className="averageReview">{averageRatings(reviewsMeta.ratings)}</div>
        <StarRating rating={Number(averageRatings(reviewsMeta.ratings))} />
      </div>
      <div className="recPercent">
        {recommendPercentage()}
        % of reviews recommended this product
      </div>
      {calcRatingPercentages().map((rating) => {
        return (
          <div className="starBar" key={JSON.stringify(rating)}>
            {rating} Stars: <progress className="percentBar" value={Number(starPercents[rating])} max="100" />
          </div>
        );
      })}
      {formatCharacteristics().map((characteristic) => {
        const style = {
          marginLeft: `${(characteristic.value * 2.57).toFixed(2)}em`,
        };
        return (
          <div className="characteristic" key={characteristic.id}>
            {characteristic.char}
            :
            <br />
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
