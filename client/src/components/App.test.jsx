import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import useForceUpdate from '../hooks/forceUpdate';
import App from '../components/App';

jest.mock('../setContext', () => {
  const product = jest.requireActual('../../../server/data/18079');
  const productStyles = jest.requireActual(
    '../../../server/data/exampleProductIdStyleRes',
  );
  const reviews = jest.requireActual('../../../server/data/exampleReviewData');
  const reviewsMeta = jest.requireActual(
    '../../../server/data/exampleReviewMeta',
  );

  const react = jest.requireActual('react');
  // const rerender = useForceUpdate();

  const [loading, setLoading] = react.useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 500)();

  return {
    error: false,
    loading,
    context: {
      productId: 18078,
      product,
      productStyles,
      reportRerender: () => {}, // should rerender
      reviews,
      reviewsMeta,
      reviewPage: 1,
      reviewCount: 5,
      reviewSort: 'relevant',
      setReportRerender: () => {}, // should rerender
      setReviewCount: () => {},
      setReviewSort: () => {},
    },
  };
});

describe('App Tests', () => {
  it('should load the component, indicate loading status, complete loading, then have a header', async () => {
    let cmpt;

    await act(async () => {
      cmpt = render(<App />);
      expect(cmpt.getByText('We Be Loadin')).toBeInTheDocument();
    });

    const header = cmpt.getByTitle('page-title').textContent;

    expect(header).toBe('Hello Catwalk');
  });
});
