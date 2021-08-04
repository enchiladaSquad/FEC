import React, { useContext, useState, useEffect } from 'react';

import ProductDetails from 'components/overview/ProductDetails';
import ImageGallery from 'components/overview/ImageGallery';
import StyleSelector from 'components/overview/StyleSelector';
import AddToCart from 'components/overview/AddToCart';

import StarRating from 'components/SharedComponents';

import { averageRatings } from 'src/utils';
import { ProductContext } from '../../context';

const ProductOverview = () => {
  const { reviewsMeta, product, productStyles } = useContext(ProductContext);

  const [styleIndex, setStyleIndex] = useState(0);
  const [zooming, setZooming] = useState(false);

  const styles = productStyles.results;
  const { photos: currentPhotos, name: altText, skus } = styles[styleIndex];

  const salePrice = styles[styleIndex].sale_price;

  useEffect(() => {
    setStyleIndex(0);
  }, [product]);

  return (
    <div className="overview-container">
      {currentPhotos.length ? (
        <ImageGallery
          photos={currentPhotos}
          zooming={zooming}
          alt={altText}
          setZooming={setZooming}
        />
      ) : null}
      {!zooming ? (
        <div className="info-panel">
          <div className="star-container">
            <StarRating rating={Number(averageRatings(reviewsMeta.ratings))} />
          </div>
          <ProductDetails product={product} salePrice={salePrice} />
          <StyleSelector
            styles={styles}
            setStyleIndex={setStyleIndex}
            styleIndex={styleIndex}
          />
          <AddToCart skus={skus} />
        </div>
      ) : null}
    </div>
  );
};

export default ProductOverview;
