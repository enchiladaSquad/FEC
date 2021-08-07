import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Reviews from 'components/R&R/Reviews';
import Questions from 'components/Q&A/questions';
import ProductOverview from 'components/overview/ProductOverview';
import ProductProvider from 'components/ProductProvider';
import useSetContext from './components/setContext';
import ReviewAddModal from './components/R&R/ReviewAddModal';

const App = () => {
  const location = useLocation();
  const { error, loading, context: contextValues } = useSetContext(location);

  return (
    <>
      {error ? (
        <div>
          error:
          {JSON.stringify(error)}
        </div>
      ) : loading ? (
        <div> We Be Loadin </div>
      ) : (
        <ProductProvider contextValues={contextValues}>
          <ProductOverview />
          <Reviews />
          <Questions />
        </ProductProvider>
      )}
    </>
  );
};

export default App;
