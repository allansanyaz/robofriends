import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from "@jest/globals";
import Card from "../components/card";
import { cardData } from "../utils/dummy.data";

describe('Test render of Card component', () => {
    test('Checking to see if the card component is loading', async() => {
        render(<Card {...cardData} />)

        // assert that the card component is rendered
        const cardItem = await screen.findByText(cardData.email);
        expect(cardItem.textContent).toEqual(cardData.email);
        
    });
});

