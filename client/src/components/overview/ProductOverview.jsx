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

  const [styles, setStyles] = useState(productStyles.results);
  const [styleIndex, setStyleIndex] = useState(0);
  const [currentPhotos, setCurrentPhotos] = useState([]);
  const [skus, setSkus] = useState(null);
  const [altText, setAltText] = useState(productStyles.results[0].name);

  useEffect(() => {
    const { results } = productStyles;
    setStyles(results);
    setStyleIndex(0);
    const { photos, name, skus: styleSkus } = styles[styleIndex];
    setCurrentPhotos(photos || []);
    setAltText(name || '');
    setSkus(styleSkus);
    // setStyles(results, () => {
    //   setStyleIndex(0, () => {
    //     const { photos, name, skus: styleSkus } = styles[styleIndex];
    //     setCurrentPhotos(photos);
    //     setAltText(name);
    //     setSkus(styleSkus);
    //   });
    // });
  }, [productStyles, styles, styleIndex]);

  // useEffect(() => {
  //   setCurrentPhotos(styles[styleIndex].photos);
  // }, [styleIndex]);

  return (
    <div className="overview-container">
      {currentPhotos.length ? (
        <ImageGallery photos={currentPhotos} alt={altText} />
      ) : null}
      <div className="info-panel">
        <div className="star-container">
          <StarRating rating={Number(averageRatings(reviewsMeta.ratings))} />
        </div>
        <ProductDetails product={product} />
        {styles && styleIndex ? (
          <StyleSelector
            styles={styles}
            setStyleIndex={setStyleIndex}
            styleIndex={styleIndex}
          />
        ) : null}
        {skus ? <AddToCart skus={skus} /> : null}
      </div>
    </div>
  );
};

export default ProductOverview;
