import React from 'react';
import { screen, render } from '@testing-library/react';
import App from 'containers/App';
import renderWithProviders from 'utils/test-utils';
import { describe, expect, test } from "@jest/globals";
import { RootState } from 'store/store';
import { robotsSelector, searchSelector } from 'store/selectors';
import { userData } from 'utils/dummy.data';
import { CombinedState } from 'redux';
import { ISearchRobots } from 'store/robot-slice';
import { IRobotState } from 'store/request-robots';

describe('Tesating out the selector components', () => {

    const view = renderWithProviders(<App />);

    test('Testing the robots selector', () => {
        const initialState: CombinedState<{ robots: IRobotState, search: ISearchRobots }> = {
            robots: {
                robots: userData
            },
            search: {
                searchField: 'test'
            }
        };
        expect(robotsSelector(initialState as RootState)).toEqual({ robots: userData });
    });

    test('Testing the search selector', () => {
        const initialState: CombinedState<{ robots: IRobotState, search: ISearchRobots }> = {
            robots: {
                robots: userData
            },
            search: {
                searchField: 'test'
            }
        };
        expect(searchSelector(initialState as RootState)).toEqual({ searchField: 'test' });
    });
});