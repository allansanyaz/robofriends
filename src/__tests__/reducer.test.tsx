import React from 'react';
import { screen, render } from '@testing-library/react';
import App from 'containers/App';
import renderWithProviders from 'utils/test-utils';
import { describe, expect, test } from "@jest/globals";
import RobotsReducer, { searchRobots, ISearchRobots } from 'store/robot-slice';
import RobotSliceReducer, { setRobots, IRobotData, requestRobots } from 'store/request-robots';
import { userData, cardData } from 'utils/dummy.data';
import { searchSelector, robotsSelector } from 'store/selectors';

describe('Testing the robots search reducer', () => {

    afterEach(() => {
        console.log("*".repeat(10));
        console.log(view.store.getState());
        console.log(view.store.getState());
        // console.log(view.store.dispatch(searchRobots('item')));
        // console.log(view.store.dispatch(setRobots(userData)));
    });

    const view = renderWithProviders(<App />);

    test('Should return the initial state', () => {
        expect.assertions(1);
        const initialState = {
            searchField: '',
        };
        expect(RobotsReducer(initialState, searchRobots('test'))).toEqual({
            searchField: 'test',
        });
    });

    test('Testing out dispatch method from view', () => {
        expect.assertions(1);
        expect(view.store.dispatch(searchRobots({ type: 'searchRobots/searchRobots', payload: 'item' }))).toEqual({
            payload: {
                type: "searchRobots/searchRobots",
                payload: "item",
            },
            type: "searchRobots/searchRobots",
        });
    })

    test('handle the setRobots action', () => {
        const initialState = {
            robots: userData,
            error: null,
            isPending: false,
        };

        expect(RobotSliceReducer(initialState, setRobots([{
            ...cardData
        }])).robots).toEqual(
            [
                {
                    name: "John Wick",
                    email: "john@wick.com",
                    id: 1
                }
            ]
        );
    });

    test('The robots action dispatch from the store', () => {
        expect.assertions(1);
        expect(view.store.dispatch(setRobots({ type: 'requestRobots/setRobots', payload: userData }))).toEqual({
            payload: {
                type: "requestRobots/setRobots",
                payload: userData,
            },
            type: "requestRobots/setRobots",
        });
    })

    test('Pending stages of the requestRobots action', () => {
        const initialState = {
            robots: [],
            error: null,
            isPending: false,
        };

        expect(RobotSliceReducer(initialState, requestRobots.fulfilled([], '1', '2'))).toEqual({
            robots: [],
            error: null,
            isPending: false,
        });
    });

});


