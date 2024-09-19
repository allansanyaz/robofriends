import React from 'react';
import { screen } from '@testing-library/react';
import renderWithProviders from '../utils/test-utils';
import '@testing-library/jest-dom';
import { describe, expect, test } from "@jest/globals";
import App from '../containers/App';
import userEvent from '@testing-library/user-event';
import SearchBox from '../components/searchbox';

describe('Test typing in the searchbox', () => {
    test('Checking to see if the searchbox is typing', async() => {
        renderWithProviders(<App />)

        // assert that the searchbox is rendered
        const searchbox: HTMLInputElement = await screen.findByPlaceholderText('search robots');

        await userEvent.type(searchbox, 'Leanne Graham');
        
        expect(searchbox.value).toBe('Leanne Graham');
    });
});