import React from 'react';
import renderWithProviders from './utils/test-utils';
import { render, screen } from '@testing-library/react';
import { requestRobots } from './store/request-robots';
import App from './containers/App';
import store from './store/store';


test('Checking to see if the page is loading', () => {
    renderWithProviders(<App />)

    // show no data before the request this should show loading
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
});

test('Fetches the robofriends data from the server', async() => {
    renderWithProviders(<App />)
    // perform a request to the server using the fetch api and jest
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json()
        await expect(screen.getByText(`${data[0].name}`)).toBeInTheDocument();
    } catch (error) {
        expect(error).toBeNull();
    }
});
