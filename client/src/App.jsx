import React from 'react';
import ProductOverview from 'components/overview/ProductOverview.jsx';
import Reviews from './components/R&R/Reviews.jsx';
import Questions from './components/Q&A/questions.jsx';

const App = () => (
  <div>
    <ProductOverview averageRating={5} />
    <Reviews />
    <Questions />
  </div>
);

export default App;
