import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, expect, test } from "@jest/globals";
import '@testing-library/jest-dom';
import Card from "../components/card";
import { cardData } from "../utils/dummy.data";

describe('Test render of Card component', () => {
    test('Checking to see if the card component is loading', async() => {
        const view = render(<Card {...cardData} />)
        expect.assertions(2);
        // assert that the card component is rendered
        const cardItem = await screen.findByText(cardData.email);
        expect(cardItem.textContent).toEqual(cardData.email);
        expect(view).toMatchSnapshot();
        
    });
});

