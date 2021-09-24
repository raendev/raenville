import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '.';

test('renders Welcome to Raenville header', () => {
  render(<App />);
  const element = screen.getByText(/Welcome to Raenville!/i);
  expect(element).toBeInTheDocument();
});
