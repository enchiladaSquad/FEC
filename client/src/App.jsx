import React from 'react';
import Reviews from './components/R&R/Reviews.jsx';
import Questions from './components/Q&A/questions.jsx';

import ProductOverview from 'components/overview/ProductOverview.jsx';

const App = () => {
  return (
    <div>
      <ProductOverview />
      <Reviews />
      <Questions/>
    </div>
  );
};

export default App;
