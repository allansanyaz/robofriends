import React from 'react';
import { screen, render } from '@testing-library/react';
import renderWithProviders from '../utils/test-utils';
import '@testing-library/jest-dom';
import { describe, expect, test } from "@jest/globals";
import App from '../containers/App';
import userEvent from '@testing-library/user-event';
import { userData } from '../utils/dummy.data';
import CardList from '../components/card.list';
import '@testing-library/jest-dom';

describe('Testing the cardlist component', () => {
    test('Testing the card list component', async() => {
        render(<CardList robots={userData} />);
        expect.assertions(3);
        await expect(screen.findByText(userData[0].name)).resolves.toBeTruthy();
        const data = await screen.findAllByText(userData[0].name)
        expect(data).toHaveLength(1);
        expect(screen.getByText(userData[0].name)).toBeTruthy();
    });
});

