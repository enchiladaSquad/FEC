import React, { useState, useEffect } from 'react';
import Reviews from './components/R&R/Reviews.jsx';
import Questions from './components/Q&A/questions.jsx';
import ProductOverview from 'components/overview/ProductOverview.jsx';
import ProductProvider from './components/ProductProvider.jsx';

const port = 4000;
const baseUrl = `http://localhost:${port}`;


const App = () => {

  return (
    <>
      <ProductProvider>
        <ProductOverview />
        <Reviews />
        <Questions />
      </ProductProvider>
    </>
  );
};

export default App;

