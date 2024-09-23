import React from 'react';
import renderWithProviders from '../utils/test-utils';
import { screen } from '@testing-library/react';
import App from '../containers/App';

const userApi = 'https://jsonplaceholder.typicode.com/users'

describe('Test render of App component', () => {
    const view = renderWithProviders(<App />);

    test('Checking to see if the page is loading', async() => {
    
        await (async() => {
            // show no data before the request this should show loading
            expect.assertions(2);
            expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    
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

    test('testing some of the functions in the view', async() => {
        // test on the instances
        // expect(view).toMatchSnapshot();
    });

});
