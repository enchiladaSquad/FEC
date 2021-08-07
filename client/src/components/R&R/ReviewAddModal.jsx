import React, { useState, useContext } from 'react';
import axios from 'axios';
import { ProductContext } from '../../context';
import StarRating from '../SharedComponents';
import CharacteristicRadios from './CharacteristicRadios';

const ReviewAddModal = ({ addReviewToggle, setAddReviewToggle, product }) => {
  const { reviews, reviewsMeta } = useContext(ProductContext);
  const [prodId, setProdId] = useState(Number(reviews.product));
  const [rating, setRating] = useState(0);
  const [recommend, setRecommend] = useState(null);
  const [characteristics, setCharacteristics] = useState({});
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [images, setImages] = useState([]);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const userRatingWords = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great',
  };

  const handleRecommend = (event) => {
    setRecommend(event.target.value === 'true');
  };

  const handleImageUpload = (event) => {
    setImages(Object.keys(event.target.files).map((key) => {
      return URL.createObjectURL(event.target.files[key]);
    }));
  };
  const handleCharacteristic = (event) => {
    console.log(event);
    const newChars = { ...characteristics };
    newChars[reviewsMeta.characteristics[event.target.name].id] = Number(event.target.value);
    // ^setting newChars at key of the ID corresponding to the characteristic name 
    // to the rating value selected
    setCharacteristics(newChars);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestBody = {
      product_id: prodId,
      rating,
      summary,
      body,
      recommend,
      name: nickname,
      email,
      photos: images,
      characteristics,
    };

    axios.post('/api/reviews', requestBody)
      .then((response) => { console.debug(response); })
      .then(() => (setAddReviewToggle(false)))
      .catch((err) => { console.error(err); });
  };

  return (
    <div className={`modal ${addReviewToggle ? 'show' : ''}`} onClick={() => { setAddReviewToggle(false) }}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Write Your Review</h3>
          <h4> About the {product.name}</h4>
        </div>
        <form className="modal-body" onSubmit={handleSubmit}>
          <span className="modal-rating">
            *Overall Rating:
            <input className="modal-star-radio" type="radio" name="star" required="required" checked={rating ? 'checked' : ''} />
            <span>
              <StarRating
                required="required"
                setRating={setRating}
                clickable={true}
              />
            </span>
            {rating ? ` ${userRatingWords[rating]}` : ''}
          </span>
          <div className="modal-recommend" onChange={handleRecommend}>
            *Do you recommend this product?:
            <input type="radio" id="recommend-yes" name="recommend" className="radio" value="true" />
            <label htmlFor="recommend-yes">Yes</label>
            <input required="required" type="radio" id="recommend-no" name="recommend" className="radio" value="false" />
            <label htmlFor="recommend-no">No</label>
          </div>
          <div className="modal-characteristics" onChange={handleCharacteristic}>
            <CharacteristicRadios chars={reviewsMeta.characteristics} />
          </div>
          <div className="modal-review-summary">
            Review summary:
            <input
              className="review-text-input"
              type="text"
              maxLength="60"
              placeholder="Example: Best purchase ever!"
              onChange={(event) => {
                setSummary(event.target.value);
              }}
            />
          </div>
          <div className="modal-review-body">
            *Review body:
            <textarea
              rows="5"
              cols="70"
              required="required"
              className="review-text-input"
              maxLength="1000"
              placeholder="Why did you like the product or not?"
              minLength="50"
              onChange={(event) => {
                setBody(event.target.value);
              }}
            />
          </div>
          <div>
            {50 - body.length > 0 ? `*Minimum required characters left: ${50 - body.length}` : 'Minimum reached'}
          </div>
          <div className="modal-photos">
            Upload photos:
            <input
              multiple="multiple"
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleImageUpload}
            />
            <div className="upload-thumbnails">
              {images.length <= 5 ? images.map(
                (image) => (
                  <div className="upload-thumb-container">
                    <img className="upload-preview" src={image} alt="uploadphoto" />
                  </div>
                ),
              ) : <div className="max-photos">Maximum of 5 Photos allowed.</div>}
            </div>
          </div>
          <div className="modal-nickname">
            *Nickname:
            <input
              required="required"
              className="review-text-input"
              type="text"
              maxLength="60"
              placeholder="Example: jackson11!"
              onChange={(event) => {
                setNickname(event.target.value);
              }}
            />
          </div>
          <div className="modal-email">
            *Email:
            <input
              required="required"
              className="review-text-input"
              type="email"
              maxLength="60"
              placeholder="Example: jackson11@email.com!"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div>For authentication reasons only, you will not be emailed</div>
          <input type="submit" className="modal-submit" value="Submit" disabled={images.length <= 5 ? '' : 'disabled'} />
        </form>
        <div className="modal-footer">
          <button className="modal-close-button" onClick={() => { setAddReviewToggle(false) }}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewAddModal;
