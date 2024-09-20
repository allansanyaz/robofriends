import React from 'react';
import renderWithProviders from '../utils/test-utils';
import { screen } from '@testing-library/react';
import App from '../containers/App';
import { act } from 'react-dom/test-utils';

const userApi = 'https://jsonplaceholder.typicode.com/users'

test('Checking to see if the page is loading', async() => {
    renderWithProviders(<App />);

    expect.assertions(2);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    await act(async() => {
        // show no data before the request this should show loading

        // lets test the fetch request
        try {
            const response = await fetch(userApi)
            const data = await response.json()
            expect(data).toHaveLength(10);
        } catch (error: any) {
            expect(error).toBeNull();
        }
    });


});
