

import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('App', () => {

  it('renders the title', async () => {
	  render(<App />);
	  expect(await screen.findByTestId('ciao')).toBeInTheDocument();
  });
});
