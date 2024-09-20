import React from 'react';
import renderWithProviders from '../utils/test-utils';
import { screen } from '@testing-library/react';
import App from '../containers/App';

const userApi = 'https://jsonplaceholder.typicode.com/users'

test('Checking to see if the page is loading', () => {
    renderWithProviders(<App />);

    // show no data before the request this should show loading
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
});
