import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const paragraphElement = getByText(/Hello World!/i);
  expect(paragraphElement).toBeInTheDocument();
});
