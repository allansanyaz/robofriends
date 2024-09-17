import React from 'react';
import renderWithProviders from './utils/test-utils';
import { screen } from '@testing-library/react';
import App from './containers/App';
import { act } from 'react-dom/test-utils';


test('Checking to see if the page is loading', () => {
    renderWithProviders(<App />)

    // show no data before the request this should show loading
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
});

// test('Fetches the robofriends data from the server', async() => {
//     renderWithProviders(<App />)
//     // perform a request to the server using the fetch api and jest
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json()
//     await setTimeout(async() => {
//         await expect(screen.getByText(`Beef jerky`)).toBeInTheDocument();
//     }, 1500);
// });

it('Fetches the robofriends data from the server', async () => {
    await act(async () => {
        await setTimeout(async () => {
            renderWithProviders(<App />);
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            expect(screen.getByText(`Leanne Graham`)).toBeInTheDocument();
        }, 1500);
    });
});
