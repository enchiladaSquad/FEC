import React, { useState, useContext } from 'react';
import { ProductContext } from '../../context';
import { filterByRating } from '../../utils';
import ReviewsListItem from './ReviewsListItem';

const ReviewsList = () => {
  const {
    reviews,
    reviewsMeta,
    reviewCount,
    starFilter,
    setStarFilter,
    setReviewCount,
    setReviewSort,
  } = useContext(ProductContext);
  const [updateCount, setUpdateCount] = useState(0);
  const myStorage = window.localStorage;

  if (!myStorage.getItem('listCount')) {
    myStorage.setItem('listCount', reviews.results.length);
  }

  const decreaseListItemsCount = () => {
    myStorage.setItem('listCount', myStorage.getItem('listCount') - 1);
    setUpdateCount(Math.random());
  };

  const handleSort = (event) => {
    event.preventDefault();
    setReviewSort(event.target.value);
  };

  const getReviewsTotal = () => {
    return (
      (Number(reviewsMeta.recommended.true
        ? reviewsMeta.recommended.true : 0)
        + Number(reviewsMeta.recommended.false
          ? reviewsMeta.recommended.false : 0)).toString()
    );
  };

  return (
    <div>
      <div className="reviewsList">
        <div className="numberAndSortType">
          Showing {reviews.results.length} of {' '}
          {getReviewsTotal()} {' '}
          reviews, sorted by
          <select onChange={handleSort}>
            <option value="relevant">Relevance</option>
            <option value="newest">Newest</option>
            <option value="helpful">Helpful</option>
          </select>
        </div>
        {starFilter.length
          ? filterByRating(starFilter, reviews.results).map((review) => {
            return (
              <ReviewsListItem
                key={review.review_id}
                review={review}
                decrease={decreaseListItemsCount}
              />
            );
          })
          : reviews.results.map((review) => {
            return (
              <ReviewsListItem
                key={review.review_id}
                review={review}
                decrease={decreaseListItemsCount}
              />
            );
          })}
      </div>
      <div onClick={() => { setReviewCount(reviewCount + 2); }}>More Reviews</div>
      <div>Add a review</div>
    </div>
  );
};

export default ReviewsList;
