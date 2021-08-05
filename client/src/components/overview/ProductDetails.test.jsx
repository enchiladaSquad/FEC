import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('ProductDetails', () => {
	test.only('the simplest test', () => {
    const aDiv = render(<div />);

    expect(aDiv).toBeTruthy();
  });
});