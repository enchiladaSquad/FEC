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
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [currentPhotos, setCurrentPhotos] = useState([]);
  const [altText, setAltText] = useState('');

  const [styles, setStyles] = useState(productStyles.results);
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const [skus, setSkus] = useState(styles[currentStyleIndex].skus);

  useEffect(() => {
    setStyleIndex(0);
    setCurrentPhotos(productStyles.results[styleIndex].photos);
    setCurrentPhotoIndex(0);
    setAltText(productStyles.results[styleIndex].name);
  }, []);

  return (
    <div>
      <>
        <div>Header</div>
        {currentPhotos.length ? (
          <ImageGallery
            photos={currentPhotos}
            currentPhotoIndex={currentPhotoIndex}
            setCurrentPhotoIndex={setCurrentPhotoIndex}
            alt={altText}
          />
        ) : null}
        <StarRating rating={averageRatings(reviewsMeta.ratings)} />
        <ProductDetails
          productCategory={product.category || ''}
          productName={product.name || ''}
          productPrice={product.default_price || ''}
        />
        <StyleSelector
          styles={styles}
          setCurrentStyleIndex={setCurrentStyleIndex}
          currentStyleIndex={currentStyleIndex}
        />
        <AddToCart skus={skus} />
      </>
    </div>
  );
};

export default ProductOverview;
