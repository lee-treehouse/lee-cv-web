import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(<App />, { wrapper: BrowserRouter });
  const headingElement = screen.getByText(/Lee Taylor/i);
  expect(headingElement).toBeInTheDocument();
});
