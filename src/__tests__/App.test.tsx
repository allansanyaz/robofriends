import React from 'react';
import renderWithProviders from '../utils/test-utils';
import { screen } from '@testing-library/react';
import App from '../containers/App';
import { act } from 'react-dom/test-utils';

const userApi = 'https://jsonplaceholder.typicode.com/users'

test('Checking to see if the page is loading', () => {
    renderWithProviders(<App />);

    // show no data before the request this should show loading
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
});

it('Fetches the robofriends data from the server', async () => {
    await act(async () => {
        await setTimeout(async () => {
            renderWithProviders(<App />);
            const response = await fetch(userApi);
            const data = await response.json();
            expect(screen.getByText(`Leanne Graham`)).toBeInTheDocument();
        }, 1500);
    });
});
