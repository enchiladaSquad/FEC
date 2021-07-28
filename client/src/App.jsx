import React from 'react';
import ProductOverview from 'components/overview/ProductOverview';
import Reviews from 'components/R&R/Reviews';
import Questions from 'components/Q&A/questions';

const App = () => (
  <div>
    <ProductOverview averageRating={5} />
    <Reviews />
    <Questions />
  </div>
);

export default App;
