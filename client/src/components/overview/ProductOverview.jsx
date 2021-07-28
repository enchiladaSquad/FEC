import React, { useContext, useState, useEffect } from 'react';

import ProductDetails from 'components/overview/ProductDetails';
import ImageCarousel from 'components/overview/ImageCarousel';

import { ProductContext } from '../../context';

const ProductOverview = () => {
  const { reviewsMeta, product, productStyles } = useContext(ProductContext);

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [currentPhotos, setCurrentPhotos] = useState([]);

  useEffect(() => {
    setCurrentPhotos(productStyles.results[0].photos);
    setCurrentPhotoIndex(0);
  }, []);

  return (
    <div>
      <>
        <div>{JSON.stringify(reviewsMeta.ratings)}</div>
        {currentPhotos.length ? (
          <ImageCarousel
            photos={currentPhotos}
            currentPhotoIndex={currentPhotoIndex}
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
