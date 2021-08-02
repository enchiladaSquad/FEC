import React from 'react';
import Reviews from 'components/R&R/Reviews';
import Questions from 'components/Q&A/questions';
import ProductOverview from 'components/overview/ProductOverview';
import ProductProvider from 'components/ProductProvider';
import useSetContext from './components/setContext';

const App = () => {
  const { error, loading, context: contextValues } = useSetContext();
  // Set Context

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
