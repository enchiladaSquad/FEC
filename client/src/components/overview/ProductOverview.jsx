import React, { useContext, useState, useEffect } from 'react';

import ProductDetails from 'components/overview/ProductDetails';
import ImageGallery from 'components/overview/ImageGallery';
import StyleSelector from 'components/overview/StyleSelector';
import AddToCart from 'components/overview/AddToCart';
import ProductInfo from 'components/overview/ProductInfo';

import StarRating from 'components/SharedComponents';

import { averageRatings } from 'src/utils';
import { ProductContext } from '../../context';

const ProductOverview = () => {
  const { reviewsMeta, product, productStyles } = useContext(ProductContext);

  const [styleIndex, setStyleIndex] = useState(0);
  const [zooming, setZooming] = useState(false);

  const styles = productStyles.results;
  const { photos: currentPhotos, name: altText, skus } = styles[styleIndex];

  const { description, features } = product;
  const { sale_price: salePrice, name: styleName } = styles[styleIndex];

  useEffect(() => {
    setStyleIndex(0);
  }, [product]);

  return (
    <>
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
              <StarRating
                rating={Number(averageRatings(reviewsMeta.ratings))}
              />
            </div>
            <ProductInfo
              product={product}
              salePrice={salePrice}
              styleName={styleName}
            />
            <StyleSelector
              styles={styles}
              setStyleIndex={setStyleIndex}
              styleIndex={styleIndex}
            />
            <AddToCart skus={skus} />
          </div>
        ) : null}
      </div>
      <ProductDetails description={description} features={features} />
    </>
  );
};

export default ProductOverview;
