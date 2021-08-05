import React from 'react';
import Reviews from 'components/R&R/Reviews';
import Questions from 'components/Q&A/questions';
import ProductOverview from 'components/overview/ProductOverview';
import ProductProvider from 'components/ProductProvider';
import useSetContext from './components/setContext';
import ReviewAddModal from './components/R&R/ReviewAddModal';

const App = () => {
  const { error, loading, context: contextValues } = useSetContext();

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
          {/* <ReviewAddModal /> */}
        </ProductProvider>
      )}
    </>
  );
};

export default App;
