import React, { useState, useContext } from 'react';
import { ProductContext } from '../../context';
import { filterByRating } from '../../utils';
import ReviewsListItem from './ReviewsListItem';
import ReviewAddModal from './ReviewAddModal';

const ReviewsList = ({ starFilter }) => {
  const {
    product,
    reviews,
    reviewsMeta,
    reviewCount,
    setReviewCount,
    setReviewSort,
  } = useContext(ProductContext);
  const [updateCount, setUpdateCount] = useState(0);
  const [addReviewToggle, setAddReviewToggle] = useState(false);
  const myStorage = window.localStorage;

  if (!myStorage.getItem('listCount')) {
    myStorage.setItem('listCount', reviews.results.length);
  }

  const decreaseListItemsCount = () => {
    myStorage.setItem('listCount', myStorage.getItem('listCount') - 1);
    setUpdateCount(Math.random());
  };

  const handleSort = (event) => {
    setReviewSort(event.target.value);
  };

  return (
    <div>
      <div className="numberAndSortType">
        Showing {reviews.results.length + ' '}
        reviews, sorted by {' '}
        <select onChange={handleSort}>
          <option value="relevant">Relevance</option>
          <option value="newest">Newest</option>
          <option value="helpful">Helpful</option>
        </select>
      </div>
      <div className="reviewsList">
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
      <div onClick={() => { setAddReviewToggle(true) }}>Add a review</div>
      {addReviewToggle ? (
        <ReviewAddModal
          addReviewToggle={addReviewToggle}
          setAddReviewToggle={setAddReviewToggle}
          product={product}
        />
      ) : null}
    </div>
  );
};

export default ReviewsList;
