import { FormatIndentDecrease } from '@material-ui/icons';
import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
// import React from 'react';
// import { ProductContext } from '../../context';
import StarRating from '../SharedComponents';

const ReviewsListItem = ({ review, decrease }) => {
  const [voted, setVoted] = useState(0);
  const [reported, setReported] = useState(0);
  const myStorage = window.localStorage;
  if (!myStorage.getItem(`${review.review_id}helpful`)) {
    myStorage.setItem(`${review.review_id}helpful`, review.helpfulness);
  }
  if (!myStorage.getItem(`${review.review_id}voted`)) {
    myStorage.setItem(`${review.review_id}voted`, false);
  }
  if (!myStorage.getItem(`${review.review_id}reported`)) {
    myStorage.setItem(`${review.review_id}reported`, 'false');
  }

  const formatDate = () => {
    const months = {
      1: 'January',
      2: 'February',
      3: 'March',
      4: 'April',
      5: 'May',
      6: 'June',
      7: 'July',
      8: 'August',
      9: 'September',
      10: 'October',
      11: 'November',
      12: 'December',
    };
    let day = review.date.slice(8, 10);
    let month = review.date.slice(5, 7);
    const year = review.date.slice(0, 4);
    if (day[0] === '0') {
      day = day.slice(1);
    }
    if (month[0] === '0') {
      month = month.slice(1);
    }
    const formattedDate = `${months[month]} ${day}, ${year}`;
    return formattedDate;
  };

  const handleYesVote = () => {
    if (myStorage.getItem(`${review.review_id}voted`) === 'false') {
      myStorage.setItem(`${review.review_id}helpful`, Number(myStorage[`${review.review_id}helpful`]) + 1);
      myStorage.setItem(`${review.review_id}voted`, true);
      setVoted(Math.random());
      axios.put(`/reviews/${review.review_id}/helpful`);
    }
  };

  const handleReport = () => {
    myStorage.setItem(`${review.review_id}reported`, 'true');
    setReported(Math.random());
    decrease();
  };

  return (

    myStorage.getItem(`${review.review_id}reported`) === 'true' ? null :
      (
        <div className="review">
          <StarRating rating={review.rating} />
          {review.reviewer_name} {formatDate()}
          <div>{review.summary}</div>
          <div>{review.body}</div>
          <div> {review.recommend ? '✔ I recommend this product' : null} </div>
          {review.response !== null ? <div className="response">Response: This is a response!</div> : null}
          <div className="helpful">
            Helpful? <span onClick={handleYesVote}>Yes </span>
            {'('}{myStorage[`${review.review_id}helpful`]}{')'}
            <span className="report" onClick={handleReport}>Report</span>
          </div>
        </div >
      )
  );
};

export default ReviewsListItem;
