import React, { useContext, useState, useEffect } from 'react';

import ProductDetails from 'components/overview/ProductDetails';
import ImageCarousel from 'components/overview/ImageCarousel';

import { ProductContext } from '../../context';

const ProductOverview = () => {
  const { reviewsMeta, product, productStyles } = useContext(ProductContext);

  const [styleIndex, setStyleIndex] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [currentPhotos, setCurrentPhotos] = useState([]);
  const [altText, setAltText] = useState('');

  useEffect(() => {
    setStyleIndex(0);
    setCurrentPhotos(productStyles.results[styleIndex].photos);
    setCurrentPhotoIndex(0);
    setAltText(productStyles.results[styleIndex].name);
  }, []);

  return (
    <div>
      <>
        {/* <div>{JSON.stringify(reviewsMeta.ratings)}</div> */}
        <div>Header</div>
        {currentPhotos.length ? (
          <ImageCarousel
            photos={currentPhotos}
            currentPhotoIndex={currentPhotoIndex}
            setCurrentPhotoIndex={setCurrentPhotoIndex}
            alt={altText}
          />
        ) : null}
        <ProductDetails
          productCategory={product.category || ''}
          productName={product.name || ''}
          productPrice={product.default_price || ''}
        />
      </>
    </div>
  );
};

export default ProductOverview;
