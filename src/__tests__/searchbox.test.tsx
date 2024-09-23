import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from "@jest/globals";
import App from '../containers/App';
import userEvent from '@testing-library/user-event';
import SearchBox from '../components/searchbox';

let onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

beforeEach(() => {
    onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {}
});

describe('Test typing in the searchbox', () => {
    test('Checking to see if the searchbox is typing', async() => {

        render(<SearchBox searchChange={onSearchChange} />);
        expect.assertions(1);
        // assert that the searchbox is rendered
        const searchbox: HTMLInputElement = await screen.findByPlaceholderText('search robots');

        await userEvent.type(searchbox, 'Leanne Graham');
        
        expect(searchbox.value).toBe('Leanne Graham');
    });
});