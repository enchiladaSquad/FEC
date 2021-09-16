import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Reviews from 'components/R&R/Reviews';
import ProductOverview from 'components/overview/ProductOverview';
import ProductProvider from 'components/ProductProvider';
import useSetContext from './components/setContext';
import ReviewAddModal from './components/R&R/ReviewAddModal';
import PageHeader from './components/overview/PageHeader';

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
        <>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div id="app-container">
              <PageHeader />
              <ProductProvider contextValues={contextValues}>
                <ProductOverview />
                <Reviews />
              </ProductProvider>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default App;
