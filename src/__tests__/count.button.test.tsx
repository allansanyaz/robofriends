import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from "@jest/globals";
import userEvent from '@testing-library/user-event';
import CountButtonComponent from 'components/count';
import '@testing-library/jest-dom';

describe('Testing the count button component', () => {
    test('Testing the count button component', async() => {
        render(<CountButtonComponent />);
        expect.assertions(4);
        const button = screen.getByText('Click');
        expect(button).toBeTruthy();
        // simulate the user clicking a button
        userEvent.click(button);
        const count = await screen.findByText('1');
        expect(count).toBeTruthy();
        expect(count.textContent).toEqual('1');
        // simulate the user clicking the button again
        userEvent.click(button);
        const count2 = await screen.findByText('2');
        expect(count2.textContent).toEqual('2');
    });
});