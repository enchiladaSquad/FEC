import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import 'regenerator-runtime/runtime';

import App from './App';
import useSetContext from './components/setContext';

jest.mock('./components/setContext.jsx');

const product = jest.requireActual('../../server/data/18079');
const productStyles = jest.requireActual(
  '../../server/data/exampleProductIdStyleRes',
);
const reviews = jest.requireActual('../../server/data/exampleReviewData');
const reviewsMeta = jest.requireActual('../../server/data/exampleReviewMeta');

const mockContext = {
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
};

const getMockContext = (loading) => ({
  error: false,
  loading,
  context: mockContext,
});

jest.mock('react', () => {
  const react = jest.requireActual('react');

  return {
    ...react,
    useContext: () => mockContext,
  };
});

xdescribe('App Tests', () => {
  it('should have a loading state', async () => {
    useSetContext.mockReturnValue(getMockContext(true));

    let cmpt;

    await act(async () => {
      cmpt = render(<App />);
      expect(cmpt.getByText('We Be Loadin')).toBeInTheDocument();
    });
  });

  it('should have a title displayed when loading is done', async () => {
    useSetContext.mockReturnValue(getMockContext(false));

    let cmpt;

    await act(async () => {
      cmpt = render(<App />);
    });

    const header = cmpt.getByTitle('page-title').textContent;

    expect(header).toBe('Hello Catwalk');
  });
});
